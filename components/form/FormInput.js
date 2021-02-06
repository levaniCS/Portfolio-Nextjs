import { FormGroup, Label, Input } from 'reactstrap';

const FormInput = ({
  type,
  label,
  field, // { name, value, onChange, onBlur }
  form: { touched, errors },
  ...props
}) => (
  <FormGroup>
    <Label>{label}</Label>
    <Input type={type} {...field} {...props} />
    {touched[field.name] &&
      errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </FormGroup>
)

export default FormInput