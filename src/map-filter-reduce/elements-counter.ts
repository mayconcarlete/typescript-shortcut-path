type counterObject = {
  [key: string]: number
}

function myReduce(previous:counterObject, current: string): counterObject{
  if(previous[current] === undefined){
    return {...previous, [current]: 1}
  }
  const counter = previous[current] + 1
  return {...previous, [current]: counter}

}


export const elementsCounter = (input: any[]) => input.flat(Infinity).reduce(myReduce, {})
