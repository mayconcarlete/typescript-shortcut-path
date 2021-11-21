import oddCalculator from '../../src/callbacks/odd'

describe('OddNumber', () => {
  it('should return true if number is odd', () => {
    const isOdd = oddCalculator(1) //arange/act

    expect(isOdd).toBeTruthy()
  })

  it('should return false if number isnt odd', () => {
    const isOdd = oddCalculator(2) //arange/act

    expect(isOdd).toBeFalsy()
  })
})
