import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Calendar from 'components/Calendar/Calendar'

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

  return <Calendar />
}

export default MyDiaryList
