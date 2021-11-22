type GenerateString = (numbers: number[]) => string

const parseNumber = (previous: string, current: number): string => `${previous}${current}`

const generateString:GenerateString = numbers => numbers.reduce(parseNumber, '')

describe('Numbers into string',() =>{
  it('should return an string with all numbers', () => {
    const str = generateString([1,2,3])

    expect(str).toEqual('123')
  })
})
