import {DoubleChars} from '../../src/callbacks/double-chars'

describe('DoubleChars', () => {
  it('should double the char of a given a string', () => {
    const sut = new DoubleChars() // arrange

    const abc = sut.perform('abc') //act
    expect(abc).toEqual('aabbcc') //assert

    const adrian = sut.perform('Adrian')
    expect(adrian).toEqual('AAddrriiaann')
  })
})
