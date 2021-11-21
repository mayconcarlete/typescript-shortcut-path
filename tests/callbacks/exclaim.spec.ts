import {exclaim} from '../../src/callbacks/exclaim'

describe('Exclaim', () => {
  it('should exclaim once when function is called once', () => {
    const response = exclaim('Maycon') // arrange & act

    expect(response).toEqual('Maycon!') // assert
  })

  it('should exclaim twice when function is called twice', () => {
    const response = exclaim(exclaim('Maycon'))

    expect(response).toEqual('Maycon!!')
  })
})
