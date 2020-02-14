import React, { useState, useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MonacoEditor from 'react-monaco-editor'
import { startParsing, updateInput, updateOutput, updateOutputType } from '../actions'
import startParserWorker from '../helpers/startParserWorker'
import { inputEditorOptions } from '../config/editors'

const DEFAULT_TIMEOUT = 200

const InputWindow = ({
  options,
  input,
  lang,
  theme,
  file,
  startParsing,
  updateInput,
  updateOutput,
  updateOutputType
}) => {
  const [timer, setTimer] = useState(null)
  const handleChange = async (newValue) => {
    startParsing()
    startParserWorker({
      input: newValue,
      lang,
      options: options[lang]
    }, (e) => {
      const output = e.data
      updateOutput(output)
    })
  }
  useEffect(() => {
    startParsing()
    startParserWorker({
      input: input[lang],
      lang,
      options: options[lang]
    }, (e) => {
      const output = e.data
      updateOutput(output)
      updateOutputType('json')
    })
    // eslint-disable-next-line
  }, [])

  return (
    <div className={input.isLoading ? 'input loading' : 'input'}>
      <MonacoEditor
        language={lang}
        theme={theme}
        value={input[lang]}
        options={file ? { ...inputEditorOptions, readOnly: true } : { ...inputEditorOptions, readOnly: false }}
        onChange={(newValue) => {
          updateInput(newValue, lang)
          clearTimeout(timer)
          setTimer(setTimeout(() => handleChange(newValue), DEFAULT_TIMEOUT))
        }}
        editorDidMount={(editor) => {
          window.addEventListener('resize', () => editor.layout())
          editor.focus()
        }}
      />
    </div>
  )
}

const mapStateToProps = ({ options, input, lang, theme, file }) => ({ options, input, lang, theme, file })
const mapDispatchToProps = dispatch => {
  return {
    startParsing: bindActionCreators(startParsing, dispatch),
    updateInput: bindActionCreators(updateInput, dispatch),
    updateOutput: bindActionCreators(updateOutput, dispatch),
    updateOutputType: bindActionCreators(updateOutputType, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputWindow)
