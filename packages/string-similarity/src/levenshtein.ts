export default function levenshtein (x: string, y: string): number {
  if (!x.length && !y.length) {
    return 1
  }

  const distance = levenshteinDistance(x, y)
  return 1 - distance / Math.max(x.length, y.length)
}

export function levenshteinDistance (x: string, y: string): number {

  if (x === y) {
    return 0
  }

  if (!x.length) {
    return y.length
  }

  if (!y.length) {
    return x.length
  }

  if (x.length < y.length) {
    [x, y] = [y, x]
  }

  const matrix = [new Array(y.length + 1).fill('').map((_, i) => i)]
  let index = 0

  for (let i = 1; i <= x.length; i++) {

    matrix[index = 1 - index] = [i]

    for (let j = 1; j <= y.length; j++) {
      if (x[i - 1] === y[j - 1]) {
        matrix[index][j] = matrix[1 - index][j - 1]
      } else {
        matrix[index][j] = Math.min(
          matrix[1 - index][j - 1] + 1, // 替换
          matrix[1 - index][j] + 1, // 删除
          matrix[index][j - 1] + 1 // 插入
        )
      }
    }
  }

  return matrix[index][y.length]
}

// export function levenshteinDistance (x: string, y: string): number {
//
//   if (x === y) {
//     return 0
//   }
//
//   if (!x.length) {
//     return y.length
//   }
//
//   if (!y.length) {
//     return x.length
//   }
//
//   const matrix = []
//
//   for (let i = 0; i <= x.length; i++) {
//     matrix[i] = [i]
//   }
//
//   for (let j = 0; j <= y.length; j++) {
//     matrix[0][j] = j
//   }
//
//   for (let i = 1; i <= x.length; i++) {
//     for (let j = 1; j <= y.length; j++) {
//       if (x[i - 1] === y[j - 1]) {
//         matrix[i][j] = matrix[i - 1][j - 1]
//       } else {
//         matrix[i][j] = Math.min(
//           matrix[i - 1][j - 1] + 1, // 替换
//           matrix[i - 1][j] + 1, // 删除
//           matrix[i][j - 1] + 1 // 插入
//         )
//       }
//     }
//   }
//
//   return matrix[x.length][y.length]
// }

// export function levenshteinDistance (x: string, y: string): number {
//
//   if (x.length === 0) {
//     return y.length
//   }
//
//   if (y.length === 0) {
//     return x.length
//   }
//
//   return Math.min(
//     levenshtein(x.substring(1), y) + 1, // 删除
//     levenshtein(x, y.substring(1)) + 1, // 插入
//     levenshtein(x.substring(1), y.substring(1)) + (x[0] === y[0] ? 0 : 1) // 相等或替换
//   )
// }
