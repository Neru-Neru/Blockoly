import React from 'react'

type Props = {
  text: string
  onClick: () => void
  className: string | undefined
}

const FlatButton: React.FC<Props> = (props) => {
  const { text, onClick, className } = props

  return (
    <button type="button" className={className} onClick={onClick}>
      {text}
    </button>
  )
}

export default FlatButton
