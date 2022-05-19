import React, { useState, useEffect } from 'react'

import Blockly from 'blockly'
import { Workspace } from 'core/blockly'
import { useNavigate } from 'react-router-dom'

import Editor from 'components/Editor/Editor'

interface IndexableInterface {
  // To avoid error about bracket string
  [key: string]: any
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      xml: any
    }
  }
}

const WritingDiaryStep1: React.FC = () => (
  // const [xml, setXml] = useState('')

  // const navigate = useNavigate()

  // const getQueryStrings = () => {
  //   const dpObj = new DOMParser()
  //   const xmlDoc = dpObj.parseFromString(xml, 'text/xml')
  //   const blocks = Array.from(xmlDoc.getElementsByTagName('block'))
  //   const actions: string[] = []
  //   const elements: string[] = []
  //   let flg = true // elementの時はtrue, actionの時はfalseとする

  //   blocks.forEach((block) => {
  //     const typeName = block.getAttribute('type')
  //     if (typeName) {
  //       // 一文字目が.以外（elementの時）
  //       if (typeName.charAt(0) !== '.') {
  //         // elements配列末尾に追加
  //         elements.push(typeName)
  //         // flgをfalseに
  //         flg = !flg
  //       }
  //       // 一文字目が.（actionの時）
  //       else {
  //         actions.push(typeName.substring(1)) // actions配列末尾に追加
  //         // flg==trueのとき→elementを必要としないactionの時(自動詞)
  //         if (flg) {
  //           // elements配列末尾に空白追加
  //           elements.push('')
  //           // flgをfalseに
  //           flg = !flg
  //         }
  //         // flgをtrueに
  //         flg = !flg
  //       }
  //     }
  //   })
  //   return { elements, actions }
  // }

  // const hideDescButton = () => {
  //   const afterDownloadText = document.getElementById('after_download')
  //   if (afterDownloadText) {
  //     ;(afterDownloadText.style as IndexableInterface)['pointer-events'] = 'none'
  //     afterDownloadText.classList.add('disabled')
  //     afterDownloadText.classList.remove('btn-outline-info')
  //   }
  // }

  // useEffect(() => {
  //   const afterDownloadText = document.getElementById('after_download')
  //   if (afterDownloadText) {
  //     ;(afterDownloadText.style as IndexableInterface)['pointer-events'] = 'none'
  //   }
  // }, [xml])

  <Editor />
)

export default WritingDiaryStep1
