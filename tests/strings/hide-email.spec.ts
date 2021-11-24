import {hideEmail} from '../../src/strings/hide-email'

describe('Hide email', () => {
  it('should hide half of given email', () => {
    const email = 'maycon.carlete@gmail.com'

    const hiddenEmail = hideEmail(email)

    expect(hiddenEmail).toEqual('maycon....@gmail.com')
  })
})
