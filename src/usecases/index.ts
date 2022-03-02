enum Operator {
  EQ = "EQ",
  GTE = "GTE"
}
enum Types {
  STRING = "string",
  NUMBER = "number",
  BOOLEAN = "boolean"
}
type Rule = {
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

const rule:Rule = {
  order: 0,
  operation: Operator.EQ,
  type: Types.NUMBER,
  threshold: 10,
  property: "age"
}

const useCase2:Rule = {
  order: 1,
  operation: Operator.EQ,
  type: Types.BOOLEAN,
  threshold: true,
  property: "isWorker"
}

const user:User = {
  age: 10,
  isWorker: true
}

function check(useCase: Rule, user: User){
  const field = user[useCase.property as keyof User]
  switch(useCase.operation){
    case Operator.EQ: return useCase.threshold === field
  }
}

const arrayOfValidations = [rule, useCase2]
const response = arrayOfValidations.every((casoDeUso) => {
  return check(casoDeUso, user)
})

// console.log(response)

interface verify {
  check():boolean
}
class UseCaseModel implements verify{
  constructor(
    private readonly useCase: Rule[],
    private readonly user: User
  ){}

  check(): boolean {
    const isValid = this.useCase.every(useCase => {
      const property = useCase.property
      const userProperty = this.user[property as keyof User]
      const operation = useCase.operation
      const threshold = useCase.threshold
      switch(operation){
        case Operator.EQ: return userProperty === threshold
      }
    })
    return isValid
  }
}

const useCaseModel = new UseCaseModel(
  arrayOfValidations,
  user
)

console.log(useCaseModel.check())