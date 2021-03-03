import React, { useState, useMemo, useCallback } from 'react'
import { Slate, Editable, withReact } from 'slate-react'
import { createEditor } from 'slate'
import { withHistory } from 'slate-history'

import initialValue from './EditorComponents/initialValue'
import  { toggleFormat, toggleCode } from './EditorComponents/SlateCustomEditor'
import Leaf from './EditorComponents/Leaf'

import HoveringNavbar from './EditorComponents/HoveringNavbar'


const BlogEditor = () => {
  const editor = useMemo(() => withHistory(withReact(createEditor()), []))
  // Add the initial value when setting up our state.
  const [value, setValue] = useState(initialValue)

  const handleKeyDown = event => {
    if (!event.ctrlKey) {
      return
    }
    event.preventDefault()
    switch (event.key) {
      case '`': {
        toggleCode(editor, 'code')
        break
      }
      case 'i': {
        toggleFormat(editor, 'italic')
        break
      }
      case 'b': {
        toggleFormat(editor, 'bold')
        break
      }
      case 'u': {
        toggleFormat(editor, 'underline')
        break
      }
    }
  }

  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />
  }, [])


  return (
    <Slate
      editor={editor}
      value={value}
      onChange={newValue => setValue(newValue)}
    >
    <HoveringNavbar />
    <Editable
      placeholder="Enter some text..."
      editor={editor}
      onKeyDown={handleKeyDown}
      renderLeaf={renderLeaf}
    />
    </Slate>
  )
}

export default BlogEditor