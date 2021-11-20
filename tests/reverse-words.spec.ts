export interface Perform {
    perform: (str: string) => string
  }

  class ReverseString implements Perform {
    perform (str: string): string {
      return str
        .split(' ')
        .map(word => word.split(''))
        .map(wordAsArray => {
          let i = 0
          let j = wordAsArray.length
          while (i < j) {
            const aux: string = wordAsArray[i]
            wordAsArray[i] = wordAsArray[j]
            wordAsArray[j] = aux
            i++
            j--
          }
          return wordAsArray.join('')
        }).join(' ')
    }
  }

describe('ReverseString', () => {
    it('should return a reverse string', () => {
        const sut = new ReverseString()

        expect(sut.perform('The quick brown fox jumps over the lazy dog.')).toEqual('ehT kciuq nworb xof spmuj revo eht yzal .god')
        expect(sut.perform('aaple')).toEqual('elpaa')
        expect(sut.perform('a b c d')).toEqual('a b c d')
        expect(sut.perform('double  spaced  words')).toEqual('elbuod  decaps  sdrow')
    })
})
