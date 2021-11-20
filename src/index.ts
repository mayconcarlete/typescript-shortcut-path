type Cart = {
  name: string
  qty: number
  price: number
}

type Media = {
  count: number
  total: number
  media: number
}
const cart: Cart[]  = [
  {name: 'pen', qty: 10, price: 7.99},
  {name: 'printer', qty: 0, price: 649.50},
  {name: 'book', qty: 4, price: 27.10},
  {name: 'pencil', qty: 3, price: 5.82},
  {name: 'staples', qty: 1, price: 19.20},
]

function media(previous:Media , current: Cart): Media {
  console.log(previous)
  const aux= {
    count: previous.count += 1,
    total: previous.total + (current.price * current.qty),
  }
  console.log(previous.count)
  return {
    count: aux.count,
    total: aux.total,
    media: (previous.total + (current.price * current.qty)) / (previous.count)
  }
}

const initial:Media = {  count:0, total:0, media:0}
const result = cart.reduce(media, initial)

console.log(result)
