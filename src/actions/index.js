export function updateOptions (options, lang) {
  return {
    type: 'UPDATE_OPTIONS',
    payload: { options, lang }
  }
}

export function updateInput (value, lang) {
  return {
    type: 'UPDATE_INPUT',
    payload: { value, lang }
  }
}

export function updateLang (lang) {
  return {
    type: 'UPDATE_LANG',
    payload: lang
  }
}

export function updateTheme (theme) {
  return {
    type: 'UPDATE_THEME',
    payload: theme
  }
}

export function startParsing () {
  return {
    type: 'START_PARSING'
  }
}

export function updateOutput (output) {
  return {
    type: 'UPDATE_OUTPUT',
    payload: output
  }
}

export function updateOutputType (type) {
  return {
    type: 'UPDATE_OUTPUT_TYPE',
    payload: type
  }
}

export function loadFile (file) {
  return {
    type: 'LOAD_FILE',
    payload: file
  }
}

export function closeFile () {
  return {
    type: 'CLOSE_FILE'
  }
}
