import levenshtein, { levenshteinDistance } from './levenshtein'
import lcs, { lcslen } from './lcs'

export {
  levenshtein,
  levenshteinDistance,
  lcs,
  lcslen
}

type Type = 'lcs' | 'levenshtein'

export default function similarity (x: string, y: string, type: Type = 'lcs'): number {

  if (type === 'lcs') {
    return lcs(x, y)
  }

  if (type === 'levenshtein') {
    return levenshtein(x, y)
  }
}
