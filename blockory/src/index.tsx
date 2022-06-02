import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PageWrapper from 'PageWrapper'
import Diary from 'pages/Diary/Diary'
import reportWebVitals from './reportWebVitals'

import Top from './pages/Top/Top'
import MyDiaryList from './pages/MyDiaryList/MyDiaryList'
import OtherDiaryList from './pages/OtherDiaryList/OtherDiaryList'
import WritingDiaryStep1 from './pages/WritingDiaryStep1/WritingDiaryStep1'
import WritingDiaryStep2 from './pages/WritingDiaryStep2/WritingDiaryStep2'

import './index.scss'

const app = document.getElementById('root')
ReactDOM.render(
  <Router>
    <PageWrapper>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/mydiarylist" element={<MyDiaryList />} />
        <Route path="/otherdiarylist" element={<OtherDiaryList />} />
        <Route path="/writingstep1" element={<WritingDiaryStep1 />} />
        <Route path="/writingstep2" element={<WritingDiaryStep2 />} />
        <Route path="/diary-content" element={<Diary />} />
      </Routes>
    </PageWrapper>
  </Router>,
  app
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
