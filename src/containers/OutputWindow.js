import React from 'react'
import { connect } from 'react-redux'
import MonacoEditor from 'react-monaco-editor'
import { outputEditorOptions } from '../config/editors'
import DownloadButton from '../components/DownloadButton'
import OutputStatistics from '../components/OutputStatistics'

const OutputWindow = ({ output, outputType, theme }) => {
  const outputBlob = new Blob([output[outputType]], { type: `application/${outputType}` })
  const outputUrl = URL.createObjectURL(outputBlob)
  const timer = output && output.timer && output.timer[outputType]

  return (
    <div className={output.isLoading ? 'output loading' : 'output'}>
      {!output.error && !output.isLoading && <OutputStatistics size={outputBlob.size} timer={timer} />}
      {!output.error && !output.isLoading && <DownloadButton output={output} outputType={outputType} href={outputUrl} />}
      <MonacoEditor
        language={output.error ? 'plaintext' : outputType}
        theme={theme}
        value={output.error ? output.error : output[outputType]}
        options={output.error ? { ...outputEditorOptions, lineNumbers: 'off' } : outputEditorOptions}
        editorDidMount={(editor) => { window.addEventListener('resize', () => editor.layout()) }}
      />
    </div>
  )
}

const mapStateToProps = ({ output, outputType, theme }) => ({ output, outputType, theme })

export default connect(mapStateToProps)(OutputWindow)
