const phpParserConfig = {
  parser: {
    extractDoc: false,
    php7: true,
    suppressErrors: false
  },
  ast: {
    withPositions: false
  }
}

export default phpParserConfig
