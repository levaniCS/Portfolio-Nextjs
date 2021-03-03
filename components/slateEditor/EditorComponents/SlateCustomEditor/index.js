import { Editor, Transforms, Text } from 'slate'

// Define our own custom set of helpers.
export const isFormatActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: n => n[format] === true,
    mode: 'all'
  })


  console.log('isFormatActive', match)

  return !!match
}
export const isCodeBlockActive = (editor) => {
  const [match] = Editor.nodes(editor, {
    match: n => n.type === 'code',
    mode: 'all'
  })

  console.log('isCodeBlockActive', match)

  return !!match
}

export const toggleFormat = (editor, format) => {
  const isActive = isFormatActive(editor, format)

  console.log('toggleFormat', isActive)
  Transforms.setNodes(
    editor,
    { [format]: !!isActive ? null : true },
    { match: n => Text.isText(n), split: true }
  )
}
export const toggleCode = editor => {
  const isActive = isCodeBlockActive(editor)
  console.log('toggleCode', isActive)

  Transforms.setNodes(
    editor,
    { type: isActive ? null : 'code' },
    { match: n => Editor.isBlock(editor, n) }
  )
}