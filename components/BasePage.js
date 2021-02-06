import { Container } from 'reactstrap'

const BasePage = ({title, className, children, ...rest}) => (
  <div className={`base-page ${className}`}>
    <Container>
      {title && (
        <div className="page-header">
          <h1 className="page-header-title">{title}</h1>
        </div>
      )}
      {children}
    </Container>
  </div>
)


BasePage.defaultProp = {
  className: ''
}

export default BasePage
