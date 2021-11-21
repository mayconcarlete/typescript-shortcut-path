const isOdd = (num: number) => num % 2 !== 0

type AtLeastTwo = (param: number[], callable: Function) => boolean

const atLeastTwo:AtLeastTwo = (param, callable) => {
  const result = param
    .map( num => callable(num))
    .filter(result => result === true)
  return result.length >= 3 ? true: false
}

describe('At least two elements', () =>{
  it('it should return true if at least two elements passed result as true', () => {
    const firstTest = atLeastTwo([1,2,3,4,5], isOdd) //arrange + act
    expect(firstTest).toBeTruthy()

    const secondTest = atLeastTwo([2,4,6], isOdd) //arrange + act
    expect(secondTest).toBeFalsy()

    const thirdTest = atLeastTwo([1,2,3,4,5], (t:number) => t >= 3) //arrange + act
    expect(thirdTest).toBeTruthy()
  })
})
