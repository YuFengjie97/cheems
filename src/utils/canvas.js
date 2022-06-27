// /** @type {HTMLCanvasElement} */

export class Circle {
  constructor(
    ctx,
    x,
    y,
    r,
    fillStyle,
    startAngle = 0,
    endAngle = Math.PI * 2,
    anticlockwise = true
  ) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.r = r
    this.fillStyle = fillStyle
    this.startAngle = startAngle
    this.endAngle = endAngle
    this.anticlockwise = anticlockwise

    // 自定义属性
    this.isGrow = false

    this.draw()
  }

  draw(){
    this.ctx.beginPath()
    this.ctx.arc(this.x,this.y,this.r,this.startAngle,this.endAngle,this.anticlockwise)
    this.ctx.fillStyle = this.fillStyle
    this.ctx.fill()
  }
}
