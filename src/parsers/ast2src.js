import parser from 'fast-xml-parser'
import generate from '@babel/generator'
import { x2jParserOptions } from '../config/xmlParser'
import babelGeneratorOptions from '../config/babelGenerator'
import phpUnparserConfig from '../config/phpUnparser'
import unparse from 'php-unparser'

const ast2src = (input, lang) => {
  try {
    const t1 = performance.now()
    const ast = lang === 'xml' ? parser.parse(input, x2jParserOptions).Program : JSON.parse(input)
    const srcLang = ast.language
    const result = {}
    switch (srcLang) {
      case 'javascript':
        result[srcLang] = generate(ast, babelGeneratorOptions).code
        break
      case 'php':
        result[srcLang] = unparse(ast, phpUnparserConfig)
        break
      default:
        return { error: 'Can\'t generate src' }
    }
    const t2 = performance.now()
    result.timer = {}
    result.timer[srcLang] = t2 - t1
    return result
  } catch (e) {
    return { error: e.message }
  }
}

export default ast2src
