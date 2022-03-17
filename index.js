

const str = "[com.wsomacp, com.facebook.orca, com.mistplay.mistplay, com.facebook.appmanager, com.microsoft.office.word, com.crazylabs.amaze.game, org.simalliance.openmobileapi.service, com.gd.mobicore.pa, com.amanotes.beathopper, service.odtcfactory.sec.com.odtcfactoryservice, com.osp.app.signin, com.dsi.ant.server, com.youmusic.magictiles, com.dsi.ant.service.socket, com.trustonic.tuiservice, com.microsoft.office.powerpoint, com.skype.raider, com.craftgames.plntcrft, com.microsoft.office.onenote, com.enhance.gameservice, com.dropbox.android, com.facebook.system, com.wssyncmldm, de.axelspringer.yana.zeropage, com.aero.sniperanimalshooting3d, com.microsoft.office.excel, com.facebook.katana, com.skms.android.agent, flipboard.boxer.app, tv.peel.app, com.wssnps, com.msi.logogame, com.microsoft.skydrive, com.mobeam.barcodeService, com.policydm, com.dsi.ant.plugins.antplus, com.dsi.ant.sample.acquirechannels]"
const str2 = "[com.wsomacp, com.facebook.orca, com.mistplay.mistplay, com.facebook.appmanager, com.microsoft.office.word, com.crazylabs.amaze.game, org.simalliance.openmobileapi.service, com.gd.mobicore.pa, com.amanotes.beathopper, service.odtcfactory.sec.com.odtcfactoryservice, com.osp.app.signin, com.dsi.ant.server, com.youmusic.magictiles, com.dsi.ant.service.socket, com.trustonic.tuiservice, com.microsoft.office.powerpoint, com.skype.raider, com.craftgames.plntcrft, com.microsoft.office.onenote, com.enhance.gameservice, com.dropbox.android, com.facebook.system, com.wssyncmldm, de.axelspringer.yana.zeropage, com.aero.sniperanimalshooting3d, com.microsoft.office.excel, com.facebook.katana, com.skms.android.agent, flipboard.boxer.app, tv.peel.app, com.wssnps, com.msi.logogame, com.microsoft.skydrive, com.mobeam.barcodeService, com.policydm, com.dsi.ant.plugins.antplus, com.dsi.ant.sample.acquirechannels]"
// str.replace(" ", "").split(",")
// str[0].split("[", "")

// console.log(str)

// console.log({data: str2.replace("[", "").replace("]","").split(",").map(el => el.trim())})
const strArrayToArrayStr = (str) => str.replace("[", "").replace("]","").split(",").map(el => el.trim())
// console.log(strArrayToArrayStr("[samsung_SM-G925F]"))
// const num = Number("1")
// console.log(num)
// console.log("1")
// const handleNull = strArrayToArrayStr("[null]")
// console.log("null")


// const AWS = require("aws-sdk")
// const AthenaExpress = require("athena-express")
// const express = require("express")



// AWS.config.update(awsCredentials)

// const athenaExpressConfig = {aws:AWS, formatJson: true}

// const athenaExpress = new AthenaExpress(athenaExpressConfig)

// let myQuery = "select faceVerified from mistplay_transform.user_fraud_stats where faceVerified is not NULL limit 1"
// ;
// (
//     async() => {
//         const result = await athenaExpress.query(myQuery)
//         console.log(result)
//       }
//     )()

