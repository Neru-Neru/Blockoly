import React, { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import FlatButton from 'components/FlatButton/FlatButton'
import DescriptionForm from './DescriptionForm/DescriptionForm'

const WritingDiaryStep2: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state as { block: { element: string[]; action: string[] } }
  const { block } = state

  const today = new Date()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [diary, setDiary] = useState<Diary>({
    Title: '',
    Description: '',
    DiaryBody: [block.action, block.element],
    ThumbnailBody: '',
    TargetDate: today,
  })

  const registerDiary = async () => {
    diary.Title = title
    diary.Description = description
    diary.ThumbnailBody = ''

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/DiaryInfo`, {
        params: {
          DiaryCount: 1,
          Diaries: diary,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  console.log(block, diary)

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
              className="btn btn-secondary"
              onClick={() => {
                ;(async () => {
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
