import {elementsCounter} from '../../src/map-filter-reduce/elements-counter'

describe('ElementsCounter', () => {
  it('should return the count of each element given an array', () =>{
    const input = [['a', 'b', 'c'],['c', 'd', 'f'],['d', 'f', 'g'],];

    const result = elementsCounter(input) //act

    expect(result).toEqual({a: 1,b: 1,c: 2,d: 2,f: 2,g: 1,}) //assert
  })
})
