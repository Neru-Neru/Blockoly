import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Calendar from 'components/Calendar/Calendar'
import ThumbnailList from 'components/ThumbnailList/ThumbnailList'

import styles from './MyDiaryList.module.scss'

const MyDiaryList: React.FC = () => {
  const today = new Date()
  const [date, setDate] = useState({ year: today.getFullYear(), month: today.getMonth() })
  const [diaryInfoList, setDiaryInfoList] = useState<DiaryInfoList>()

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get<DiaryInfoList>(`${process.env.REACT_APP_API_ENDPOINT}/DiaryInfo`, {
        params: {
          // year: date.year,
          year: 2021,
          month: date.month,
        },
      })
      const result: DiaryInfoList = res.data
      setDiaryInfoList(result)
    }
    fetchData()
  }, [date])

  console.log('mydiary', diaryInfoList)

  const pickDateOnCalendar = (year: number, month: number) => {
    setDate({ year, month })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-5 h-100 p-3">
          <div className="h-25 d-flex pt-5">
            <div className={styles.profile}>
              <p className={styles.iconWrapper}>
                {/* Icon */}
                <i className="fas fa-glasses" />
              </p>
            </div>
            <div className="mx-3">{/* Name */}</div>
          </div>
          <div className="h-75">
            <Calendar diaryInfoList={diaryInfoList} />
          </div>
        </div>
        <div className="col-7 h-100 p-3">
          <h3 className={styles.title}>じぶんのにっき</h3>
          <ThumbnailList diaryInfoList={diaryInfoList} />
        </div>
      </div>
    </div>
  )
}

export default MyDiaryList
