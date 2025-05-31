const aws=require('aws-sdk')
const s3=new aws.S3()
const params={
        
}
s3.copyObject({
    Bucket:'nino',
    CopySource:'nino/car1/index.html',
    Key:'copia/index.html'
},(err,data)=>{
    if(err) console.log(err)
    else{
        console.log("Se copio el texto")
    }     
})
