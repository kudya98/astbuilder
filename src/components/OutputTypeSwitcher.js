import React from 'react'

const allowedTypes = ['xml', 'json', 'javascript']

const OutputTypeSwitcher = ({ output, outputType, updateOutputType }) => {
  return (
    <div className='output'>
      {Object.keys(output).filter(key => allowedTypes.includes(key))
        .map((key) => {
          return (
            <button
              className={outputType === key ? 'btn btn-dark' : 'btn btn-light'}
              key={key}
              value={key}
              onClick={(event) => updateOutputType(event.target.value)}
            >{key}
            </button>
          )
        })}
    </div>
  )
}

export default OutputTypeSwitcher
