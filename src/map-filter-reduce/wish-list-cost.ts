type Product = {
  title: string
  price: number
}
type ShoppingSpree = (whishList: Product[]) => number

const myReduce = (previous: number, current:Product) => previous += current.price
export const shoppingSpree:ShoppingSpree = wishList => wishList.reduce(myReduce, 0)
