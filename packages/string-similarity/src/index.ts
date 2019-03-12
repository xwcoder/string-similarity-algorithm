import levenshtein, { levenshteinDistance } from './levenshtein'
import lcs, { lcslen } from './lcs'
import {
  simhash,
  hammingDistance,
  hammingWeight,
  similarity as simhashSimilarity,
  SimhashOptions,
  SimhashSimilarityReturn
} from './simhash'

export {
  levenshtein,
  levenshteinDistance,
  lcs,
  lcslen,
  simhash,
  hammingDistance,
  hammingWeight,
  simhashSimilarity
}

type Type = 'lcs' | 'levenshtein' | 'simhash'
type SimilarityReturn = number | SimhashSimilarityReturn

export default function similarity (
  x: string,
  y: string,
  type: Type = 'lcs',
  options?: SimhashOptions
): SimilarityReturn {

  if (type === 'lcs') {
    return lcs(x, y)
  }

  if (type === 'levenshtein') {
    return levenshtein(x, y)
  }

  if (type === 'simhash') {
    return simhashSimilarity(x, y, options)
  }

  return 0
}
