import React from 'react'

const OutputStatistics = ({ size, timer }) => {
  const sizeString = size ? `${size / 1000}kB` : ''
  const timerString = timer ? `${timer.toFixed(2)}ms` : ''
  return (
    (size || timer) &&
      <pre className='statistics'>
        {`${sizeString} ${timerString}`}
      </pre>
  )
}

export default OutputStatistics
