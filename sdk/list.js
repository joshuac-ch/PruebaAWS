const awws=require('aws-sdk')
const s3=new awws.S3()
s3.listObjectsV2({Bucket:'mikunakano'},(err,data)=>{
    if(err) console.error(err.message)
    else{
       data.Contents.forEach(ob=>console.log(ob.Key))
    }    
})