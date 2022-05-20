import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Calendar from 'components/Calendar/Calendar'

import styles from './MyDiaryList.module.scss'

type DiaryInfo = {
  diaryId: string
  title: string
  writerId: string
  writerName: string
  description: string
  thumbnailBody: string
}

type DiaryInfoList = {
  diaryCount: number
  items: DiaryInfo[]
}

const MyDiaryList: React.FC = () => {
  const today = new Date()
  const [date, setDate] = useState({ year: today.getFullYear(), month: today.getMonth() })
  const [DiaryInfoList, setDiaryInfoList] = useState<DiaryInfo[]>()

  useEffect(() => {
    const fetchData = async () => {
      const result: DiaryInfoList = await axios.get(`http://localhost:8080/AllDiaryInfoMonth`, {
        params: {
          // year: date.year,
          year: 2021,
          month: date.month,
        },
      })
      setDiaryInfoList(result.items)
    }
    fetchData()
  }, [date])

  const pickDateOnCalendar = (year: number, month: number) => {
    setDate({ year, month })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-5 p-3 h-100">
          <div className="d-flex h-25 pt-5">
            <div className={`border d-flex align-items-center justify-content-center bg-light ${styles.profile}`}>
              <p className={styles.iconWrapper}>
                {/* Icon */}
                <i className="fas fa-glasses" />
              </p>
            </div>
            <div className="mx-3">{/* Name */}</div>
          </div>
          <div className="h-75">
            <Calendar />
          </div>
        </div>
        <div className="col-7 p-3 h-100">
          <h3 className={styles.title}>じぶんのにっき</h3>
          {/* <DiaryList imageList={daylist} clickTile={clickTile} /> */}
        </div>
      </div>
    </div>
  )
}

export default MyDiaryList
