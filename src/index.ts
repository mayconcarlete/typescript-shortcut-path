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

  try{

    res.send({data: "hello world"})

  }catch(error){
    console.log(error)
  }
})

app.listen(4001, () => console.log("we are on fire"))