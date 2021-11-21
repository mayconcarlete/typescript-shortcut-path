interface Perform {
  perform:(str: string) => string
}

export class Numeronyms implements Perform{
  perform(str: string):string{
    return str
      .split(' ')
      .map(word => {
        if(word.length > 4){
          const firstLetter = word[0]
          const lastLetter = word[word.length -1]
          const difference = word.length - 2
          return `${firstLetter}${difference}${lastLetter}`
        }
        return word
      })
      .join(' ')
  };
}

describe("Numeronyms", () => {
  it('should return the string with abbreviate form', () => {
    const sut = new Numeronyms() //arrange
    const input = 'Every developer likes to mix kubernetes and javascript';// arrange

    const abbreviatedString = sut.perform(input) //act

    expect(abbreviatedString).toEqual('E3y d7r l3s to mix k8s and j8t')
  })
})
