import React from 'react'

const keyMap = {
  retainLines: 'Save codelines'
}

const ParserOptions = ({ options, disabled, onChange }) => {
  return (
    <div className='dropdown'>
      <input type='text' className='form-control' placeholder='Options' readOnly />
      {
        Object.keys(options).length > 0 &&
          <div className='dropdown-content'>
            {
              Object.keys(options).map(key => (
                <div key={key} className='custom-control custom-switch'>
                  <input
                    type='checkbox' className='custom-control-input' id='customSwitch1' value={key}
                    checked={options[key]}
                    disabled={disabled}
                    onChange={onChange}
                  />
                  <label className='custom-control-label' htmlFor='customSwitch1'>{keyMap[key]}</label>
                </div>
              ))
            }
          </div>
      }
    </div>
  )
}

export default ParserOptions
