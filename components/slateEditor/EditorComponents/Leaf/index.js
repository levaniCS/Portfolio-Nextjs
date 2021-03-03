
const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if(leaf.code) {
    children = <pre><code>{children}</code></pre>  
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underlined) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

export default Leaf