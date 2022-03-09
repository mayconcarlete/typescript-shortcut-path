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

// console.log(useCaseModel.check())
type Input = {
  a: number
  b: number
}

type Output1 = {
  result: boolean
}
type Output2 = {
  response: string
}
type Output3 = {
  error: Error
}

interface TestMultipleOutputs {
  perform(input: Input): Output1 | Output2 | Output3
}

class Test implements TestMultipleOutputs{
  perform(input: Input): Output1 | Output2 | Output3 {
    if(input.a === 1) return {
      result: true
    }
    else if(input.a === 2) return {
      response: 'Hello world'
    }
    return {
      error: new Error('test')
    }
  }
}

const tests = new Test()
console.log(tests.perform({a:1, b:2}))
console.log(tests.perform({a:2, b:2}))
console.log(tests.perform({a:3, b:2}))