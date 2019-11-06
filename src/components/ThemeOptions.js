import React from 'react'

const ThemeOptions = ({ theme, onChange }) => {
  return (
    <select className='form-control' value={theme} onChange={onChange}>
      <option value='vs'>vs</option>
      <option value='vs-dark'>vs-dark</option>
    </select>
  )
}

export default ThemeOptions
