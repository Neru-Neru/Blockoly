import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PageWrapper from 'components/PageWrapper/PageWrapper'
import Diary from 'pages/Diary/Diary'
import SignIn from 'pages/SignIn/SignIn'
import Register from 'pages/Register/Register'
import { AuthContextProvider } from 'Authentication/AuthContext/AuthContext'
import Top from './pages/Top/Top'
import MyDiaryList from './pages/MyDiaryList/MyDiaryList'
import OtherDiaryList from './pages/OtherDiaryList/OtherDiaryList'
import WritingDiaryStep1 from './pages/WritingDiaryStep1/WritingDiaryStep1'
import WritingDiaryStep2 from './pages/WritingDiaryStep2/WritingDiaryStep2'

import reportWebVitals from './reportWebVitals'
import './index.scss'

const app = document.getElementById('root')
ReactDOM.render(
  <Router>
    <AuthContextProvider>
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mydiarylist" element={<MyDiaryList />} />
          <Route path="/otherdiarylist" element={<OtherDiaryList />} />
          <Route path="/writingstep1" element={<WritingDiaryStep1 />} />
          <Route path="/writingstep2" element={<WritingDiaryStep2 />} />
          <Route path="/diary-content" element={<Diary />} />
        </Routes>
      </PageWrapper>
    </AuthContextProvider>
  </Router>,
  app
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
