import {removeChars} from '../../src/strings/remove-characters'

describe('RemoveCharacters', () =>{
  it('should remove all characters of string given a list of chars', () =>{
    const str = 'I am an example string' // arrange
    const chars = ["a", "x"] // arrange

    const strWithOutChars = removeChars(str, chars) // act

    expect(strWithOutChars).toEqual('I m n emple string') // assert
  })
})
