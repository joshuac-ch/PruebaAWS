const AWS=require('aws-sdk')
const s3=new AWS.S3()
const parametros={
    Bucket:'nino',
    Key:'text.txt',
    Body:"hola mundo"
}
s3.upload(parametros,function(err,data){
    if(err){
        console.log("err:",err)
    }else{
        console.log(data)
    }
})