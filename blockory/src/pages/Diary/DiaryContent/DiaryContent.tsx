import React from 'react'

type Props = {
  title: string
  description: string
}

const DiaryContent: React.FC<Props> = (props) => {
  const { title, description } = props

  return (
    <>
      <div className="my-3 p-3 border rounded-pill d-flex align-items-center justify-content-center bg-white">
        <h4 className="text-center">{title}</h4>
      </div>
      <div className="p-3 border h-75 rounded-3 bg-white">
        <p>{description}</p>
      </div>
    </>
  )
}

export default DiaryContent
