import React from 'react'

const FileLoader = ({ file, onCloseFile, onLoadFile }) => {
  return file && !file.isLoading ? (
    <button className='btn btn-danger close-file' onClick={onCloseFile}>Close file </button>
  ) : (
    <div className='custom-file'>
      <input type='file' className='custom-file-input' id='customFile' onChange={onLoadFile} />
      <label className='custom-file-label' htmlFor='customFile'>Choose file</label>
    </div>
  )
}

export default FileLoader
