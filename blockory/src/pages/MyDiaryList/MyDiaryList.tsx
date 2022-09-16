import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Calendar from 'components/Calendar/Calendar'
import ThumbnailList from 'components/ThumbnailList/ThumbnailList'

import { useLocation } from 'react-router-dom'
import styles from './MyDiaryList.module.scss'

const MyDiaryList: React.FC = () => {
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

  console.log(date)

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get<DiaryInfoList>(`${process.env.REACT_APP_API_ENDPOINT}/DiaryInfo`, {
        params: {
          year: date.year,
          // year: 2021,
          month: date.month,
        },
      })
      const result: DiaryInfoList = res.data
      setDiaryInfoList(result)
    }
    fetchData()
  }, [date])

  console.log({ mydiary: diaryInfoList })

  const pickDateOnCalendar = (year: number, month: number, _date: number) => {
    console.log(year, month, _date)
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
            <h3 className={styles.title}>じぶんのにっき</h3>
            <ThumbnailList diaryInfoList={diaryInfoList} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyDiaryList
