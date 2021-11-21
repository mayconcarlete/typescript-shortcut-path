import {Numeronyms} from '../../src/map-filter-reduce/numeronyms'

describe("Numeronyms", () => {
  it('should return the string with abbreviate form', () => {
    const sut = new Numeronyms() //arrange
    const input = 'Every developer likes to mix kubernetes and javascript';// arrange

    const abbreviatedString = sut.perform(input) //act

    expect(abbreviatedString).toEqual('E3y d7r l3s to mix k8s and j8t')
  })
})
