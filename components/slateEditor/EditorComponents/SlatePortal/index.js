import ReactDOM from 'react-dom'

const Portal = ({ children }) => {
  if(process.browser) {
    return ReactDOM.createPortal(children, document.body)
  } else {
    return null
  }
}

export default Portal