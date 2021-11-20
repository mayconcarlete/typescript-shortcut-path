import {SquareArray} from '../../src/map-filter-reduce/square-array'

describe('SquareArray', () => {
  it('should square all elements given an array', () => {
    const sut = new SquareArray()

    const squaredArray = sut.perform([1, 2, 3, 4, 5])

    expect(squaredArray).toEqual([1, 4, 9, 16, 25])
  })
})
