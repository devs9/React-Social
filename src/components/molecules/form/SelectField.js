import React from 'react'
import Select from 'react-select'
import Div from '../../atom/Div'
import Label from '../../atom/form/Label'

const options = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
]
const customStyles = {
  control: () => ({
    display: 'flex',
    color: 'black',
    width: 100,
    paddingBottom: 28,
    paddingTop: 4,
    borderBottom: '2px solid #312457',
  }),
}
export default ({ value, name, title, onFocus, onChange }) => (
  <Div width="75%">
    <Label labelText />
    <Select
      styles={customStyles}
      options={options}
      onChange={onChange}
      defaultValue={{ value: false, label: 'Gender' }}
    />
  </Div>
)
