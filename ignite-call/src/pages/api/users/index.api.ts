import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, username } = req.body

  const userExists = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' })
  }

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  setCookie(
    {
      res,
    },
    '@ignitecall:userId',
    user.id,
    {
      maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
      path: '/',
    },
  )

  return res.status(201).json(user)
}
