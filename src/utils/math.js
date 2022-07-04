export function random(...args) {
  // 随机范围
  if (args.length === 2) {
    return parseInt(Math.random() * (args[1] - args[0]) + args[0])
  }
  // 数组随机值
  if (args.length === 1) {
    const len = args[0].length
    return args[0][parseInt(Math.random() * len)]
  }
}

export function getMax(arr) {
  let max = arr[0]
  let len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[i] > max) max = arr[i]
  }
  return max
}

export function getAvg(arr) {
  let sum = arr.reduce((acc, next) => acc + next, 0)
  return sum / arr.length
}

export function getMaxAndAvg(arr) {
  let max = arr[0]
  let sum = arr.reduce((acc, next) => {
    if (next > max) max = next
    return acc + next
  }, 0)

  let avg = sum / arr.length
  return {max,avg}
}

export function randomArr(len, min, max) {
  let res = []
  for (let i = 0; i < len; i++) {
    res.push(random(min, max))
  }
  return res
}
