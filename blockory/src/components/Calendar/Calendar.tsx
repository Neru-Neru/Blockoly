import React, { useRef } from 'react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import allLocales from '@fullcalendar/core/locales-all'

import './Calendar.scss'

type Props = {
  diaryInfoList: DiaryInfo[] | undefined
}

const Calendar: React.FC<Props> = (props) => {
  const { diaryInfoList } = props

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
      events={diaryInfoList}
      showNonCurrentDates={false}
    />
  )
}

export default Calendar
