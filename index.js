




const AWS = require("aws-sdk")
const AthenaExpress = require("athena-express")
const express = require("express")
const app = express()

const awsCredentials = {
  region: "us-west-2",
}

const strArrayToArrayStr = (str) => str.replace("[", "").replace("]","").split(",").map(el => el.trim()).filter(el => el !== 'null' )
const strArrayToArrayStrNumber = (str) => str.replace("[", "").replace("]","").split(",").map(el => el.trim()).map(num => Number(num))

AWS.config.update(awsCredentials)

const athenaExpressConfig = {aws:AWS, formatJson: true}

const athenaExpress = new AthenaExpress(athenaExpressConfig)


const parsedUser = (user) => ({
    uid: String(user.uid),
    email: String(user.email),

    appeals:[{
          b_reason: Number(user.b_reason),
          sr: strArrayToArrayStrNumber(user.sr),
          aips: strArrayToArrayStr(user.aips),
          spend: Number(user.spend),
          faceVerified: Boolean(user.faceVerified),
          active_days_span: Number(user.active_days_span),
          tgp: Number(user.tgp),
          total_of_apps: strArrayToArrayStrNumber(user.all_apps).length,
          n_dids: Number(user.n_dids),
          user_media_sources: strArrayToArrayStr(user.user_media_sources),
          sc: String(user.sc),
          ipqs_fraud_score: Number(user.ipqs_fraud_score),
      description: Joi.string().required(),
      status: Joi.number().valid(569, 570, 571).required().default(569),
      judgment: Joi.string(),
      codeReason: Joi.number().valid(534, 535, 547, 560).required(),
      alreadySeen: Joi.boolean().required(),
      createdAt: Joi.number(),
      updatedAt: Joi.number(),
  }],
})
const parseData = (user) => ({
  b_reason: user.b_reason ? Number(user.b_reason): null,
  sr: user.sr ? strArrayToArrayStrNumber(user.sr): null,
  aips: user.aips ? strArrayToArrayStr(user.aips): null,
  spend: user.spend? Number(user.spend): null,
  faceVerified: user.faceVerified? Boolean(user.faceVerified): null,
  active_days_span: user.active_days_span? Number(user.active_days_span): null,
  tgp: user.tgp? Number(user.tgp): null,
  total_of_apps: user.all_apps ? strArrayToArrayStrNumber(user.all_apps).length: null,
  n_dids:user.n_dids? Number(user.n_dids): null,
  user_media_sources:user.user_media_sources? strArrayToArrayStr(user.user_media_sources): null,
  sc: user.sc ? String(user.sc): null,
  ipqs_fraud_score:user.ipqs_fraud_score? Number(user.ipqs_fraud_score): null,
})



app.use(express.json())
app.get("/", async(req, res) =>{
  try{
    // const result = await athenaExpress.query(myQuery)
    // const data = result.Items.map(data => parseData(data))

    res.send({data: `${req.protocol}://${req.get("host")}${req.url}`})
  }catch(error){
    console.log(error)
  }
})

app.listen(4001, () => console.log("we are on fire"))
