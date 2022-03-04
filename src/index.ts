import { Math } from '@/folder1/sub-folder2/sub-folder3/sum'
import express, {json, Request, Response, NextFunction} from 'express'
const Joi = require("joi")

const app = express()

app.use(json())

app.get("/", async(req: Request, res:Response, next:NextFunction) => {
  try{

    const schema = Joi.object({
      userId: Joi.string().required(),
      featureId: Joi.string().required()});

      const validatorResult = await schema.validate(req.query)

      res.status(201).send({status: 'created'})
    }catch(error: any){
      if(error.isJoi) return res.status(400).send({error:"Validation Error"})
    }
})

app.listen(4001, () => {
  console.log("we are running at 4001 port")
})