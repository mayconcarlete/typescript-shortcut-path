enum Operator {
  EQ = "EQ",
  GTE = "GTE"
}
enum Types {
  STRING = "string",
  NUMBER = "number",
  BOOLEAN = "boolean"
}
type UseCase = {
  order: Number
  threshold: any
  operation: Operator
  type: Types
  property: string
}

type User = {
  age: number
  isWorker: boolean
}

const useCase:UseCase = {
  order: 0,
  operation: Operator.EQ,
  type: Types.NUMBER,
  threshold: 10,
  property: "age"
}

const useCase2:UseCase = {
  order: 1,
  operation: Operator.EQ,
  type: Types.BOOLEAN,
  threshold: true,
  property: "isWorker"
}

const user:User = {
  age: 10,
  isWorker: false
}

function check(useCase: UseCase, user: User){
  const field = user[useCase.property as keyof User]
  switch(useCase.operation){
    case Operator.EQ: return useCase.threshold === field
  }
}

const arrayOfValidations = [useCase, useCase2]
const response = arrayOfValidations.every((casoDeUso) => {
  return check(casoDeUso, user)
})

console.log(response)

interface verify {
  check():boolean
}
class UseCaseModel implements verify{
  constructor(
    private readonly useCase: UseCase
  ){}

  check(): boolean {
    const property = this.useCase.property
    const operation = this.useCase.operation
    const threshold = this.useCase.threshold
    const type = this.useCase.type
    switch(operation){
      case Operator.EQ: return property === th
      case Operator.GTE:
    }
    return false
  }
}