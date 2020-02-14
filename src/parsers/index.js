import javascript from './javascript'
import java from './java'
import php from './php'
import c from './c'
import ast2src from './ast2src'

const parser = (input, lang, options) => {
  switch (lang) {
    case 'json': {
      return ast2src(input, lang)
    }
    case 'xml': {
      return ast2src(input, lang)
    }
    case 'javascript': {
      return javascript(input, options)
    }
    case 'php': {
      return php(input, options)
    }
    case 'java': {
      return java(input, options)
    }
    case 'c': {
      return c(input, options)
    }
    default: {
      return {
        error: 'Wrong lang'
      }
    }
  }
}

export default parser
