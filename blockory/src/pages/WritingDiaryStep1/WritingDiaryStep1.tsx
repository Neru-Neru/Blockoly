import React, { useState, useEffect } from 'react'
import Blockly from 'blockly'
import { Workspace } from 'core/blockly'
import { useNavigate } from 'react-router-dom'

import { Categories } from '../../blocks/block_xml'

type DiaryCode = {
  code: string
}

interface IndexableInterface {
  // to avoid error about bracket string
  [key: string]: any
}

const INITIALXML =
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>'

const WritingDiaryStep1: React.FC = () => {
  const [xml, setXml] = useState('')
  const [username, setUsername] = useState('')
  const [javascriptCode, setJavascriptCode] = useState('')

  const navigate = useNavigate()

  const workspaceDidChange = (workspace: Workspace | undefined) => {
    const diaryCode = Blockly.JavaScript.workspaceToCode(workspace) as DiaryCode
    setJavascriptCode(diaryCode.code)
  }

  const getQueryStrings = () => {
    // generate query from blocks
    const dpObj = new DOMParser()
    const xmlDoc = dpObj.parseFromString(xml, 'text/xml')
    const blocks = Array.from(xmlDoc.getElementsByTagName('block'))
    const actions: string[] = []
    const elements: string[] = []
    let flg = true // elementの時はtrue, actionの時はfalseとする

    blocks.forEach((block) => {
      const typeName = block.getAttribute('type')
      if (typeName) {
        // 一文字目が.以外（elementの時）
        if (typeName.charAt(0) !== '.') {
          // elements配列末尾に追加
          elements.push(typeName)
          // flgをfalseに
          flg = !flg
        }
        // 一文字目が.（actionの時）
        else {
          actions.push(typeName.substring(1)) // actions配列末尾に追加
          // flg==trueのとき→elementを必要としないactionの時(自動詞)
          if (flg) {
            // elements配列末尾に空白追加
            elements.push('')
            // flgをfalseに
            flg = !flg
          }
          // flgをtrueに
          flg = !flg
        }
      }
    })
    return { elements, actions }
  }

  const setPixi = () => {
    // pixi request
    const { elements, actions } = getQueryStrings()
    let url = 'https://terminal-8c860.web.app/pixi?'

    url += `username=${username}&`

    const today = new Date()
    const year = today.getFullYear()
    const month = `00${today.getMonth() + 1}`.slice(-2)
    const date = `00${today.getDate()}`.slice(-2)
    url += `date=${year}-${month}-${date}&`

    let query = ''
    actions.forEach((action, index) => {
      query += `action[${index}]=${action}&`
    })
    elements.forEach((element, index) => {
      query += `element[${index}]=${element}`
      if (index < elements.length - 1) query += '&'
    })
    url += query
    console.log(url)
  }

  const moveForm = () => {
    // move to description form
    setPixi()
    const { elements, actions } = getQueryStrings()
    navigate('/deskform', { state: { username, elements, actions } })
  }

  const checkDouwnloadLink = () => {
    const dpObj = new DOMParser()
    const xmlDoc = dpObj.parseFromString(xml, 'text/xml')
    const blocks = xmlDoc.getElementsByTagName('block')
    const iframe = document.getElementById('iframe')
    // search Download link
    let time = 0
    const intervalId = setInterval(() => {
      time += 1
      if (time > 4 * blocks.length) {
        clearInterval(intervalId) // intervalIdをclearIntervalで指定している
        const afterDownloadText = document.getElementById('after_download')
        if (afterDownloadText) {
          ;(afterDownloadText.style as IndexableInterface)['pointer-events'] = 'auto'
          afterDownloadText.classList.remove('disabled')
          afterDownloadText.classList.add('btn-outline-info')
        }
      }
    }, 1000)
  }

  const hideDescBtn = () => {
    const afterDownloadText = document.getElementById('after_download')
    if (afterDownloadText) {
      ;(afterDownloadText.style as IndexableInterface)['pointer-events'] = 'none'
      afterDownloadText.classList.add('disabled')
      afterDownloadText.classList.remove('btn-outline-info')
    }
  }

  useEffect(() => {
    const afterDownloadText = document.getElementById('after_download')
    if (afterDownloadText) {
      ;(afterDownloadText.style as IndexableInterface)['pointer-events'] = 'none'
    }
  }, [xml])

  // useEffect(() => {
  //   const name = db
  //     .collection('users')
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         const userdata = doc.data()
  //         if (userdata.mail === user.email) {
  //           setUsername(userdata.username)
  //         }
  //       })
  //     })
  // }, [])
  return <div />
}

export default WritingDiaryStep1
