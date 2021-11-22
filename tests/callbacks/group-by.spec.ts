type Person = {
  name: string
  yearOfBirth: number
  placeOfBirth: string
}

type Previous = {
  [key: string]: Person[] | undefined
}
const groupBy = (persons: Person[], callback: Function): any => {
  return persons.reduce((previous: Previous, current:Person): Previous=>{
      const key = callback(current)
      if(previous[key] === undefined){
        previous[key] = [current]
        return previous
      } else {
        previous[key]!.push(current)
        return previous
      }
  }, {})
}

describe('GroupBy', () => {
  it('should group by name', () => {
    const input: Person[] = [
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
    ]; //arrange
    const groupedByName = groupBy(input, (t: Person) => t.name) // act

    expect(groupedByName).toEqual(  {
      John: [
        {
          name: 'John',
          yearOfBirth: 1988,
          placeOfBirth: 'New York',
        },
        {
          name: 'John',
          yearOfBirth: 1980,
          placeOfBirth: 'Toronto',
        }
      ],
      Nancy: [
        {
          name: 'Nancy',
          yearOfBirth: 1963,
          placeOfBirth: 'New York',
        }
      ]
    })
  })
  it('should group by odd age', () => {
    const input: Person[] = [
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
    ]; //arrange

    const isOdd = (age: number) => age % 2 !== 0
    const byAge = (person: Person) => isOdd(person.yearOfBirth)
    const groupedByName = groupBy(input, byAge) // act

    expect(groupedByName).toEqual({
      false: [
        {
          name: 'John',
          yearOfBirth: 1988,
          placeOfBirth: 'New York',
        },
        {
          name: 'John',
          yearOfBirth: 1980,
          placeOfBirth: 'Toronto',
        }
      ],
      true: [
        {
          name: 'Nancy',
          yearOfBirth: 1963,
          placeOfBirth: 'New York',
        }
      ]
    })
  })
})
