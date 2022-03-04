import { Math } from '@/folder1/sub-folder2/sub-folder3/sum'
import express, {json, Request, Response, NextFunction} from 'express'

const app = express()

app.use(json())

app.get("/", (req: Request, res:Response, next:NextFunction) => {
  const a = 1
  if(a===1) return res.status(404).send({error: 'user doesnt exists'})
  res.status(201).send({status: 'created'})
})

app.listen(4001, () => {
  console.log("we are running at 4001 port")
})