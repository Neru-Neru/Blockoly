import React from 'react'

import FlatButton from 'components/FlatButton/FlatButton'

type Props = {
  onClick: () => void
}

const ToStep2Button: React.FC<Props> = (props) => {
  const { onClick } = props

  return (
    <div className="row border py-3 mt-1 text-center h-25">
      <div className="h-50">
        <p>
          このどうがでいいなら、つぎにしょうさいをきめてね。
          <br />
          へんこうするなら、ブロックをうごかしてね。
        </p>
      </div>
      <div className="d-grid gap-2 col-8 mx-auto">
        <FlatButton text="しょうさいをきめる" className="disabled" onClick={onClick} />
      </div>
    </div>
  )
}

export default ToStep2Button
