import React, { useState } from 'react'
import axios from 'axios'

type Props = {
  diaryBody: string
  targetDate: Date
}

const WritingDiaryStep2: React.FC<Props> = (props) => {
  const { diaryBody, targetDate } = props

  const [diary, setDiary] = useState<Diary>({
    title: '',
    description: '',
    diaryBody,
    thumbnailBody: '',
    targetDate,
  })

  const registerDiary = async () => {
    const result = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/DiaryInfo`, {
      params: {
        DiaryCount: 1,
        Diaries: diary,
      },
    })
  }

  return <div>WritingDiaryStep2</div>
}

export default WritingDiaryStep2
