# string-similarity-algorithm

A set of string similarity algorithm implementations.

[TOC]

## Install
```bash
npm i string-similarity-algorithm --save
```

## Usage
```javascript
import similarity from 'string-similarity-algorithm'

const x = '赵丽颖否认产子'
const y = '赵丽颖极力否认生子'

const lcsScore = similarity(x, y, 'lcs') // 0.75
const levenshteinScore = similarity(x, y, 'levenshtein') // 0.6666666666666667
```

## API

### similarity (x: string, y: string, type: Type = 'lcs', options?: SimhashOptions): SimilarityReturn

Calculate the similarity of string `x` and string `y`.

``` typescript
type Type = 'lcs' | 'levenshtein' | 'simhash'
type SimilarityReturn = number | SimhashSimilarityReturn
```
* **type**
  - **lcs**: use function `lcs`.
  - **levenshtein**: use function `levenshtein`.
  - **simhash**: use function `simhashSimilarity`.

### lcs (x: string, y: string): number
Calculates the similarity between strings x and y using `longest common subsequence`.

### levenshtein (x: string, y: string): number
Calculates the similarity between strings x and y using `levenshtein distance`(`edit distance`).

### lcslen (x: string, y: string): number
Return the longest common subsequence length of string `x` and string `y`.

### levenshteinDistance (x: string, y: string): number
Return the edit distance of string `x` and string `y`.

### simhash (s: string, options: SimhashOptions = {}): number
Return simhash of string `s`.

```typescript
interface SimhashOptions {
  hashType?: HashType, // default is hashlittle
  kshinglesN?: number  // default is 3
}
```
### hammingDistance (x: number, y: number): number
Return hamming distance of x and y.

### hammingWeight (x: number): number
Return hamming weight(number of 1 bits) of x.

### simhashSimilarity (x: string, y: string, options: SimhashOptions = {}): SimhashSimilarityReturn

Calculates the similarity between strings x and y using `simhash`, `hamming distance` and `hammingWeight`).

```typescript
interface SimhashSimilarityReturn {
  score: number, // similar score of x and y, scope: [0, 1]
  hammingDistance: number // hamming distance of x and y
}
```

## Others
If strings x and y is short(eg x and y are doc titles), the best is `lcs`, worst is `simhash`.
