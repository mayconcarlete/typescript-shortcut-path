type RemoveChars = (str: string, chars: string[]) => string

export const removeChars:RemoveChars = (str, chars) =>{
  const regexStr = chars.join('|')
  const regexp = new RegExp(regexStr, 'gi')
  const newWord = str.replace(regexp, '')
  console.log(newWord)
  return newWord
}
  // str
  //   .split('')
  //   .filter( char => {if(chars.indexOf(char) === -1) return char})
  //   .join('')
