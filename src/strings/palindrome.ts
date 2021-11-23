type Palindrome  = (str: string) => boolean

export const palindrome:Palindrome = (str) => str.split('').reverse().join('') === str ? true: false
