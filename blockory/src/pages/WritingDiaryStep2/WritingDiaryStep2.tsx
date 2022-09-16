import React, { useEffect, useState, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import FlatButton from 'components/FlatButton/FlatButton'
import { AuthInfoContext } from 'Authentication/AuthContext/AuthContext'
import DescriptionForm from './DescriptionForm/DescriptionForm'
import styles from './WritingDiaryStep2.module.scss'

const WritingDiaryStep2: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [authInfo, setAuthInfo] = useContext(AuthInfoContext)

  const today = new Date()

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [blob, setBlob] = useState<Blob>(new Blob())

  useEffect(() => {
    const state = location.state as { video: Blob }
    // document.getElementById('video')?.setAttribute('src', state.video)
    setBlob(state.video)
    const reselectButton = document.getElementById('reselect-button')
    reselectButton?.setAttribute('disabled', '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getDiaryText = () => {
    // const state = location.state as { block: { element: string[]; action: string[] } }
    // return [state.block.action, state.block.element]
    const state = location.state as { diaryCode: string }
    return state.diaryCode
  }

  const formatDate = (dt: Date) => {
    const y = dt.getFullYear()
    const m = `00${dt.getMonth() + 1}`.slice(-2)
    const d = `00${dt.getDate()}`.slice(-2)
    return `${y}-${m}-${d}`
  }

  const toBlob = (base64: string): Blob => {
    const bin = atob(base64.replace(/^.*,/, ''))
    const buffer = new Uint8Array(bin.length)
    for (let i = 0; i < bin.length; i += 1) {
      buffer[i] = bin.charCodeAt(i)
    }
    // Blobを作成
    const blobFile = new Blob([buffer.buffer], {
      type: 'image/png',
    })
    return blobFile
  }

  // ** Not to run this API **
  //
  // const getUserInfo = async () => {
  //   try {
  //     const userInfo = await axios
  //       .get(`${process.env.REACT_APP_API_ENDPOINT}/UserInfo`)
  //       .then((response) => response.data())
  //       .then((data) => {
  //         console.log(data)
  //       })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // Save Movie
  const registerMovie = async (): Promise<string | boolean> => {
    const fd = new FormData()
    console.log(blob.text())
    fd.append('UserId', authInfo.UserName)
    fd.append('UserName', authInfo.UserName)
    fd.append('TargetDate', formatDate(today))
    fd.append('blob', blob)

    try {
      return await axios
        .post(
          `${process.env.REACT_APP_API_ENDPOINT}/SaveDiaryMovie`,
          // {
          //   UserId: authInfo.UserName, // TODO: Fix UserInfo API
          //   UserName: authInfo.UserName,
          //   TargetDate: formatDate(today),
          //   DiaryMovie: fd,
          // },
          fd,
          { headers: { 'content-type': 'multipart/form-data' } }
        )
        .then((res) => res.data())
        .then((data) => data.DiaryId)
    } catch (error) {
      console.log(error)
      return false
    }
  }

  // Save Diary
  const registerDiary = async () => {
    const DiaryId: string | boolean = await registerMovie()
    if (DiaryId === false) return

    const thumbnailSrc = document.getElementById('image')?.getAttribute('href')?.split(',')[1]
    let Thumbnail = new Blob()
    if (thumbnailSrc) Thumbnail = toBlob(thumbnailSrc)

    try {
      await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/SaveDiaryInfo`, {
        DiaryId,
        Title: title,
        Description: description,
        DiaryText: getDiaryText(),
        Thumbnail,
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
          <div className="w-100">
            <DescriptionForm
              title={title}
              description={description}
              changeTitle={setTitle}
              changeDescription={setDescription}
            />
          </div>
          <div className="w-100">
            ひょうし
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              id="video"
              width="640"
              height="360"
              src={window.URL.createObjectURL(blob)}
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
            <FlatButton
              text="ひょうしをえらびなおす"
              id="reselect-button"
              className={styles.button}
              onClick={onSeekedVideo}
            />
            <FlatButton
              text="にっきをていしゅつする"
              className={`${styles.button} ${styles.submit}`}
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
