import React, { useState, Dispatch, SetStateAction } from 'react'

import Blockly from 'blockly'
import { BlocklyWorkspace } from 'react-blockly'
import { Workspace } from 'core/blockly'

import { Categories } from 'blocks/block_xml'
import styles from './Editor.module.scss'
import 'blocks/act_blocks'
import 'blocks/ele_blocks'

type Category = {
  kind: string
  contents: {
    kind: string
    name: string
    expanded?: boolean
    colour: number
    contents: {
      kind: string
      type: string
    }[]
  }[]
}

type Props = {
  setDiaryCode: Dispatch<SetStateAction<string>>
  setBlock: Dispatch<
    SetStateAction<{
      element: string[]
      action: string[]
    }>
  >
}

const Editor: React.FC<Props> = (props) => {
  const [xml, setXml] = useState('')
  //  --- Construction of xml ---
  //  <xml xmlns="https://developers.google.com/blockly/xml">
  //   <block type="orange">
  //     <next>
  //       <block type=".buy"></block>
  //     </next>
  //   </block>
  //   <block type=".getup"></block>
  //   <block type="cat">
  //     <next>
  //       <block type=".practice"></block>
  //     </next>
  //   </block>
  // </xml>

  const { setDiaryCode, setBlock } = props

  const categories = Categories as Category

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>'

  const changeWorkspace = (workspace: Workspace | undefined) => {
    const code = Blockly.JavaScript.workspaceToCode(workspace) as string
    setDiaryCode(code)
  }

  const xmlToList = () => {
    const actions: string[] = []
    const elements: string[] = []

    const dpObj = new DOMParser()
    const xmlDoc = dpObj.parseFromString(xml, 'text/xml')
    const blockTags = xmlDoc.querySelectorAll('xml > block')

    blockTags.forEach((block) => {
      const element = block.getAttribute('type')
      if (element) elements.push(element)
      if (block.hasChildNodes()) {
        const action = block.querySelector('block')?.getAttribute('type')
        if (action) actions.push(action)
      } else {
        actions.push('')
      }
    })
    setBlock({ element: elements, action: actions })
  }

  return (
    <BlocklyWorkspace
      toolboxConfiguration={categories}
      className="h-75"
      onWorkspaceChange={changeWorkspace}
      onXmlChange={setXml}
    />
  )
}

export default Editor
