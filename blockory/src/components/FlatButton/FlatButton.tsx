import React from 'react'

type Props = {
  text: string
  onClick: () => void
  className: string | undefined
  // eslint-disable-next-line react/require-default-props
  id?: string
}

const FlatButton: React.FC<Props> = (props) => {
  const { text, onClick, className, id, ...rest } = props

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="button" className={className} onClick={onClick} id={id} {...rest}>
      {text}
    </button>
  )
}

export default FlatButton
