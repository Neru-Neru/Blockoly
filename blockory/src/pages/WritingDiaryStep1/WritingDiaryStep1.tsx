import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import Editor from 'pages/WritingDiaryStep1/Editor/Editor'
import FlatButton from 'components/FlatButton/FlatButton'
import Note from './Note/Note'

import styles from './WritingDiaryStep1.module.scss'
import Procedure from './Procedure/Procedure'
import ToStep2Button from './ToStep2Button/ToStep2Button'

interface IndexableInterface {
  // To avoid error about bracket string
  [key: string]: any
}

const WritingDiaryStep1: React.FC = () => {
  const [diaryCode, setDiaryCode] = useState<string>('')
  const [block, setBlock] = useState<{ element: string[]; action: string[] }>({ element: [], action: [] })

  const navigate = useNavigate()

  // const hideDescButton = () => {
  //   const afterDownloadText = document.getElementById('after_download')
  //   if (afterDownloadText) {
  //     ;(afterDownloadText.style as IndexableInterface)['pointer-events'] = 'none'
  //     afterDownloadText.classList.add('disabled')
  //     afterDownloadText.classList.remove('btn-outline-info')
  //   }
  // }

  // useEffect(() => {
  //   const afterDownloadText = document.getElementById('after_download')
  //   if (afterDownloadText) {
  //     ;(afterDownloadText.style as IndexableInterface)['pointer-events'] = 'none'
  //   }
  // }, [xml])

  const navigateToStep2 = () => {
    navigate('/writingstep2', { state: { block } })
  }

  return (
    <div className="container">
      <div className="row h-100">
        <div className="col-md-7 h-100">
          <Editor setDiaryCode={setDiaryCode} setBlock={setBlock} />
          <div className="h-25 pt-3">
            <Note diaryCode={diaryCode} />
          </div>
        </div>
        <div className="col-md-5 h-100">
          <Procedure />
          <div className="row border py-3 h-50">
            {/* <Movie
            clickEvent={getQueryStrings}
            handleDisplay={checkDouwnloadLink}
            hideDescBtn={hideDescBtn}
            username={username}
          ></Movie> */}
          </div>
          <ToStep2Button onClick={navigateToStep2} />
        </div>
      </div>
    </div>
  )
}

export default WritingDiaryStep1
