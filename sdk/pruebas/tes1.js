//crear un bucket
const aws =require('aws-sdk')
const s3=new aws.S3()
const params={
    Bucket:"nino",
    Key:'index.txt',
    Body:"hola mundo"
}
s3.upload(params,(err,data)=>{
    if(err) console.log(err)
    else{
        console.log(data)
    }    
})