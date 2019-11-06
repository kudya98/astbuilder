const he = require('he')

export const j2xParserOptions = {
  attributeNamePrefix: '',
  ignoreAttributes: false,
  format: true,
  indentBy: '  ',
  supressEmptyNode: true,
  attrValueProcessor: val =>
    he.encode(val, { useNamedReferences: true })
}

export const x2jParserOptions = {
  attributeNamePrefix: '',
  ignoreAttributes: false,
  ignoreNameSpace: false,
  allowBooleanAttributes: true,
  parseAttributeValue: true,
  trimValues: true,
  parseTrueNumberOnly: false,
  attrValueProcessor: val =>
    he.decode(val, { isAttributeValue: true })
}
