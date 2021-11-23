type Result = {
  [key:string]: number
 }

 const myReduce = (previous: Result, current: string):Result => {
   if(previous[current]){
     previous[current] +=1
     return previous
   }
   previous[current] = 1
   return previous
 }

 type MostCommon = (str: string) => string
 const mostCommon:MostCommon = str => {
   const result = str.split('').reduce(myReduce, {})
   const arr = []
   for(const [key, item] of Object.entries(result)){
     arr.push({char: key, count: item})
   }
   let count = -1
   arr.forEach(element => {if(element.count > count){
     count = element.count
   }})
   const position = arr.findIndex(item => item.count == 2)
   return arr[position].char
 }

describe('Most Common', () => {
  it('should return the most common letter', () => {
    const word = 'abcddefg' // arrange

    const mostCommonCharacter = mostCommon(word)

    expect(mostCommonCharacter).toEqual('d')
  })
})
