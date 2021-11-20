import {InitialsName} from '../../src/map-filter-reduce/name-initials'

describe('InitialsName', () => {
  it('should return the initials of the name', () => {
    const sut = new InitialsName() // arange

    const initials = sut.perform('Steven Wang') //act

    expect(initials).toEqual('SW') //assert
  })
})
