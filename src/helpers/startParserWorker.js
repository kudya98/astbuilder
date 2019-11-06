import ParserWorker from '../workers/parser.worker'

export default function startParserWorker (message, callback) {
  const worker = new ParserWorker()
  worker.postMessage(message)
  worker.onmessage = (e) => {
    callback(e)
    worker.terminate()
  }
}
