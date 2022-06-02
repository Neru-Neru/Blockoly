import React from 'react'
import { useLocation } from 'react-router-dom'

import DiaryCode from './DiaryCode/DiaryCode'
import DiaryContent from './DiaryContent/DiaryContent'

const Diary: React.FC = () => {
  const location = useLocation()

  const state = location.state as { diary: DiaryInfo }
  const { diary } = state

  console.log('Diary', diary)

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <DiaryContent title={diary.Title} description={diary.Description} /> <DiaryCode diaryBody={diary.DiaryBody} />
        </div>
        <div className="col-6">
          <img src={`data:image/png;${diary.ThumbnailBody}`} alt={diary.Title} />
        </div>
        <div>
          {/* <button onClick={() => props.history.goBack()} className="btn btn-outline-secondary">
            もどる
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default Diary
