import {SumPositiveNumbers} from '../../src/map-filter-reduce/sum-positive-array'

describe('SumPositiveNumbers', () => {
  it('should sum all positive elements given an array', () => {
    const sut = new SumPositiveNumbers() //arranje

    const sum = sut.perform([1,1,2]) // act

    expect(sum).toBe(4) //assert
  })
})
