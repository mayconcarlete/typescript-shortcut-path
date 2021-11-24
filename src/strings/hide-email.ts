type HideEmail = (email: string) => string

export const hideEmail:HideEmail = email => {
  const splitEmail = email.split('@')
  const firstPartOfEmail = splitEmail[0].split('')
  const lengthToCut = firstPartOfEmail.length / 2
  const removeExtraCaracters = firstPartOfEmail.filter((char, index) => {
    if(index < lengthToCut)return char
  })
  const newEmail = `${removeExtraCaracters.join('')}...@${splitEmail[1]}`
  return newEmail
}
