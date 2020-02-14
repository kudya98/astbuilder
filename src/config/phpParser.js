const phpParserConfig = {
  parser: {
    extractDoc: true,
    php7: true,
    suppressErrors: false
  },
  lexer: {
    all_tokens: true,
    comment_tokens: true
  },
  ast: {
    withPositions: true
  }
}

export default phpParserConfig
