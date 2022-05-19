import React, { useState } from 'react'

import Blockly from 'blockly'
import { BlocklyWorkspace } from 'react-blockly'
import { Workspace } from 'core/blockly'

import { Categories } from 'blocks/block_xml'

type DiaryCode = {
  content: string
}

const Editor = () => {
  const [xml, setXml] = useState('')
  const [diaryCode, setDiaryCode] = useState('')
  // const categories = Categories
  // const initialXml =
  //   '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>'
  const changeWorkspace = (workspace: Workspace | undefined) => {
    const code = Blockly.JavaScript.workspaceToCode(workspace) as DiaryCode
    setDiaryCode(code.content)
  }
  // return (
  //   <div>
  //     <p>aaa</p>
  //     <BlocklyWorkspace
  //       toolboxConfiguration={categories}
  //       className="h-75"
  //       onWorkspaceChange={changeWorkspace}
  //       onXmlChange={setXml}
  //     />
  //   </div>
  // )
  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>'
  const toolboxCategories = {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Logic',
        colour: '#5C81A6',
        contents: [
          {
            kind: 'block',
            type: 'controls_if',
          },
          {
            kind: 'block',
            type: 'logic_compare',
          },
        ],
      },
      {
        kind: 'category',
        name: 'Math',
        colour: '#5CA65C',
        contents: [
          {
            kind: 'block',
            type: 'math_round',
          },
          {
            kind: 'block',
            type: 'math_number',
          },
        ],
      },
      {
        kind: 'category',
        name: 'Custom',
        colour: '#5CA699',
        contents: [
          {
            kind: 'block',
            type: 'new_boundary_function',
          },
          {
            kind: 'block',
            type: 'return',
          },
        ],
      },
    ],
  }

  return (
    <>
      <BlocklyWorkspace
        toolboxConfiguration={toolboxCategories}
        initialXml={initialXml}
        className="h-75"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: true,
          },
        }}
        onWorkspaceChange={changeWorkspace}
        onXmlChange={setXml}
      />
      <pre id="generated-xml">{xml}</pre>
    </>
  )
}

export default Editor
