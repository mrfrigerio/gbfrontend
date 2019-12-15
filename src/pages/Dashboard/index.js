import React, { useState, useMemo, useEffect } from 'react'
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
  startOfHour
} from 'date-fns'
import pt_BR from 'date-fns/locale/pt-BR'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import api from '~/services/api'

import { Container, Time } from './styles'

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

export default function Dashboard() {
  const [schedule, setSchedule] = useState([])
  const [date, setDate] = useState(new Date())
  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt_BR }),
    [date]
  )

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('/schedule', {
        params: { date }
      })
      const data = range.map(hour => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0)
        return {
          time: `${hour}:00`,
          past: isBefore(checkDate, new Date()),
          appointment: response.data.find(a =>
            isEqual(startOfHour(parseISO(a.date)), startOfHour(checkDate))
          )
        }
      })
      setSchedule(data)
    }
    loadSchedule()
  }, [date])

  function handlePrevDay() {
    setDate(subDays(date, 1))
  }
  function handleNextDay() {
    setDate(addDays(date, 1))
  }

  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#fff" onClick={handlePrevDay} />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button">
          <MdChevronRight size={36} color="#fff" onClick={handleNextDay} />
        </button>
      </header>

      <ul>
        {schedule.map(time => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Disponível'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  )
}
