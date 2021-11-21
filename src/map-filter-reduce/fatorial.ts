export function fatorial(n:number, sum:number):number{
  if(n < 0){
    return -1
  }
  else if (n===0){
    return 1
  }
  return fatorial(n-1, sum) * n
}
