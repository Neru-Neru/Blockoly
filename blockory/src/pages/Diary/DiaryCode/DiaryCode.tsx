import React from 'react'

type Props = {
  diaryBody: string[][]
}

const DiaryBody: React.FC<Props> = (props) => {
  const { diaryBody } = props

  return (
    <>
      {/* TODO : Fix to map function */}
      {diaryBody[0][0].split('\n').map((line) => (
        <p>
          {line}
          <br />
        </p>
      ))}
    </>
  )
}

export default DiaryBody
