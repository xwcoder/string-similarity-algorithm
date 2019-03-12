export default function lcs (x: string, y: string): number {

  if (!x.length && !y.length) {
    return 1
  }

  const len = lcslen(x, y)
  return len * 2 / (x.length + y.length)
}

export function lcslen (x: string, y: string): number {

  if (x === y) {
    return x.length
  }

  if (!x.length || !y.length) {
    return 0
  }

  if (x.length < y.length) {
    [x, y] = [y, x]
  }

  const matrix = [new Array(y.length + 1).fill(0)]
  let index = 0

  for (let i = 1, xlen = x.length; i <= xlen; i++) {

    matrix[index = 1 - index] = [0]

    for (let j = 1, ylen = y.length; j <= ylen; j++) {

      if (x[i - 1] === y[j - 1]) {
        matrix[index][j] = matrix[1 - index][j - 1] + 1
      } else {
        matrix[index][j] = Math.max(matrix[1 - index][j], matrix[index][j - 1])
      }
    }
  }

  return matrix[index][y.length]
}

// export default function lcs (x: string, y: string): number {
//
//   if (x === y) {
//     return x.length
//   }
//
//   if (!x.length || !y.length) {
//     return 0
//   }
//
//   const matrix = [new Array(y.length + 1).fill(0)]
//
//   for (let i = 1; i <= x.length; i++) {
//     matrix[i] = [0]
//     for (let j = 1; j <= y.length; j++) {
//       if (x[i - 1] === y[j - 1]) {
//         matrix[i][j] = matrix[i - 1][j - 1] + 1
//       } else {
//         matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1])
//       }
//     }
//   }
//
//   return matrix[x.length][y.length]
// }

// export default function lcs (x: string, y: string): number {
//   if (x.length === 0 || y.length === 0) {
//     return 0
//   }
//
//   if (x[0] === y[0]) {
//     return lcs(x.substring(1), y.substring(1)) + 1
//   }
//
//   return Math.max(
//     lcs(x.substring(1), y),
//     lcs(x, y.substring(1))
//   )
// }
