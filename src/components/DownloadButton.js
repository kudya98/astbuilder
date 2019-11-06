import React from 'react'
import { getFileExtensionByLang } from '../helpers'
import downloadButton from '../assets/downloadButton.png'

const DownloadButton = ({ outputType, href }) => {
  return (
    <a download={`output.${getFileExtensionByLang(outputType)}`} href={href}>
      <img className='logo' src={downloadButton} alt='Download' />
    </a>
  )
}

export default DownloadButton
