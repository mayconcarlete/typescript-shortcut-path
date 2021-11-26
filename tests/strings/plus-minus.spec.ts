type Response2 = {
  positive: number
  negative: number
  zero: number
}

type Result = Error | Response2

class SizeError extends Error {
  constructor(str: string){
    super()
    this.message = str
    this.name = 'SizeError'
  }
}

interface Perform {
  perform(arr: number[]): Result
}

class PlusMinus implements Perform {
  perform(arr: number[]): Result {
    const error = this.validate(arr)
    if(error) return error
    return {
      positive: 1,
      negative: 2,
      zero: 1
    }
  }
  private validate(arr:number[]):Error | undefined{
    if(arr.length > 100) return new SizeError('The length of array must be lower than 100')
    for(let i=0; i< arr.length; i++){
      if(arr[i] < -100 || arr[i]>100){
        return new RangeError('Value must be between -100 and 100')
      }
    }
  }
}

describe('Plus Minus', () => {
  it('should return an error if length of array is higher than 100', () => {
    const n = 101
    const arr = []
    for(let i=0; i<n; i++) {
      arr.push(i)
    }
    const sut = new PlusMinus()
    //arrange

    const response = sut.perform(arr)

    expect(response).toEqual(new SizeError('The length of array must be lower than 100')) //assert
  })

  it('should return a RangeError if some value of array is lower than -100', () => {
    const n = 5
    const arr = []
    for(let i=0; i<n; i++){
      arr.push(i)
    }
    arr[3] = -101
    const sut = new PlusMinus() //system under test
    //arrange

    const response = sut.perform(arr) //act

    expect(response).toEqual(new RangeError('Value must be between -100 and 100')) //assert
  })

  it('should return a RangeError if some value of array is higher than 100', () => {
    const n = 5
    const arr = []
    for(let i=0; i<n; i++){
      arr.push(i)
    }
    arr[3] = 101
    const sut = new PlusMinus()
    //arrange

    const response = sut.perform(arr) //act

    expect(response).toEqual(new RangeError('Value must be between -100 and 100')) //assert
  })
})
