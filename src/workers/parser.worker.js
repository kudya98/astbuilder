import parser from '../parsers'

onmessage = (e) => {
  const { input, lang, options } = e.data
  postMessage(parser(input, lang, options))
}
