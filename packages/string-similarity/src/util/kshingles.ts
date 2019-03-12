export default function kshingles (s: string, k: number): string[] {
  const len = Math.ceil(s.length / k)
  return new Array(len).fill('').map((_, index) => s.slice(index * k, index * k + k))
}
