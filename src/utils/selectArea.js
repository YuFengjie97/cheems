export function select(con) {
  let conDom
  if (typeof con === 'string') {
    document.querySelector(con)
  }else{
    conDom = con
  }
  conDom.style.position = 'relative'

  const selectMask = document.createElement('div')
  selectMask.setAttribute('class', 'mask')

  // 添加选择遮罩
  conDom.append(selectMask)

  conDom.addEventListener('click', () => {
    console.log('click')
  })
}
