// const sr =new RegExp(chars.join('|'), 'gi',)

type RemoveChars = (str: string, chars: string[]) => string

export const removeChars:RemoveChars = (str, chars) =>
  str
    .split('')
    .filter( char => {if(chars.indexOf(char) === -1) return char})
    .join('')
