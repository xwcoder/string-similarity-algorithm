# jenkins-hash-lookup3

A implementation of [jenkins hash functions(loopup3 )](http://www.burtleburtle.net/bob/c/lookup3.c).


[TOC]

## Install
```bash
npm i jenkins-hash-lookup3 --save
```

## Usage
```javascript
import 'hashlittle' from 'jenkins-hash-lookup3'

const hashcode = hashlittle('赵丽颖否认产子')
```

## API

### hashlittle (k: string, initvalB: number = 0, initvalC: number = 0): HashReturn

```typescript
interface HashReturn {
  b: number
  c: number
}
```

### hashword (k: string, initvalB: number = 0, initvalC: number = 0): HashReturn

### mix (a: number, b: number, c: number): MixReturn

```typescript
interface MixReturn {
  a: number,
  b: number,
  c: number
}
```
### finalMix (a: number, b: number, c: number): MixReturn
