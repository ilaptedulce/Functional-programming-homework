// Ex.3 : Object deep clone
const person = {
  name: 'Sophie',
  age: 28,
  hobbies: ['Chess', 'Travel', 'Kayaking'],
  sibling: [
    {
      name: 'Nadine',
      age: 16
    },
    {
      name: 'Alex',
      age: 30
    }
  ],
  greeting () {
    console.log('Hello')
  }
}

const deepClone = (input) => {
  if (typeof input !== 'object' || input === null) return input

  const newObject = Array.isArray(input) ? [] : {}
  for (const key in input) {
    newObject[key] = deepClone(input[key])
  }
  return newObject
}
const obj = null
const copyObj = deepClone(obj)
const copyPerson = deepClone(person)
console.log(copyObj)
console.log(copyPerson)
