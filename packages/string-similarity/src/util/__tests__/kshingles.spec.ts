// tslint:disable:no-console
import kshingles from '../kshingles'

describe.only('kshingles', () => {

  it('zh-ch', () => {
    const s = '赵丽颖否认产子'
    const r = kshingles(s, 3)
    expect(r).toHaveLength(3)
  })
})
