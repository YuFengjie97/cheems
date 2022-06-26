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
