const aws=require('aws-sdk')
const s3=new aws.S3()
const params={
    Bucket:'nino',
    Key:'car2/'
}
s3.copyObject({
    Bucket:'nino',
    CopySource:`nino/car1/index.html`,
    Key:'car2/index.html'
},(err,data)=>{
    if(err) console.log(err)
    else{
        console.log(data)
    }    
})
