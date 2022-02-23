
export namespace Signup {
  export type Input = {
    body:{
      email: string
      password: string
      confirmPassword: string
      name: string
    }
  }
  export type Output = {
    statusCode: number,
    body: {
      email: string
      id: string
    }
  }
}

class SignupController {
  async handle(request: Signup.Input): Promise<Signup.Output>{
    return {
      statusCode: 201,
      body:{
        email: 'valid@mail.com',
        id: 'valid_id'
      }
    }
  }
}

describe('Signup controller', () => {
  it('should return 201 when user is created with success', async() => {
    const sut = new SignupController()

    const request: Input = {
      headers:{},
      params:{},
      body:{
        name: 'valid_name',
        email: 'valid@mail.com',
        password: 'pass',
        confirmPassword: 'pass'
      }
    }
    const response = await sut.handle(request)

    expect(response.statusCode).toBe(201)
    expect(response.body.email).toBe('valid@mail.com')
    expect(response.body.id).toBeTruthy()
    expect(typeof response.body.id).toBe('string')
  })
})