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
