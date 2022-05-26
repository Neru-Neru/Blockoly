import { DialogContent } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import DiaryCode from './DiaryCode/DiaryCode'
import DiaryContent from './DiaryContent/DiaryContent'

const Diary: React.FC = () => {
  const location = useLocation()

  const state = location.state as { item: DiaryInfo }
  const diary = state.item

  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          <Tabs>
            <TabList>
              <Tab>どうが</Tab>
              <Tab>にっき</Tab>
            </TabList>
            <TabPanel style={{ width: '640px', height: '360px' }}>
              {/* TODO: Change to movie format */}
              <img src={`data:image/png;${diary.thumbnailBody}`} alt={diary.title} />
            </TabPanel>
            <TabPanel style={{ width: '640px', height: '360px' }}>
              <DiaryCode diaryBody={diary.diaryBody} />
            </TabPanel>
          </Tabs>
        </div>
        <div className="col-5">
          <DiaryContent title={diary.title} description={diary.description} />
        </div>
        <div>
          {/* <button onClick={() => props.history.goBack()} className="btn btn-outline-secondary">
            もどる
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default Diary
