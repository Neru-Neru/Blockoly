import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import styles from './HeaderButton.module.scss'

type Props = {
  pathname: string
  imageSrc: string
  imageAlt: string
  buttonText: string
  // eslint-disable-next-line react/require-default-props
  className?: string
}

const HeaderButton: React.FC<Props> = ({ pathname, imageSrc, imageAlt, buttonText, className }) => {
  const location = useLocation()
  const currentPath = location.pathname

  return currentPath === '/' ? (
    <Link to={pathname}>
      <div className={className}>
        <div className={styles.hover}>
          <img src={imageSrc} alt={imageAlt} style={{ height: '100%' }} />
          {/* eslint-disable-next-line react/no-danger */}
          <p className={styles.largeText} dangerouslySetInnerHTML={{ __html: buttonText }} />
        </div>
      </div>
    </Link>
  ) : (
    <Link to={pathname}>
      <div className={className}>
        <div className={styles.hover}>
          <img src={imageSrc} alt={imageAlt} style={{ height: '100%' }} />
          {/* eslint-disable-next-line react/no-danger */}
          <p className={styles.smallText} dangerouslySetInnerHTML={{ __html: buttonText }} />
        </div>
      </div>
    </Link>
  )
}

export default HeaderButton
