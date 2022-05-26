import React from 'react'

type Props = {
  diaryBody: string
}

const DiaryBody: React.FC<Props> = (props) => {
  const { diaryBody } = props

  return (
    <>
      {diaryBody.split('\n').map((line) => (
        <p>
          {line}
          <br />
        </p>
      ))}
    </>
  )
}

export default DiaryBody
