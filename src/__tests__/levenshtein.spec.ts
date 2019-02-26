// tslint:disable:no-console
import { levenshteinDistance } from '../levenshtein'
import similarity from '../index'
import { data } from './data'

describe('algorithm:levenshtein', () => {

  it('levenshteinDistance', () => {
    data.forEach((item) => {
      const ed = levenshteinDistance(item.x, item.y)
      expect(ed).toEqual(item.ed)
    })
  })

  it('levenshtein', () => {
    data.forEach((item) => {
      const score = similarity(item.x, item.y, 'levenshtein')
      console.log(`levenshtein:${item.x}:${item.y} -> ${score}`)
    })
  })

})
