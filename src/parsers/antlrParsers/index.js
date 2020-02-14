import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts'
import { JavaLexer } from './grammar/java/JavaLexer'
import { CLexer } from './grammar/c/CLexer'
import { JavaParser } from './grammar/java/JavaParser'
import { CParser } from './grammar/c/CParser'

export function parseAst ({ input, language }) {
  const chars = new ANTLRInputStream(input)
  const lexer = language === 'java' ? new JavaLexer(chars) : new CLexer(chars)
  const tokens = new CommonTokenStream(lexer)
  const parser = language === 'java' ? new JavaParser(tokens) : new CParser(tokens)
  return parser.compilationUnit()
}
