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
  if (typeof input !== 'object') return input

  const newObject = Array.isArray(input) ? [] : {}
  for (const key in input) {
    newObject[key] = deepClone(input[key])
  }
  return newObject
}

const copyObj = deepClone(person)
console.log(copyObj)
