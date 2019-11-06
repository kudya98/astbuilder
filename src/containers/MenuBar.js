import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  updateOptions,
  startParsing,
  updateLang,
  updateTheme,
  updateOutput,
  updateOutputType,
  loadFile,
  closeFile,
  updateInput
} from '../actions'
import FileLoaderWorker from '../workers/fileLoader.worker'
import startParserWorker from '../helpers/startParserWorker'
import { getLangByFileName } from '../helpers'
import preloadedState from '../helpers/preloadedState'
import ParserOptions from '../components/ParserOptions'
import ThemeOptions from '../components/ThemeOptions'
import LangOptions from '../components/LangOptions'
import FileLoader from '../components/FileLoader'
import OutputTypeSwitcher from '../components/OutputTypeSwitcher'

const MenuBar = ({
  options,
  input,
  lang,
  theme,
  output,
  outputType,
  file,
  startParsing,
  updateInput,
  updateOptions,
  updateLang,
  updateTheme,
  updateOutput,
  updateOutputType,
  loadFile,
  closeFile
}) => {
  const handleParserComplete = (e) => {
    const output = e.data
    updateOutput(output)
    updateOutputType(Object.keys(output)[0])
  }
  const handleLoadFile = (e) => {
    if (!e.target.files[0]) {
      return
    }
    const file = e.target.files[0]
    let fileLang
    try {
      fileLang = getLangByFileName(file.name)
    } catch (e) {
      alert(e.message)
      return
    }
    loadFile(file)
    updateInput({ ...input, isLoading: true })
    const worker = new FileLoaderWorker()
    worker.postMessage({ file })
    worker.onmessage = ({ data }) => {
      worker.terminate()
      updateInput({ ...input, isLoading: false })
      updateInput(data, fileLang)
      updateLang(fileLang)
      startParsing()
      startParserWorker({
        input: data,
        lang: fileLang,
        options: options[fileLang]
      }, handleParserComplete)
    }
    worker.onerror = (e) => {
      closeFile()
      alert(e.message)
    }
  }
  const handleLangChanged = (event) => {
    updateLang(event.target.value)
    startParsing()
    startParserWorker({
      input: input[event.target.value],
      lang: event.target.value,
      options: options[lang]
    }, handleParserComplete)
  }
  const handleParserOptionsChanged = (event) => {
    const newOptions = { ...options[lang] }
    newOptions[event.target.value] = !newOptions[event.target.value]
    updateOptions(newOptions, lang)
    startParsing()
    startParserWorker({
      input: input[lang],
      lang,
      options: newOptions
    }, handleParserComplete)
  }
  const handleCloseFile = () => {
    const prevState = JSON.parse(window.localStorage.getItem('state'))
    const input = prevState.input || preloadedState.input
    const lang = prevState.lang || preloadedState.lang
    closeFile()
    updateInput(input)
    updateLang(lang)
    startParsing()
    startParserWorker({
      input: input[lang],
      lang,
      options: options[lang]
    }, handleParserComplete)
  }

  return (
    <div className='menu'>
      <div className='options form-group'>
        <LangOptions disabled={file} lang={lang} onChange={handleLangChanged} />
        <ThemeOptions theme={theme} onChange={(event) => updateTheme(event.target.value)} />
        <ParserOptions
          options={options[lang]}
          disabled={output.isLoading}
          onChange={handleParserOptionsChanged}
        />
        <FileLoader file={file} onCloseFile={handleCloseFile} onLoadFile={handleLoadFile} />
      </div>
      <OutputTypeSwitcher output={output} outputType={outputType} updateOutputType={updateOutputType} />
    </div>
  )
}

const mapStateToProps = ({
  options,
  input,
  lang,
  theme,
  output,
  outputType,
  file
}) => ({ options, input, lang, theme, output, outputType, file })
const mapDispatchToProps = dispatch => {
  return {
    updateOptions: bindActionCreators(updateOptions, dispatch),
    startParsing: bindActionCreators(startParsing, dispatch),
    updateLang: bindActionCreators(updateLang, dispatch),
    updateTheme: bindActionCreators(updateTheme, dispatch),
    updateInput: bindActionCreators(updateInput, dispatch),
    updateOutput: bindActionCreators(updateOutput, dispatch),
    updateOutputType: bindActionCreators(updateOutputType, dispatch),
    loadFile: bindActionCreators(loadFile, dispatch),
    closeFile: bindActionCreators(closeFile, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar)
