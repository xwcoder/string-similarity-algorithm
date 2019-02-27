const { bench } = require('./bench')
const ys = require('./data2')

// const index = Math.floor(Math.random() * (ys.length - 1))
const index = 2
const x = ys[index]
ys.splice(index, 1)

console.log(x)

bench(x, ys, '长标题')
