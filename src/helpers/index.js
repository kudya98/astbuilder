export function getFileExtensionByLang (lang) {
  switch (lang) {
    case ('javascript'): {
      return 'js'
    }
    case ('php'): {
      return 'php'
    }
    case ('json'): {
      return 'json'
    }
    case ('xml'): {
      return 'xml'
    }
    default: {
      return 'txt'
    }
  }
}

export function getLangByFileName (fileName) {
  const extension = fileName.match(/\.[0-9a-z]+$/i)
    ? fileName.match(/\.[0-9a-z]+$/i)[0]
    : null
  switch (extension) {
    case ('.json'): {
      return 'json'
    }
    case ('.xml'): {
      return 'xml'
    }
    case ('.js'): {
      return 'javascript'
    }
    case ('.php'): {
      return 'php'
    }
    default: {
      throw new Error('Can\'t read this file')
    }
  }
}
