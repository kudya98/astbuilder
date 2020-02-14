import phpParserConfig from '../../config/phpParser'
import ast2xml from '../ast2xml'
import ast2json from '../ast2json'

const engine = require('./php-parser/src')
const parser = new engine(phpParserConfig)

const clearLoc = (obj) => {
  Object.keys(obj).forEach(key => {
    if (key === 'loc') {
      delete obj[key]
    } else if (obj[key] && typeof obj[key] === 'object') {
      clearLoc(obj[key])
    }
  })
}

const clearNullSource = (obj) => {
  Object.keys(obj).forEach(key => {
    if (key === 'loc') {
      delete obj.loc.source
    } else if (obj[key] && typeof obj[key] === 'object') {
      clearNullSource(obj[key])
    }
  })
}

const php = (input, options) => {
  try {
    const t1 = performance.now()
    const ast = {
      language: 'php',
      ...parser.parseCode(input)
    }
    clearNullSource(ast)
    if (options && options.retainLines !== true) clearLoc(ast)
    const t2 = performance.now()
    const json = ast2json(ast)
    const t3 = performance.now()
    const xml = ast2xml(ast, 'php')
    const t4 = performance.now()
    const timer = { json: t3 - t1, xml: t4 - t3 + t2 - t1 }

    return { json, xml, timer }
  } catch (e) {
    return { error: e.message }
  }
}

export default php
