export class SA {
  isDown = false
  con = null
  dataKey = ''
  start = [] // 0-->x,1-->y
  end = []
  area = null
  selectData = []
  conX = 0
  conY = 0
  mousedownCallback = () => {}
  selectCallback = () => {}
  mouseupCallback = () => {}

  constructor(con, selectItem, dataKey, mousedownCallback, selectCallback, mouseupCallback) {
    this.con = con
    this.con.style.position = 'relative'
    this.selectItem = selectItem
    this.dataKey = dataKey
    if (mousedownCallback) this.mousedownCallback = mousedownCallback
    if (selectCallback) this.selectCallback = selectCallback
    if (mouseupCallback) this.mouseupCallback = mouseupCallback
    this.mousedown()
    this.mousemove()
    this.mouseup()
    this.mouseleave()
    this.initConData()
  }
  initConData () {
    let  { x, y } = this.con.getBoundingClientRect()
    this.conX = x
    this.conY = y
  }
  mousedown() {
    this.con.addEventListener('mousedown', (e) => {
      this.isDown = true
      console.log('mousedown')
      this.start = [e.clientX - this.conX, e.clientY - this.conY]
      this.createArea()
      this.mousedownCallback()
    })
  }

  mousemove() {
    this.con.addEventListener('mousemove', (e) => {
      if (!this.isDown) return
      console.log('mousemove')
      this.end = [e.clientX - this.conX, e.clientY - this.conY]
      this.updateArea()
      this.select()
    })
  }

  mouseup() {
    this.con.addEventListener('mouseup', () => {
      this.isDown = false
      console.log('mouseup')
      this.removeArea()
      this.mouseupCallback()
    })
  }

  mouseleave(){
    this.con.addEventListener('mouseleave',()=>{
      if (this.isDown) {
        this.isDown = false
        console.log('mouseleave');
        this.removeArea()
        this.mouseupCallback()
      }
    })
  }

  createArea() {
    if (!this.area) {
      this.area = document.createElement('div')
    }
    this.area.style.position = 'absolute'
    this.area.style.border = '1px solid rgb(0,119,255)'
    this.area.style.background = 'rgba(0,119,255,0.2)'
    this.con.appendChild(this.area)
  }

  removeArea() {
    this.area.remove()
  }

  updateArea() {
    let left = Math.min(this.start[0], this.end[0])
    let top = Math.min(this.start[1], this.end[1])
    let width = Math.abs(this.end[0] - this.start[0])
    let height = Math.abs(this.end[1] - this.start[1])

    this.area.style.left = `${left}px`
    this.area.style.top = `${top}px`
    this.area.style.width = `${width}px`
    this.area.style.height = `${height}px`
  }

  // rect为getBoundingClientRect返回值
  validIntersection(rectA, rectB) {
    let p1 = [rectA.left, rectA.top] //rectA左上角坐标
    let p2 = [rectA.right, rectA.bottom] //rectA右下角坐标
    let p3 = [rectB.left, rectB.top] //rectB左上角坐标
    let p4 = [rectB.right, rectB.bottom] //rectB右下角坐标
    if (p2[1] > p3[1] && p1[1] < p4[1] && p2[0] > p3[0] && p1[0] < p4[0]) {
      return true
    }
    return false
  }

  select() {
    let rectArea = this.area.getBoundingClientRect()
    this.selectData = []
    this.selectItem.forEach((item) => {
      let rectItem = item.getBoundingClientRect()
      if (this.validIntersection(rectArea, rectItem)) {
        this.selectData.push(item.dataset[this.dataKey])
        item.style.background = '#6c5ce7'
        item.style.color = '#fff'
      } else {
        item.style.background = '#fff'
        item.style.color = '#000'
      }
    })
    this.selectCallback()
  }
}
