import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import FlatButton from 'components/FlatButton/FlatButton'
import DescriptionForm from './DescriptionForm/DescriptionForm'
import styles from './WritingDiaryStep2.module.scss'

const WritingDiaryStep2: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const today = new Date()

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [blob, setBlob] = useState<string>()

  useEffect(() => {
    const state = location.state as { video: string }
    // document.getElementById('video')?.setAttribute('src', state.video)
    setBlob(state.video)
    const reselectButton = document.getElementById('reselect-button')
    reselectButton?.setAttribute('disabled', '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getDiaryBody = () => {
    const state = location.state as { block: { element: string[]; action: string[] } }
    return [state.block.action, state.block.element]
  }

  const registerDiary = async () => {
    const thumbnailSrc = document.getElementById('image')?.getAttribute('href')?.split(',')[1]

    const diary = [
      {
        Title: title,
        Description: description,
        DiaryBody: getDiaryBody(),
        ThumbnailBody: thumbnailSrc,
        TargetDate: today,
      },
    ]

    console.log(diary)

    try {
      await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/DiaryInfo`, {
        DiaryCount: 1,
        Diaries: diary,
      })
      navigate('./')
    } catch (error) {
      console.log(error)
    }
  }

  // Draw target image and return source of canvas
  const toDataURL = (): string => {
    const canvas = document.createElement('canvas')
    canvas.width = 640
    canvas.height = 320
    const video = document.getElementById('video') as CanvasImageSource
    if (video) canvas.getContext('2d')?.drawImage(video, 0, 0, 640, 360)
    return canvas.toDataURL()
  }

  const onPauseVideo = () => {
    const video = document.getElementById('video')
    video?.setAttribute('style', 'display: none;')
    const svg = document.getElementById('svg')
    svg?.setAttribute('style', 'display: block;')
    const reselectButton = document.getElementById('reselect-button')
    reselectButton?.removeAttribute('disabled')
    const image = document.getElementById('image')
    if (image) image.setAttribute('href', toDataURL())
  }

  const onSeekedVideo = () => {
    const video = document.getElementById('video')
    video?.setAttribute('style', 'display: block;')
    const svg = document.getElementById('svg')
    svg?.setAttribute('style', 'display: none;')
    const reselectButton = document.getElementById('reselect-button')
    reselectButton?.setAttribute('disabled', '')
    const image = document.getElementById('image')
    if (image) image.setAttribute('href', toDataURL())
  }

  return (
    <div className="container">
      <div className="row h-100">
        <div className={styles.wrapper}>
          <h4 className="pt-3">しょうさいをきめる</h4>
          <div className="h-25 w-100">
            <DescriptionForm
              title={title}
              description={description}
              changeTitle={setTitle}
              changeDescription={setDescription}
            />
          </div>
          <div className="h-50 w-100">
            ひょうし
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              id="video"
              width="640"
              height="360"
              src={blob}
              onPause={onPauseVideo}
              onSeeked={onSeekedVideo}
              controls
            />
            <svg
              id="svg"
              width="640"
              height="360"
              viewBox="0 0 640 360"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: 'none' }}
            >
              <image id="image" width="640" height="360" href="" />
              <g id="g" />
            </svg>
          </div>
          <div className="d-grid gap-2 col-4 mx-auto w-100">
            <FlatButton text="えらびなおす" id="reselect-button" className={styles.button} onClick={onSeekedVideo} />
            <FlatButton
              text="ていしゅつする"
              className={styles.button}
              onClick={() => {
                void (async () => {
                  await registerDiary()
                })()
                navigate('./')
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WritingDiaryStep2
