import { j2xParser } from 'fast-xml-parser'
import { j2xParserOptions } from '../config/xmlParser'

const json2xml = (json, lang) => {
  const parser = new j2xParser({ ...j2xParserOptions, lang })
  return parser.parse({ Program: json })
}

export default json2xml
