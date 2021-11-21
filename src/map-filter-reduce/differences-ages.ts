type UserData = {
  name: string
  age: number
}

type Input = UserData[]

interface Perform {
  perform: (input: Input) => number[]
}


export class DifferenceAges implements Perform {
  perform(input: Input):number[]{
    const ages = input.map(person => person.age)
    const maxAge = Math.max(...ages)
    const minAge = Math.min(...ages)
    return[minAge, maxAge, (maxAge-minAge)]
  }
}
