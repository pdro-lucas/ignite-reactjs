import type { NextApiRequest, NextApiResponse } from 'next'

import { stripe } from '@/lib/stripe'

import { ProductProps } from '..'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { products } = req.body as ProductProps

  console.log(products)

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).end('Method not allowed')
  }

  if (!products) {
    return res.status(400).json({
      error: 'Missing priceId',
    })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const productsLineItems = products.map((product) => ({
    price: product.defaultPriceId,
    quantity: product.quantity,
  }))

  console.log(productsLineItems)

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [...productsLineItems],
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
