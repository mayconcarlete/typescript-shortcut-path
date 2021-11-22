// const input = {a:1, b:2}

// const clone = Object.prototype.constructor(input)
// const clone2 = Object.assign({}, input)
// const clone3 = {...input}
// const clone4 = JSON.parse(JSON.stringify(input))

// console.log(clone)
// console.log(clone === input)
// console.log(clone2 === input)
// console.log(clone3 === input)
// console.log(clone4 === input)

// input.a = 3
// console.log(clone)const isOdd = (num: number) => num % 2 !== 1

// const isOdd = (num: number) => num % 2 === 1
// console.log(isOdd(1))

type Person = {
  name: string
  yearOfBirth: number
  placeOfBirth: string
}

const arrayOfPersons: Person[] = [
  {
    name: 'John',
    yearOfBirth: 1988,
    placeOfBirth: 'New York',
  },
  {
    name: 'Nancy',
    yearOfBirth: 1963,
    placeOfBirth: 'New York',
  },
  {
    name: 'John',
    yearOfBirth: 1980,
    placeOfBirth: 'Toronto',
  },
];

type Previous = {
  [key: string]: Person[] | undefined
}
// const myReduce = (previous: Previous, current: Person):Previous => {
//   if(previous[current.name] === undefined){
//     previous[current.name] = [current]
//     return previous
//   }
//   previous[current.name]?.push(current)
//   return previous
// }


// const filterByName = (persons: Person[], callback: Function): any => {
//   return persons.reduce((previous: Previous, current:Person): Previous=>{
//       const key = callback(current)
//       if(previous[key] === undefined){
//         previous[key] = [current]
//         return previous
//       } else {
//         previous[key]!.push(current)
//         return previous
//       }
//   }, {})
// }

// const isOdd = (age: number) => age % 2 !== 0
// const byAge = (person: Person) => isOdd(person.yearOfBirth)
// const byName = (person: Person) => person.name
// console.log(filterByName(arrayOfPersons, byAge))
