import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsResponse,
  OrdersDetailsParams,
} from '../get-order-details'

export const getOrdersDetailsMock = http.get<
  OrdersDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      phone: '123456789',
      email: 'johndoe@example.com',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 5000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Pizza Peperoni' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 2000,
        product: { name: 'Pizza Marguerita' },
        quantity: 2,
      },
    ],
  })
})
