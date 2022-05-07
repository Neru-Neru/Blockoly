import Blockly from 'blockly'

Blockly.Blocks['.run'] = {
  init() {
    this.appendDummyInput().appendField('さんぽする')
    this.setInputsInline(false)
    // this.setPreviousStatement(true, null);
    this.setColour(240)
    this.setTooltip('さんぽする')
  },
}

Blockly.JavaScript['.run'] = function (block) {
  const code = 'さんぽする'
  return code
}
Blockly.Blocks['.eat'] = {
  init() {
    this.appendDummyInput().appendField('をたべる')
    this.setInputsInline(false)
    this.setPreviousStatement(true, null)
    this.setColour(240)
    this.setTooltip('をたべる')
  },
}

Blockly.JavaScript['.eat'] = function (block) {
  const code = 'たべる'
  return code
}
Blockly.Blocks['.play'] = {
  init() {
    this.appendDummyInput().appendField('であそぶ')
    this.setInputsInline(false)
    this.setPreviousStatement(true, null)
    this.setColour(240)
    this.setTooltip('であそぶ')
  },
}

Blockly.JavaScript['.play'] = function (block) {
  const code = 'であそぶ'
  return code
}
Blockly.Blocks['.ride'] = {
  init() {
    this.appendDummyInput().appendField('にのる')
    this.setInputsInline(false)
    this.setPreviousStatement(true, null)
    this.setColour(240)
    this.setTooltip('にのる')
  },
}

Blockly.JavaScript['.ride'] = function (block) {
  const code = 'にのる'
  return code
}
Blockly.Blocks['.cook'] = {
  init() {
    this.appendDummyInput().appendField('をりょうりする')
    this.setInputsInline(false)
    this.setPreviousStatement(true, null)
    this.setColour(240)
    this.setTooltip('をりょうりする')
  },
}

Blockly.JavaScript['.cook'] = function (block) {
  const code = 'をりょうりする'
  return code
}
Blockly.Blocks['.getup'] = {
  init() {
    this.appendDummyInput().appendField('おきる')
    this.setInputsInline(false)
    // this.setPreviousStatement(true, null);
    this.setColour(240)
    this.setTooltip('おきる')
  },
}

Blockly.JavaScript['.getup'] = function (block) {
  const code = 'おきる'
  return code
}
Blockly.Blocks['.sleep'] = {
  init() {
    this.appendDummyInput().appendField('ねる')
    this.setInputsInline(false)
    // this.setPreviousStatement(true, null);
    this.setColour(240)
    this.setTooltip('ねる')
  },
}

Blockly.JavaScript['.sleep'] = function (block) {
  const code = 'ねる'
  return code
}
Blockly.Blocks['.buy'] = {
  init() {
    this.appendDummyInput().appendField('をかう')
    this.setInputsInline(false)
    this.setPreviousStatement(true, null)
    this.setColour(240)
    this.setTooltip('をかう')
  },
}

Blockly.JavaScript['.buy'] = function (block) {
  const code = 'をかう'
  return code
}
Blockly.Blocks['.practice'] = {
  init() {
    this.appendDummyInput().appendField('をれんしゅうする')
    this.setInputsInline(false)
    this.setPreviousStatement(true, null)
    this.setColour(240)
    this.setTooltip('をれんしゅうする')
  },
}

Blockly.JavaScript['.practice'] = function (block) {
  const code = 'をれんしゅうする'
  return code
}
Blockly.Blocks['.watch'] = {
  init() {
    this.appendDummyInput().appendField('をみる')
    this.setInputsInline(false)
    this.setPreviousStatement(true, null)
    this.setColour(240)
    this.setTooltip('をみる')
  },
}

Blockly.JavaScript['.watch'] = function (block) {
  const code = 'をみる'
  return code
}
Blockly.Blocks['.draw'] = {
  init() {
    this.appendDummyInput().appendField('をかく')
    this.setInputsInline(false)
    this.setPreviousStatement(true, null)
    this.setColour(240)
    this.setTooltip('をえがく')
  },
}

Blockly.JavaScript['.draw'] = function (block) {
  const code = 'をえがく'
  return code
}
Blockly.Blocks['.make'] = {
  init() {
    this.appendDummyInput().appendField('をつくる')
    this.setInputsInline(false)
    this.setPreviousStatement(true, null)
    this.setColour(240)
    this.setTooltip('をつくる')
  },
}

Blockly.JavaScript['.make'] = function (block) {
  const code = 'をつくる'
  return code
}
Blockly.Blocks['.study'] = {
  init() {
    this.appendDummyInput().appendField('べんきょうをする')
    this.setInputsInline(false)
    // this.setPreviousStatement(true, null);
    this.setColour(240)
    this.setTooltip('べんきょうをする')
  },
}

Blockly.JavaScript['.study'] = function (block) {
  const code = 'べんきょうをする'
  return code
}
