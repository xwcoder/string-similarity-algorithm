import { hashlittle, hashword } from 'jenkins-hash-lookup3'
import kshingles from './util/kshingles'

type HashType = 'hashlittle' | 'hashword'

export interface SimhashOptions {
  hashType?: HashType,
  kshinglesN?: number
}

const defaultSimhashOptions: SimhashOptions = {
  hashType: 'hashlittle',
  kshinglesN: 3
}

export function simhash (s: string, options: SimhashOptions = {}): number {

  options = {
    ...defaultSimhashOptions,
    ...options
  }

  const { hashType, kshinglesN } = options
  let hashFn

  if (hashType === 'hashlittle') {
    hashFn = hashlittle
  } else if (hashType === 'hashword') {
    hashFn = hashword
  }

  const tokens: string[] = kshingles(s, kshinglesN)
  const hashs: number[] = tokens.map((token) => hashFn(token).c)

  let sim = 0
  const mask = 1

  for (let i = 0; i < 32; i++) {
    let w = 0
    hashs.forEach((hash) => {
      w += (hash >>> i & mask) === 1 ? 1 : -1
    })

    if (w > 0) {
      sim = sim | (mask << i)
    }
  }

  return sim >>> 0
}

export function hammingWeight (x: number): number {
  let c = 0
  for (; x; c++) {
    x &= (x - 1)
  }
  return c
}

export const hammingDistance = (x: number, y: number): number => hammingWeight(x ^ y)

export interface SimhashSimilarityReturn {
  score: number,
  hammingDistance: number
}

export function similarity (x: string, y: string, options: SimhashOptions = {}): SimhashSimilarityReturn {

  const hashx = simhash(x, options)
  const hashy = simhash(y, options)

  return {
    score: hammingWeight(hashx & hashy) / hammingWeight(hashx | hashy),
    hammingDistance: hammingDistance(hashx, hashy)
  }
}
