interface Perform{
  perform:(numbers:number[]) => number[]
}

type Input = number[]
type Output = number[]

export class SquareArray implements Perform{
  perform(numbers: Input):Output{
    return numbers.map( number => number * number)
  }
}
