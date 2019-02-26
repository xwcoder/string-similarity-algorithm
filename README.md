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

### similarity (x: string, y: string, type: string = 'lcs'): number

Calculate the similarity of string `x` and string `y`.
* `x`: string
* `y`: string
* `type`: string, is `lcs` or `levenshtein`, default is `lcs`.
  - lcs: use `longest common subsequence`.
  - levenshtein: use `levenshtein distance`(`edit distance`).

### lcs (x: string, y: string): number
Equal to `similarity(x, y, 'lcs')`

### levenshtein (x: string, y: string): number
Equal to `similarity(x, y, 'levenshtein')`

### lcslen (x: string, y: string): number
Return the longest common subsequence length of string `x` and string `y`.

### levenshteinDistance (x: string, y: string): number
Return the edit distance of string `x` and string `y`.
