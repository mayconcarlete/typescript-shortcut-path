import {DifferenceAges} from '../../src/map-filter-reduce/differences-ages'

describe('DifferenceAges', () => {
  it('should return the youngest, oldest and the difference of ages betwee them', () =>{
    const sut = new DifferenceAges() //arrange
    const input = [
      {
        name: 'John',
        age: 13
      },
      {
        name: 'Mark',
        age: 56,
      },
      {
        name: 'Rachel',
        age: 45,
      },
      {
        name: 'Nate',
        age: 67,
      },
      {
        name: 'Jeniffer',
        age: 65,
      }
    ];

    const result = sut.perform(input) //act

    expect(result).toEqual([13, 67, 54]) //assert
  })
})
