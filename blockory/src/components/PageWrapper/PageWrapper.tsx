import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from 'components/Header/Header'
import styles from './PageWrapper.module.scss'

type Props = {
  children: React.ReactElement
}

const PageWrapper: React.FC<Props> = (props) => {
  const { children } = props
  const location = useLocation()
  const currentPath = location.pathname

  return currentPath === '/' || currentPath === 'signin' || currentPath === 'howto' ? (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  ) : (
    <div className={styles.container}>
      <Header />
      <div className={styles.innerContainer}>{children}</div>
    </div>
  )
}

export default PageWrapper
