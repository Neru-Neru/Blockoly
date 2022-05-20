import React from 'react'

import styles from './Note.module.scss'

type Props = {
  diaryCode: string
}

const Note: React.FC<Props> = (props) => {
  const { diaryCode } = props

  return (
    <textarea
      id="code"
      className={styles.note}
      value={diaryCode === '' ? 'ここににっきがひょうじされるよ' : diaryCode}
      readOnly
    />
  )
}

export default Note
