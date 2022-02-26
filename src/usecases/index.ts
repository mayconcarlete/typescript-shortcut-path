enum Operator {
  EQ = "EQ",
  GTE = "GTE"
}
enum Types {
  STRING = "String",
  NUMBER = "Number",
  BOOLEAN = "BOOLEAN"
}
type UseCase = {
  order: Number
  threshold: any
  operation: Operator
  type: Types
  field: string
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
  field: "age"
}

const useCase2:UseCase = {
  order: 1,
  operation: Operator.EQ,
  type: Types.BOOLEAN,
  threshold: true,
  field: "isWorker"
}

const user:User = {
  age: 10,
  isWorker: false
}

function check(useCase: UseCase, user: User){
  const field = user[useCase.field as keyof User]
  switch(useCase.operation){
    case Operator.EQ: return useCase.threshold === field
  }
}

const arrayOfValidations = [useCase, useCase2]
const response = arrayOfValidations.every((casoDeUso) => {
  return check(casoDeUso, user)
})

console.log(response)
