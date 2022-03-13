import express, {json, Request, Response, NextFunction} from 'express'
const Joi = require("joi")

const app = express()

app.use(json())

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

app.listen(4001, () => {
  console.log("we are running at 4001 port")
})