import {fatorial} from '../../src/map-filter-reduce/fatorial'

describe('Fatorial', () => {
  it('should return the fatorial given a number', () => {
    const result = fatorial(6,1)

    expect(result).toBe(720)
  })
})
