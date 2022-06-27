export class AudioAnalyser {
  dataArray = []

  constructor(audioDom, fftSize = 512) {
    if(this.analyser) return
    // audio上下文
    const AudioContext = window.AudioContext || window.webkitAudioContext
    const ctx = new AudioContext()

    const analyser = ctx.createAnalyser()
    analyser.fftSize = fftSize // 取样率
    const source = ctx.createMediaElementSource(audioDom) // 通过<audio>节点创建音频源
    source.connect(analyser) // 将音频源关联到分析器
    analyser.connect(ctx.destination) // 将分析器关联到输出设备（耳机、扬声器）
    const bufferLength = analyser.frequencyBinCount
    this.analyser = analyser
    this.dataArray = new Uint8Array(bufferLength)
  }

  getAudioData() {
    this.analyser.getByteFrequencyData(this.dataArray)
    return this.dataArray
  }
}
