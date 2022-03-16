import express, {json, Request, Response, NextFunction} from 'express'
const Joi = require("joi")

// const app = express()

// app.use(json())

// const middleware1 = (req: Request, res: Response, next: NextFunction) => {
//   return new Promise((resolve, reject) => {
//     throw new Error("throw middleware 1")
//   }).then()
//   .catch(error => {
//     next(new Error("I'm passing this error to you my friend..."))
//   })
// }

// const middleware2 = (error: Error, req: Request, res: Response, next: NextFunction) => {
//   console.log(`Hmmm: ${error}`)
//   console.log("I'm here at middleware 2")
//   return new Promise((resolve, reject) => {
//     console.log("I'm here my friend")
//   }).then(
//     data => {
//       console.log("hmm...")
//     }
//   ).catch(error => {
//     console.log("line 20")
//     console.log(error)
//   })
// }
// app.get("/", async(req: Request, res:Response, next:NextFunction) => {
//   try{

//     const schema = Joi.object({
//       userId: Joi.string().required(),
//       featureId: Joi.string().required()});

//       await schema.validate(req.query)

//       res.status(201).send({status: "created"})
//     }catch(error: any){
//       if(error.isJoi) return res.status(400).send({error: error.details[0].message})
//       return res.status(500).send({error: "Server Error"})
//     }
// })

// app.get("/test", middleware1, middleware2, async(req: Request, res: Response, next: NextFunction) => {
//   res.status(200).send({data: "hello from route"})
// })

// app.listen(4001, () => {
//   console.log("we are running at 4001 port")
// })


;
(
  async function(){
    try{
      const appeals = Joi.object({
        uid: Joi.string().required(),
        email: Joi.string().required(),

        appeals: Joi.array().items({
          b_reason: Joi.number(), // The reason why the user was blocked. See UserBlockedReasons in enums.js
          codeReason: Joi.number().valid(534,535,547,560).required(),
          description: Joi.string().required(),
          status: Joi.number().valid(569, 570, 571).required(),
          alreadySeen: Joi.boolean().required(),
          createdAt: Joi.number().required(),
          updatedAt: Joi.number().required()
        })
      })
      // const schema = Joi.object({
      //   values: Joi.number().valid(1,2,3).required()});
      //   await schema.validate({values: 4})

        // await appeals.validate({
        //   uid: "aaa",
        //   appeals:[{
        //     codeReason: 534,
        //     description: "Aaaaa"
        //   }]
        // })
        const validateArrayOfString = Joi.object({
          test: Joi.array().items(Joi.string()).required()
        })
        const arr = ["a"]
        await validateArrayOfString.validate({test: arr})
        console.log("ok")
    }catch(error){
      console.log(error)
    }
  }
)()