const user =   {
  uid: '513d7123-7041-4d0d-84f2-4316dc588432',
  tue: 676,
  ltc: 0,
  ltv: 580,
  tgp: '4',
  createdat: '2022-01-25 05:38:23.318',
  updatedat: '2022-02-25 23:43:41.783',
  countries: '[CA]',
  email: 'rylanpatrick99@gmail.com',
  aips: '[174.90.223.76]',
  fdu: 'samsung_SM-A520W',
  ldu: 'samsung_SM-A520W',
  n_dids: '1',
  n_bids: '1',
  n_devices: '1',
  n_bids_recognized_af: '1',
  user_media_sources: '[organic]',
  last_media_source: 'organic',
  n_users_sharing_ip: '1',
  n_banned_users_sharing_ip: '0',
  active_days_span: '31',
  percent_time_played: 0.24,
  main_gameplay_hour: '22',
  level_ups_that_hour: '4',
  all_breasons: '[-1]',
  fraud_countries: '[no-br-geos]',
  sr: '[5]',
  vesper_score: 0.024662354961037636,
  vesper_prediction_date: '2022-01-25',
  ipqs_fraud_score: 100,
  ipqs_bot_status: 1,
  ipqs_isabuse: 1,
  ipqs_isemulateddevice: 1,
  ipqs_countries: '[CA]',
  rejected_installs: '0',
  avg_game_d1_ret: 0,
  sum_game_d0_time_hour: 1.168911388888889,
  game_installs_sources: '[organic]',
  devices: '[samsung_SM-A520W]',
  installsources: '[com.android.vending]',
  sim_countries: '[CA]',
  level_1_apps: '[null]',
  level_4_apps: '[null]',
  all_apps: '[com.candywriter.bitlife, com.TwinCrab.Motorpolia, com.kiloo.subwaysurf, com.skms.android.agent, com.microsoft.office.excel, com.trustonic.tuiservice, com.spotify.music, com.disney.disneyplus, com.osp.app.signin, com.sphero.bb8, com.eightsec.Shootero, com.microsoft.office.powerpoint, com.BallGames.Woodturning, com.knox.vpn.proxyhandler, com.nianticlabs.pokemongo, com.bitstrips.imoji, com.policydm, io.voodoo.paper2, com.enhance.gameservice, com.facebook.talk, com.auxbrain.egginc, com.microsoft.skydrive, com.snapchat.android, com.dsi.ant.service.socket, com.sparkistic.photowear, com.hiya.star, com.powerschool.portal, com.yoku.marumovie, com.funny.technology.dimensional, com.wssyncmldm, com.discord, flipboard.boxer.app, com.gd.mobicore.pa, com.time.trigger, com.cateater.stopmotionstudio, com.sem.factoryapp, com.innersloth.spacemafia, io.voodoo.paperio, com.dsi.ant.sample.acquirechannels, com.sonypicturestelevision.qbert, org.simalliance.openmobileapi.service, com.facebook.appmanager, com.facebook.services, com.microsoft.office.word, com.mobeam.barcodeService, com.amazon.mShop.android, com.wsomacp, com.zhiliaoapp.musically, com.stealthgame.master, com.facebook.system, com.Ijnbjh.ghostcleaner, com.roblox.client, com.wssnps, com.facebook.katana, com.dsi.ant.plugins.antplus, com.dsi.ant.server, com.playgendary.tom, com.skype.raider, com.mistplay.mistplay]'
}

const strArrayToArrayStrNumber = (str) => str.replace("[", "").replace("]","").split(",").map(el => el.trim()).map(num => Number(num))

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

const AWS = require("aws-sdk")
const AthenaExpress = require("athena-express")
const express = require("express")

const awsCredentials = {
  region: "us-west-2",
}

AWS.config.update(awsCredentials)

const athenaExpressConfig = {aws:AWS, formatJson: true}

const athenaExpress = new AthenaExpress(athenaExpressConfig)
const app = express()

app.use(express.json())
app.get("/", async(req, res) =>{
  console.log("entreei")
  let myQuery = "select * from mistplay_transform.user_fraud_stats limit 10"

  // let myQuery = "DESCRIBE mistplay_transform.user_fraud_stats"
  try{
    const result = await athenaExpress.query(myQuery)
    const data = result.Items.map(data => parseData(data))

    res.send(data)
  }catch(error){
    console.log(error)
  }
})

app.listen(4001, () => console.log("we are on fire"))