export function audioLoad(fftSize, audioDom) {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)()

  const analyser = audioCtx.createAnalyser()
  analyser.fftSize = fftSize

  const source = audioCtx.createMediaElementSource(audioDom)
  source.connect(analyser)
  analyser.connect(audioCtx.destination)

  const bufferLength = analyser.frequencyBinCount
  dataArray = new Uint8Array(bufferLength)

  return {analyser}
}
