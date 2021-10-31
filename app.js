const swap = (arr, a, b) => {
  ;[arr[a], arr[b]] = [arr[b], arr[a]]
  return arr
}

const swapStr = (str, a, b) => {
  const arr = str.split('')
  const output = swap(arr, a, b)
  return output.join('')
}

// Heap Algorithm
const getPermutations = str => {
  const output = []
  const arr = str.split('')

  const generate = (n, a) => {
    if (n === 1) {
      output.push([...a])
      return
    }

    generate(n - 1, a)

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swap(a, i, n - 1)
      } else {
        swap(a, 0, n - 1)
      }

      generate(n - 1, a)
    }
  }

  generate(arr.length, [...arr])

  return [...new Set(output.map(item => item.join('')))]
}

console.log(getPermutations('ab'))
console.log(getPermutations('aab'))
console.log(getPermutations('aabb'))
