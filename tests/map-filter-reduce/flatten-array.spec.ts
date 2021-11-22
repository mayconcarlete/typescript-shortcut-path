import {flatten} from '../../src/map-filter-reduce/flatten-array'

describe('flatten', () => {
  it('should flatten the array', () => {
    const arrays = [["1", "2", "3"],[true],[4, 5, 6]] //arrange

    const newArray = flatten(arrays) //act

    expect(newArray).toEqual(["1", "2", "3", true, 4, 5, 6]) //assert
  })
})
