import parser from '../parsers'

onmessage = async (e) => {
  const { input, lang, options } = e.data
  const result = await parser(input, lang, options)
  postMessage(result)
}
