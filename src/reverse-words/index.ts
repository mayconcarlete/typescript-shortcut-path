
// Complete the function that accepts a string parameter, and reverses each word in the string.
// All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

export interface Perform {
  perform: (str: string) => string
}

class ReverseString implements Perform {
  perform (str: string): string {
    const words: string[][] = this.createArrayOfCharacters(str)
    const reverseWords = words.map(newWord => this.reverseWord(newWord))
    return reverseWords.join(' ')
  }

  createArrayOfCharacters (str: string): string[][] {
    return str
      .split(' ')
      .map(word => word.split(''))
  }

  reverseWord (str: string[]): string {
    let i = 0
    let j = (str.length - 1)
    console.log(str)
    while (i < j) {
      const aux: string = str[i]
      str[i] = str[j]
      str[j] = aux
      i++
      j--
    }
    return str.join('')
  }
}

const sut = new ReverseString().perform('maycon carlete')
console.log(sut)

// Outra solução
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class ReverseStringTwo implements Perform {
  perform (str: string): string {
    return str
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ')
  }
}
