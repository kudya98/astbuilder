import defaultPrograms from './defaultPrograms'
import defaultOptions from './defaultOptions'

const version = 1
const options = { ...defaultOptions }
const input = { ...defaultPrograms }
const lang = 'javascript'
const theme = 'vs-dark'
const output = { json: 'Loading...', xml: 'Loading...' }
const outputType = 'json'
const file = null

export default { version, options, input, lang, theme, output, outputType, file }
