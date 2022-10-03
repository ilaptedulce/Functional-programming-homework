// Ex.4 Sort array with numbers even asc odd dsc[4,5,3,6,7,1,2,9,8] => [2,4,6,8,9,7,5,3,1]
const sort = (arr) => {
  const sorted = arr.sort((a, b) => a - b)
  const odd = sorted.filter(item => item % 2 !== 0)
  const even = sorted.filter(item => item % 2 === 0)
  return [...even, ...odd.reverse()]
}

console.log(sort([4, 5, 3, 6, 7, 1, 2, 9, 8]))
