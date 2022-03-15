import express, {json, Request, Response, NextFunction} from 'express'
const Joi = require("joi")

const app = express()

app.use(json())

const middleware1 = (req: Request, res: Response, next: NextFunction) => {
  return new Promise((resolve, reject) => {
    throw new Error("hello my friend")
  }).then().catch(error => {
    next(new Error("I'm passing this error to you my friend..."))
  })
}

const middleware2 = (req: Request, res: Response, next: NextFunction) => {
  return new Promise((resolve, reject) => {
    console.log("I'm here my friend")
    next()
  }).then().catch(error => {
    console.log("line 20")
    console.log(error)
  })
}
app.get("/", async(req: Request, res:Response, next:NextFunction) => {
  try{

    const schema = Joi.object({
      userId: Joi.string().required(),
      featureId: Joi.string().required()});

      await schema.validate(req.query)

      res.status(201).send({status: "created"})
    }catch(error: any){
      if(error.isJoi) return res.status(400).send({error: error.details[0].message})
      return res.status(500).send({error: "Server Error"})
    }
})

app.get("/test", middleware2, middleware1, async(req: Request, res: Response, next: NextFunction) => {
  console.log("I'm in the route")
  res.status(200).send({data: "hello from route"})
})

app.listen(4001, () => {
  console.log("we are running at 4001 port")
})