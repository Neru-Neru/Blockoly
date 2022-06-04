import FlatButton from 'components/FlatButton/FlatButton'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import DiaryCode from './DiaryCode/DiaryCode'
import DiaryContent from './DiaryContent/DiaryContent'

const Diary: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const state = location.state as { diary: DiaryInfo }
  const { diary } = state

  console.log('Diary', diary)

  const backPage = () => {
    navigate(-1)
  }

  return (
    <div className="container">
      <div className="row h-75">
        <div className="col-6">
          <DiaryContent title={diary.Title} description={diary.Description} /> <DiaryCode diaryBody={diary.DiaryBody} />
        </div>
        <div className="col-6">
          <img src={`data:image/png;${diary.ThumbnailBody}`} alt={diary.Title} />
        </div>
      </div>
      <div>
        <FlatButton text="もどる" onClick={backPage} className="btn btn-outline-secondary" />
      </div>
    </div>
  )
}

export default Diary
