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

type Handler = {
  xmlToList: () => { element: string[]; action: string[] }
}

const WritingDiaryStep1: React.FC = () => {
  const [diaryCode, setDiaryCode] = useState<string>('')
  const [block, setBlock] = useState<{ element: string[]; action: string[] }>({ element: [], action: [] })

  const navigate = useNavigate()
  const ref = React.useRef<Handler>(null)

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
    if (ref.current) {
      const blocks = ref.current?.xmlToList()
      navigate('/writingstep2', { state: { block: blocks } })
    }
  }

  return (
    <div className="container">
      <div className="row h-100">
        <div className="col-md-7 h-100">
          <div className={styles.editorContainer}>
            <div className={styles.editorDescription}>
              <p className={styles.description}>
                ひだりのメニューから、ブロックをえらんで、にっきをつくろう！
                <br />
                アクションブロックをくみあわせてね
              </p>
            </div>
            <Editor ref={ref} setDiaryCode={setDiaryCode} setBlock={setBlock} />
          </div>
        </div>
        <div className="col-md-5 h-100">
          {/* <div className="row border py-3 h-50">
            <Movie
            clickEvent={getQueryStrings}
            handleDisplay={checkDouwnloadLink}
            hideDescBtn={hideDescBtn}
            username={username}
          ></Movie>
          </div> */}
          <div className={styles.movieContainer}>
            <div className={styles.movieDescription}>
              <p className={styles.description}>ブロックをくみたてたら、どうがをみてみよう！</p>
            </div>
            <div style={{ height: '75%', background: '#f3f3f3' }} />
          </div>
          <ToStep2Button onClick={navigateToStep2} />
        </div>
      </div>
    </div>
  )
}

export default WritingDiaryStep1
