import { j2xParser } from 'fast-xml-parser'
import { j2xParserOptions } from '../config/xmlParser'

const ast2xml = (ast, lang) => {
  const parser = new j2xParser({ ...j2xParserOptions, lang })
  return parser.parse({ Program: ast })
}

export default ast2xml
