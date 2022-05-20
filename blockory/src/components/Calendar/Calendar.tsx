import React, { useRef } from 'react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import allLocales from '@fullcalendar/core/locales-all'

import './Calendar.scss'

const Calendar: React.FC = () => {
  const events = [{ title: 'event1', start: '2022-05-01' }]

  const calendarRef = useRef<FullCalendar>(null!)

  const onClickPrev = () => {
    const calendarApi = calendarRef.current.getApi()
    calendarApi.prev()
  }

  const onClickNext = () => {
    const calendarApi = calendarRef.current.getApi()
    calendarApi.next()
  }

  return (
    <FullCalendar
      ref={calendarRef}
      plugins={[dayGridPlugin]}
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
      events={events}
      showNonCurrentDates={false}
    />
  )
}

export default Calendar
