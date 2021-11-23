import {ReverseString} from '../../src/strings/reverse'
describe('ReverseString', () => {
  it('should return a reversed string', () => {
    const word = 'abc'
    const sut = new ReverseString() // //arrange

    const str = sut.perform(word) //act

    expect(str).toEqual('cba') //assert
  })
})
