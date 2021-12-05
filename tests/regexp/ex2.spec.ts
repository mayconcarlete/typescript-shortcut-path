// 2. Write a Python program that matches a string that has an a followed by zero or more b's.
import {Exercise2} from '../../src/regexp/ex2'


describe('RegexValidator', () =>{
  it('should return true if validation succeeds given a valid string', ()=>{
    const str1 = 'abc'
    const str2 = 'ac'
    const sut = new Exercise2()

    expect(sut.validate(str1)).toBeTruthy() // assert
    expect(sut.validate(str2)).toBeTruthy() // assert

  })

  it('should return false if validation fails given a invalid string', () => {
    const str = 'dfg'
    const sut = new Exercise2()
    // arrange

    const isValidString = sut.validate(str) // act

    expect(isValidString).toBeFalsy() // assert
  })
})
