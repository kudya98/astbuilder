import React from 'react'

const LangOptions = ({ disabled, lang, onChange }) => {
  return (
    <select
      className='form-control' value={lang} onChange={onChange} disabled={disabled}
    >
      <option value='javascript'>javascript</option>
      {/* <option value='php'>php</option>
          <option value='java'>java</option> */}
    </select>
  )
}

export default LangOptions
