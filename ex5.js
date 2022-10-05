/* Func which get as argument an arrayay of numbers ex: [2,1,4,5,6,7,2,3,4] and K that is a number
function should return index of 2 numbers from arrayay that in sumTwo will be equal to K
Should be different index. In case if no match return empty arrayay */
const array = [2, 1, 4, 5, 6, 7, 2, 3, 4]

const sumTwo = function (array, k) {
  const answer = []
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (k === array[i] + array[j]) {
        answer.push([i, j])
      }
    }
  }
  return answer
}

console.log(sumTwo(array, 11))
