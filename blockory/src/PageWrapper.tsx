import React from 'react'

type Props = {
  children: React.ReactElement
}

const PageWrapper: React.FC<Props> = (props) => {
  const { children } = props
  return (
    <div style={{ height: '100%' }}>
      {/* {/* <Nav location={location} />  */}
      {children}
      {/* <Footer></Footer> */}
    </div>
  )
}

export default PageWrapper
