import {
  simhash,
  hammingDistance,
  hammingWeight
} from '../simhash'

const x = '赵丽颖否认产子'
const y = '赵丽颖极力否认生子'

// const x = '欧冠1/8淘汰赛首回合拜仁将客战利物浦，意大利裁判罗基将执法本场焦点大战。罗基执法过拜仁3场比赛，拜仁全部获胜>>'
// const y = '欧冠1/8淘汰赛首回合拜仁将战利物浦，裁判罗基将执法本场焦点大战。罗基执法过拜仁3场比赛，拜仁全部获胜'

describe('simhash', () => {

  it('simhash-1', () => {
    const hashx = simhash(x, { kshinglesN: 3 })
    console.log(hashx)
    console.log(hashx.toString(2))

    const hashy = simhash(y, { kshinglesN: 3 })
    console.log(hashy)
    console.log(hashy.toString(2))

    console.log(hammingDistance(hashx, hashy))

    console.log(hammingWeight(hashx & hashy))
    console.log(hammingWeight(hashx | hashy))
    console.log(hammingWeight(hashx & hashy) / hammingWeight(hashx | hashy))
  })
})
