enum Operator {
  EQ = "EQ",
  GT = "GT",
  GTE = "GTE",
  LT= "LT",
  LTE = "LTE"
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

type Model = {
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

const rule2:Rule = {
  order: 1,
  operation: Operator.EQ,
  type: Types.BOOLEAN,
  threshold: true,
  property: "isWorker"
}

const userModel:Model = {
  age: 10,
  isWorker: true
}

const arrayOfRules = [rule, rule2]

interface verify {
  check():boolean
}
class Context implements verify{
  constructor(
    private readonly rules: Rule[],
    private readonly model: Model
  ){}

  check(): boolean {
    const isValid = this.rules.every(rule => {
      const property = rule.property
      const userProperty = this.model[property as keyof Model]
      const operation = rule.operation
      const threshold = rule.threshold
      switch(operation){
        case Operator.EQ: return userProperty === threshold
      }
    })
    return isValid
  }
}

const useCaseModel = new Context(
  arrayOfRules,
  userModel
)

console.log(useCaseModel.check())