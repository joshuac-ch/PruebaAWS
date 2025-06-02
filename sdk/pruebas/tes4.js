const aws=require('aws-sdk')
const s3=new aws.S3()
const params={
 
}
s3.listObjectsV2({Bucket:'nino'},(err,data)=>{
    if(err) console.log(err)
    else{
        data.Contents.forEach((ob)=>console.log(ob.Key))
    }    
})