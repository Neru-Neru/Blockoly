import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Editor from 'pages/WritingDiaryStep1/Editor/Editor'
import { main } from 'pixi/pixi'
import { AuthInfoContext } from 'Authentication/AuthContext/AuthContext'
import FlatButton from 'components/FlatButton/FlatButton'
import styles from './WritingDiaryStep1.module.scss'
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
  // const [block, setBlock] = useState<{ element: string[]; action: string[] }>({ element: [], action: [] })
  const [authInfo, setAuthInfo] = useContext(AuthInfoContext)
  const [blob, setBlob] = useState<Blob>()

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
      navigate('/writingstep2', { state: { block: blocks, video: blob, diaryCode } })
    }
  }

  const formatDate = (dt: Date) => {
    const y = dt.getFullYear()
    const m = `00${dt.getMonth() + 1}`.slice(-2)
    const d = `00${dt.getDate()}`.slice(-2)
    return `${y}-${m}-${d}`
  }

  const clickMovieButton = async () => {
    if (ref.current) {
      const blocks = ref.current?.xmlToList()
      await main(blocks.action, blocks.element, authInfo.UserName, formatDate(new Date()), setBlob)
    }
  }

  return (
    <div className="container">
      <div className="row h-100">
        <div className="col-md-7 h-100">
          <div className={styles.editorContainer}>
            <div className={styles.editorDescription}>
              <p className={styles.description}>
                ひだりのメニューから、ブロックをえらんで、にっきを作ろう！
                <br />
                アクションブロックを組み合わせてね
              </p>
            </div>
            <Editor ref={ref} setDiaryCode={setDiaryCode} />
          </div>
        </div>
        <div className="col-md-5 h-100">
          {/* <div className="row border py-3 h-50">
            <Movie
            clickEvent={getQueryStrings}
            handleDisplay={checkDownloadLink}
            hideDescBtn={hideDescBtn}
            username={username}
          ></Movie>
          </div> */}

          <div className={styles.movieContainer}>
            <div className={styles.movieDescription}>
              <p className={styles.description}>
                ブロックを組み立てたら、
                <br className={styles.brTb} />
                どうがを見てみよう！
              </p>
            </div>
            <div style={{ height: '75%', background: '#f3f3f3' }}>
              <div className={styles.stage} id="stage" />
              <div className={styles.buttonWrapper}>
                {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                <FlatButton text="どうがを見る" className={styles.button} onClick={clickMovieButton} />
              </div>
            </div>
          </div>
          <ToStep2Button onClick={navigateToStep2} />
        </div>
      </div>
      <p>
        <a href="." id="download-link" style={{ display: 'none' }}>
          ダウンロード
        </a>
      </p>
    </div>
  )
}

export default WritingDiaryStep1
