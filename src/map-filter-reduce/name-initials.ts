interface Perform {
  perform: (str: string) => string
}

export class InitialsName implements Perform {
  perform(str: string):string{
    return str
      .split(' ')
      .map(word => word.split('')[0])
      .join('')
      .toUpperCase()
    }

}
