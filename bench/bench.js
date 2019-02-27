const similarity = require('../lib/index').default

function ibench (x, ys) {

  const startTime = Date.now()
  let i = 0

  for (let y; y = ys[i++];) {
    similarity(x, y)
  }

  const endTime = Date.now()

  console.log(`compare ${i - 1} items, cost ${endTime - startTime}ms`)
}

function bench (x, ys, name) {
  console.log(`${name || ''} bench start....`)
  for (let i = 0; i < 10; i++) {
    ibench(x, ys)
  }
  console.log('bench end....')
}

module.exports = {
  bench
}
