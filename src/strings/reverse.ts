interface Perform {
  perform:(str: string) => string
}

export class ReverseString implements Perform {
  perform(str: string): string{
    return str.split('').reverse().join('')
  }
}
