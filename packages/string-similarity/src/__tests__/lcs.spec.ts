// tslint:disable:no-console
import { lcslen } from '../lcs'
import similarity from '../index'
import { data } from './data'

describe('algorithm: lcs', () => {

  it('lcslen', () => {
    data.forEach((item) => {
      const len = lcslen(item.x, item.y)
      expect(len).toEqual(item.lcslen)
    })
  })

  it('lcs', () => {
    data.forEach((item) => {
      const score = similarity(item.x, item.y, 'lcs')
      console.log(`lcs:${item.x}:${item.y} -> ${score}`)
    })
  })
})
