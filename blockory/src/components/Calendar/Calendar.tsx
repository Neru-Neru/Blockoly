import React, { useRef } from 'react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import allLocales from '@fullcalendar/core/locales-all'

import './Calendar.scss'

type Props = {
  diaryInfoList: DiaryInfoList | undefined
  date: { year: number; month: number }
  setDate: React.Dispatch<
    React.SetStateAction<{
      year: number
      month: number
    }>
  >
}

const Calendar: React.FC<Props> = (props) => {
  const { diaryInfoList, date, setDate } = props

  const calendarRef = useRef<FullCalendar>(null!)

  const onClickPrev = () => {
    const calendarApi = calendarRef.current.getApi()
    calendarApi.prev()
    setDate({ year: calendarApi.getDate().getFullYear(), month: calendarApi.getDate().getMonth() + 1 })
  }

  const onClickNext = () => {
    const calendarApi = calendarRef.current.getApi()
    calendarApi.next()
    setDate({ year: calendarApi.getDate().getFullYear(), month: calendarApi.getDate().getMonth() + 1 })
  }

  const generateEvent = (_diaryInfoList: DiaryInfoList | undefined) => {
    const events = _diaryInfoList?.Diaries.map((diary: DiaryInfo) => ({
      start: diary.TargetDate,
      title: diary.Title,
    }))
    return events
  }

  return (
    <FullCalendar
      ref={calendarRef}
      plugins={[dayGridPlugin]}
      initialDate={`${String(date.year)}-${String(`0${date.month}`).slice(-2)}-01`}
      initialView="dayGridMonth"
      locales={allLocales}
      locale="ja"
      height="auto"
      customButtons={{
        prevButton: { text: '<', click: onClickPrev },
        nextButton: { text: '>', click: onClickNext },
      }}
      buttonText={{ today: 'きょう' }}
      headerToolbar={{
        start: '',
        center: 'title',
        end: 'prevButton today nextButton',
      }}
      events={generateEvent(diaryInfoList)}
      showNonCurrentDates={false}
    />
  )
}

export default Calendar
