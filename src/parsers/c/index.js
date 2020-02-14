import ast2json from '../ast2json'
import ast2xml from '../ast2xml'
import { parseAst } from '../antlrParsers'

const clearLoc = (obj) => {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'number' && (key === 'stop' || key === 'start' || key === 'line' || key === 'column')) {
      delete obj[key]
    } else if (obj[key] && typeof obj[key] === 'object') {
      clearLoc(obj[key])
    }
  })
}

const c = async (input, options) => {
  try {
    const t1 = performance.now()
    const ast = Object.assign({ language: 'c' }, await parseAst({
      input,
      language: 'c'
    }))
    if (options && options.retainLines !== true) clearLoc(ast)
    const t2 = performance.now()
    const json = ast2json(ast)
    const t3 = performance.now()
    const xml = ast2xml(ast, 'c')
    const t4 = performance.now()
    const timer = { json: t3 - t1, xml: t4 - t3 + t2 - t1 }

    return { json, xml, timer }
  } catch (e) {
    return { error: e.message }
  }
}

export default c
