import { http, HttpResponse } from 'msw'

import { getManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  getManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'restaurant-id',
    name: 'Pizza Shop',
    managerId: 'manager-id',
    description: 'Restaurant Description',
    createdAt: new Date(),
    updatedAt: null,
  })
})
