import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import FlatButton from 'components/FlatButton/FlatButton'
import DescriptionForm from './DescriptionForm/DescriptionForm'
import styles from './WritingDiaryStep2.module.scss'

const WritingDiaryStep2: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const today = new Date()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const getDiaryBody = () => {
    const state = location.state as { block: { element: string[]; action: string[] } }
    return [state.block.action, state.block.element]
  }

  const registerDiary = async () => {
    const diary = {
      Title: title,
      Description: description,
      DiaryBody: getDiaryBody(),
      ThumbnailBody: '',
      TargetDate: today,
    }

    try {
      await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/DiaryInfo`, {
        DiaryCount: 1,
        Diaries: diary,
      })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container">
      <div className="row h-100">
        <div className="col-6 mx-auto">
          <h4 className="pt-3">しょうさいをきめる</h4>
          <DescriptionForm
            title={title}
            description={description}
            changeTitle={setTitle}
            changeDescription={setDescription}
          />
          <div className="my-3 h-50 w-100">
            {/* <iframe src="http://127.0.0.1:5500/make_thumbnail.html" scrolling="no" width="100%" height="100%"></iframe> */}
          </div>
          <div className="d-grid gap-2 col-4 mx-auto w-100">
            <FlatButton
              text="にっきをかく"
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
