import { parse } from '@babel/parser'
import babelParserOptions from '../../config/babelParser'
import json2xml from '../json2xml'

const clearLoc = (obj) => {
  Object.keys(obj).forEach(key => {
    if (key === 'loc') {
      delete obj[key]
    } else if (obj[key] && typeof obj[key] === 'object') {
      clearLoc(obj[key])
    }
  })
}

const javascript = (input, options) => {
  try {
    const t1 = performance.now()
    const ast = {
      language: 'javascript',
      ...parse(input, babelParserOptions).program
    }
    if (ast.directives && ast.directives.length === 0) delete ast.directives
    if (options && options.retainLines !== true) clearLoc(ast)
    const t2 = performance.now()
    const json = JSON.stringify(ast, null, 2)
    const t3 = performance.now()
    const xml = json2xml(ast, 'javascript')
    const t4 = performance.now()
    const timer = { json: t3 - t1, xml: t4 - t3 + t2 - t1 }

    return { json, xml, timer }
  } catch (e) {
    return { error: e.message }
  }
}

export default javascript
