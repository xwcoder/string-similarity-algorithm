import {
  rot,
  mix,
  finalMix,
  hashword
} from '../../src/index'

describe('rot', () => {
  it('rot-1', () => {
    const r = rot(21, 4)
    expect(r).toEqual(336)
  })
})

describe('mix', () => {
  it('mix-1', () => {
    const r = mix(22, 34, 51)
    console.log(r)
  })
})

describe('finalMix', () => {
  it('finalMix-1', () => {
    const r = finalMix(22, 34, 51)
    console.log(r)
  })
})

describe.only('hashword', () => {
  it('hashword-1', () => {
    const { b, c } = hashword('This is the time for all good men to come to the aid of their country...', 13)
    console.log(b)
    console.log(c)
    console.log(b.toString(16))
    console.log(c.toString(16))
  })
})
