import { CaretLeft, CaretRight } from 'phosphor-react'
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarHeader,
  CalendarTitle,
} from './styles'
import { getWeekDays } from '@/utils/get-week-days'

export function Calendar() {
  const shortWeekDays = getWeekDays({ short: true })

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          Maio <span>2024</span>
        </CalendarTitle>
      </CalendarHeader>

      <CalendarActions>
        <button>
          <CaretLeft />
        </button>
        <button>
          <CaretRight />
        </button>
      </CalendarActions>

      <CalendarBody>
        <thead>
          {shortWeekDays.map((weekDay) => (
            <th key={weekDay}>{weekDay}.</th>
          ))}
        </thead>

        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}
