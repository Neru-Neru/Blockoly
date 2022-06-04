import React from 'react'

type Props = {
  title: string
  description: string
  changeTitle: (title: string) => void
  changeDescription: (description: string) => void
}

const DescriptionForm: React.FC<Props> = (props) => {
  const { title, description, changeTitle, changeDescription } = props

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeTitle(event.target.value)
  }

  const onChangeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    changeDescription(event.target.value)
  }

  return (
    <>
      <label className="control-label w-100" htmlFor="title">
        タイトル
        <input
          className="form-control"
          id="title"
          type="text"
          value={title}
          onChange={onChangeTitle}
          autoComplete="off"
          required
        />
      </label>
      <label className="control-label w-100" htmlFor="desc">
        せつめい
        <textarea
          className="form-control"
          id="desc"
          value={description}
          onChange={onChangeDescription}
          autoComplete="off"
          required
          rows={5}
          style={{ resize: 'none' }}
        />
      </label>
    </>
  )
}

export default DescriptionForm
