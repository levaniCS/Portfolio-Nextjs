import React from 'react'
import { useSlate } from 'slate-react'
import { isFormatActive, toggleFormat, toggleCode, isCodeBlockActive } from '../SlateCustomEditor'

import Button from '../SlateButton'
import Icon from '../SlateIcon'

const FormatButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      reversed
      active={format === 'code' ? isCodeBlockActive(editor) : isFormatActive(editor, format)}
      onClick={event => {
        event.preventDefault()
        if(format === 'code') {
          toggleCode(editor, format)
          return
        }
        toggleFormat(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

export default FormatButton