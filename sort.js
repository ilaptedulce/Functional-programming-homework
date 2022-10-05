// Ex.1 : Sort func[{name:'name',age:18}] by name/age (asc/dsc)
const array = [{ name: 'Irina', age: 27 }, { name: 'Alex', age: 31 }, { name: 'Dana', age: 20 }, { name: 'Sergiu', age: 25 }]
function sortByKey (array, key, order) {
  if (order === 'asc') {
    return array.sort((a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0)
  } else if (order === 'dsc') {
    return array.sort((a, b) => a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0)
  }
}
console.log(sortByKey(array, 'age', 'asc'))
console.log(sortByKey(array, 'name', 'asc'))
console.log(sortByKey(array, 'age', 'dsc'))
console.log(sortByKey(array, 'name', 'dsc'))
