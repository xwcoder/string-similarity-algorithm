/**
 * rotation x by k instance
 * @param x
 * @param k
 */
export const rot = (x: number, k: number): number => (x << k) | (x >> (32 - k))

interface MixReturn {
  a: number,
  b: number,
  c: number
}

interface HashReturn {
  b: number
  c: number
}

/**
 * mix 3 32-bit values reversibly
 * @param a
 * @param b
 * @param c
 */
export const mix = (a: number, b: number, c: number): MixReturn => {
  a -= c
  a ^= rot(c, 4)
  c += b
  b -= a
  b ^= rot(a, 6)
  a += c
  c -= b
  c ^= rot(b, 8)
  b += a
  a -= c
  a ^= rot(c, 16)
  c += b
  b -= a
  b ^= rot(a, 19)
  a += c
  c -= b
  c ^= rot(b, 4)
  b += a

  return { a, b, c }
}

/**
 * final mixing of 3 32-bit values (a,b,c) into c
 * @param a
 * @param b
 * @param c
 */
export const finalMix = (a: number, b: number, c: number): MixReturn => {
  c ^= b
  c -= rot(b, 14)
  a ^= c
  a -= rot(c, 11)
  b ^= a
  b -= rot(a, 25)
  c ^= b
  c -= rot(b, 16)
  a ^= c
  a -= rot(c, 4)
  b ^= a
  b -= rot(a, 14)
  c ^= b
  c -= rot(b, 24)

  return { a, b, c }
}

export const hashword = (k: string, initvalB: number = 0, initvalC: number = 0): HashReturn => {

  let a: number
  let b: number
  let c: number
  let len = k.length
  let index = 0

  a = b = c = 0xdeadbeef + len << 2 + initvalB
  c += initvalC

  // handle most of the key
  while (len > 3) {
    a += k.charCodeAt(index + 0)
    b += k.charCodeAt(index + 1)
    c += k.charCodeAt(index + 2);

    ({a, b, c} = mix(a, b, c))
    len -= 3
    index += 3
  }

  // handle the last 3 uint32_t's
  // all the case statements fall through
  switch (len) {
    case 3:
      c += k.charCodeAt(index + 2)
    case 2:
      b += k.charCodeAt(index + 1)
    case 1:
      a += k.charCodeAt(index + 0);
      ({a, b, c} = finalMix(a, b, c))
    case 0:     // case 0: nothing left to add
      break
  }

  return { b: b >>> 0, c: c >>> 0 }
}

export const hashlittle = (k: string, initvalB: number = 0, initvalC: number = 0): HashReturn => {

  let a: number
  let b: number
  let c: number
  let len = k.length
  let index = 0

  // Set up the internal state
  a = b = c = 0xdeadbeef + len + initvalB
  c += initvalC

  // all but the last block: affect some 32 bits of (a,b,c)
  while (len > 12) {
    a += k.charCodeAt(index + 0)
    a += k.charCodeAt(index + 1) << 8
    a += k.charCodeAt(index + 2) << 16
    a += k.charCodeAt(index + 3) << 24

    b += k.charCodeAt(index + 4)
    b += k.charCodeAt(index + 5) << 8
    b += k.charCodeAt(index + 6) << 16
    b += k.charCodeAt(index + 7) << 24

    c += k.charCodeAt(index + 8)
    c += k.charCodeAt(index + 9) << 8
    c += k.charCodeAt(index + 10) << 16
    c += k.charCodeAt(index + 11) << 24;

    ({a, b, c} = mix(a, b, c))
    len -= 12
    index += 12
  }

  // last block: affect all 32 bits of (c)
  // all the case statements fall through

  switch (len) {
    case 12:
      c += k.charCodeAt(index + 11) << 24
    case 11:
      c += k.charCodeAt(index + 10) << 16
    case 10:
      c += k.charCodeAt(index + 9) << 8
    case 9:
      c += k.charCodeAt(index + 8)
    case 8:
      b += k.charCodeAt(index + 7) << 24
    case 7:
      b += k.charCodeAt(index + 6) << 16
    case 6:
      b += k.charCodeAt(index + 5) << 8
    case 5:
      b += k.charCodeAt(index + 4)
    case 4:
      a += k.charCodeAt(index + 3) << 24
    case 3:
      a += k.charCodeAt(index + 2) << 16
    case 2:
      a += k.charCodeAt(index + 1) << 8
    case 1:
      a += k.charCodeAt(0)
      break
    case 0:
      return { b: b >>> 0, c: c >>> 0 }
  }

  ({b, c} = finalMix(a, b, c))
  return { b: b >>> 0, c: c >>> 0 }
}
