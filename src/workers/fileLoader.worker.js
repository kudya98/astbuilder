onmessage = (e) => {
  const { file } = e.data
  const reader = new FileReader()
  reader.readAsText(file)
  reader.onload = (event) => postMessage(event.target.result)
}
