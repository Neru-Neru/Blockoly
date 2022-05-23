import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import Editor from 'pages/WritingDiaryStep1/Editor/Editor'
import styles from './WritingDiaryStep1.module.scss'
import Note from './Note/Note'

interface IndexableInterface {
  // To avoid error about bracket string
  [key: string]: any
}

const WritingDiaryStep1: React.FC = () => {
  const [diaryCode, setDiaryCode] = useState<string>('')
  const [block, setBlock] = useState<{ element: string[]; action: string[] }>({ element: [], action: [] })

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

  return (
    <div className="container">
      <div className="row h-100">
        <div className="col-md-7 h-100">
          <Editor setDiaryCode={setDiaryCode} setBlock={setBlock} />
          <div className="h-25 pt-3">
            <Note diaryCode={diaryCode} />
          </div>
        </div>
        <div className="col-md-5 h-100" />
      </div>
    </div>
  )
}

export default WritingDiaryStep1
