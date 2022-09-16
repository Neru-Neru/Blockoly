import React, { useState, useEffect } from 'react'

import axios from 'axios'
import { useLocation } from 'react-router-dom'

import Calendar from 'components/Calendar/Calendar'
import ThumbnailList from 'components/ThumbnailList/ThumbnailList'

import styles from './OtherDiaryList.module.scss'

const OtherDiaryList: React.FC = () => {
  const location = useLocation()

  const getDate = () => {
    if (location.state) {
      const state = location.state as { date: string }
      const splittedDate = state.date.split('-')
      return { year: Number(splittedDate[0]), month: Number(splittedDate[1]) }
    }
    return { year: today.getFullYear(), month: today.getMonth() + 1 }
  }

  const today = new Date()
  const [date, setDate] = useState(getDate())
  const [diaryInfoList, setDiaryInfoList] = useState<DiaryInfoList>()

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get<DiaryInfoList>(`${process.env.REACT_APP_API_ENDPOINT}/DiaryInfo`, {
        params: {
          year: date.year,
          month: date.month,
        },
      })
      const result: DiaryInfoList = res.data
      setDiaryInfoList(result)
    }
    fetchData()
  }, [date])

  console.log('otherdiary', diaryInfoList)

  const pickDateOnCalendar = (year: number, month: number) => {
    setDate({ year, month })
  }

  return (
    <div className="container">
      <div className="row">
        <div className={styles.wrapper}>
          <div className={styles.calendarWrapper}>
            <div className="h-100">
              <Calendar diaryInfoList={diaryInfoList} date={date} setDate={setDate} />
            </div>
          </div>
          <div className={styles.thumbnailListWrapper}>
            <h3 className={styles.title}>みんなのにっき</h3>
            <ThumbnailList diaryInfoList={diaryInfoList} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherDiaryList
