import AWS from "aws-sdk"
import Athena, { AthenaExpress } from "athena-express"

const awsCredentials = {
  region: "us-west-2",
 	accessKeyId: "",
 	secretAccessKey: ""
}

AWS.config.update(awsCredentials)

const athenaExpressConfig = {aws:AWS, formatJson: true}

const athenaExpress = new AthenaExpress(athenaExpressConfig)
import express, {json} from "express"
interface QueryResult extends Athena.QueryObjectInterface {

}
const app = express()
app.use(json())
app.get("/", async(req, res) =>{
  console.log("entreei")
  let myQuery = "select aips from mistplay_transform.user_fraud_stats limit 1"
  // let myQuery = "DESCRIBE mistplay_transform.user_fraud_stats"

  try{
    const result = await athenaExpress.query(myQuery)
    const response = result.Items!.map(element => {
      Object.keys(element).forEach(key => console.log(key))

    })
    res.send(result)
  }catch(error){
    console.log(error)
  }
})

app.listen(4001, () => console.log("we are on fire"))