import { Calendar } from '@/components/Calendar'
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles'

export function CalendarStep() {
  const isDateSelected = true

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            terça-feira <span>20 de setembro</span>
          </TimePickerHeader>

          <TimePickerList>
            <TimePickerItem>01:00h</TimePickerItem>
            <TimePickerItem>02:00h</TimePickerItem>
            <TimePickerItem>03:00h</TimePickerItem>
            <TimePickerItem>04:00h</TimePickerItem>
            <TimePickerItem>05:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>07:00h</TimePickerItem>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>09:00h</TimePickerItem>
            <TimePickerItem>10:00h</TimePickerItem>
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  )
}
