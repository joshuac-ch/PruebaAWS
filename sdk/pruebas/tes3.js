//recorre un bucker

const aws=require('aws-sdk')
const s3=new aws.S3()
const paranms={
    Bucket:'nino',
    Key:'car1/index.html'
}
s3.getObject({Bucket:'nino',Key:'car1/index.html'},(err,data)=>{
    if(err) console.log(err)
    else{
        console.log(data.Body.toString())
    }})