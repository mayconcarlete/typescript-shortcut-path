interface Perform{
  perform:(numbers: number[]) => number
}

type Input = number[]
type Output = number

export class SumPositiveNumbers implements Perform{
  perform(numbers: Input):Output{
    return numbers
      .filter(number => number > 0)
      .reduce((previous:number, current:number) => previous + current)
  }
}
