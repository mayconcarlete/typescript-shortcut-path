import {shoppingSpree} from '../../src/map-filter-reduce/wish-list-cost'

describe('shoppingSpree', () => {
  it('should return the cost of a wishlist', () => {
    const wishList = [
      { title: "Tesla Model S", price: 90000 },
      { title: "4 carat diamond ring", price: 45000 },
      { title: "Fancy hacky Sack", price: 5 },
      { title: "Gold fidgit spinner", price: 2000 },
      { title: "A second Tesla Model S", price: 90000 }
    ]; //arrange

    const cost = shoppingSpree(wishList) // act

    expect(cost).toBe(227005) //assert
  })
})
