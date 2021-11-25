import {removeFirstWord} from '../../src/strings/remove-string'
describe('Remove First Char', () => {
  it('should remove first char with js function', () => {
    const word = 'Maycon Carlete' //arrange

    const newWord = removeFirstWord(word) //act

    expect(newWord).toEqual('aycon Carlete')
  })
})
