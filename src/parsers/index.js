import javascript from './javascript'
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
    default: {
      return {
        error: 'Wrong lang'
      }
    }
  }
}

export default parser
