import {palindrome} from '../../src/strings/palindrome'

describe('palindrome', () =>{
  it('should return true when word is a palindrome', () => {
    const word = 'racecar' // arrange

    const reversedWord = palindrome(word) // act

    expect(reversedWord).toEqual(true) // assert
  })
  it('should return false when word is not a palindrome', () => {
    const word = 'apple' // arrange

    const reversedWord = palindrome(word) // act

    expect(reversedWord).toEqual(false) // assert
  })
})
