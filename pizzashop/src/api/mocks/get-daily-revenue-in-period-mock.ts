import { http, HttpResponse } from 'msw'

import { GetDailyRevenueResponse } from '../get-daily-revenue-in-period'

export const getDayliRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '18/02/2024', receipt: 2000 },
    { date: '19/02/2024', receipt: 800 },
    { date: '20/02/2024', receipt: 8000 },
    { date: '21/02/2024', receipt: 540 },
    { date: '22/02/2024', receipt: 400 },
    { date: '23/02/2024', receipt: 700 },
    { date: '24/02/2024', receipt: 1000 },
  ])
})
