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
  threshold: any
  operation: Operator
  type: Types
  field: string
}

type User = {
  age: number
}

const useCase:UseCase = {
  operation: Operator.EQ,
  type: Types.NUMBER,
  threshold: 10,
  field: "age"
}

const user:User = {
  age: 10
}

function check(useCase: UseCase, user: User){
  const field = user[useCase.field as keyof User]
  switch(useCase.operation){
    case Operator.EQ: return useCase.threshold === field
  }
}

console.log(check(useCase, user))
