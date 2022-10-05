// Ex.2: Implement map, filter, every ,some, find ,indexOf with reduce(), could be used as other array methods
const array = [1, 49, 3, 4, 35, 6, 7, 28]
// implementation of Map method
const map = (array, func) => {
  return array.reduce((newArr, arrElement) => {
    newArr.push(func(arrElement))
    return newArr
  }, [])
}
// implementation of Filter method
const filter = (array, func) => {
  return array.reduce((newArr, arrElement) => {
    if (func(arrElement)) {
      newArr.push(arrElement)
    }
    return newArr
  }, [])
}
// implementation of Find method
const find = (array, func) => {
  return array.reduce((acc, arrElement) => {
    if (func(arrElement) && !acc) return arrElement
    return acc
  }, undefined)
}
// implementation of Some method
const some = (array, func) => {
  return array.reduce((acc, arrElement) => {
    if (func(arrElement) && !acc) return true
    return acc
  }, false)
}

// implementation of IndexOf method
const indexOf = (array, searchedElement) => {
  return array.reduce((acc, arrElement, index) => {
    if (searchedElement === arrElement && acc === -1) return index
    return acc
  }, -1)
}
// implementation of Every method
const every = (array, func) => {
  return array.reduce((acc, arrElement) => {
    if (!func(arrElement) && acc) return false
    return acc
  }, true)
}
console.log('Map method', map(array, (element) => element + 2))
console.log('Filter method', filter(array, (element) => element > 10))
console.log('Find method', find(array, (element) => element % 5 === 0))
console.log('Some method', some(array, (element) => element % 2 === 0))
console.log('IndexOf method', indexOf(array, 49))
console.log('Every method', every(array, (element) => element < 50))
