//elminar buckets
const aws=require('aws-sdk')
const s3=new aws.S3()
const params={
    Bucket:"nino",
    Key:'index.txt'
}
s3.deleteObject(params,(err,data)=>{
    if(err) console.log(err)
    else{
        console.log(data)
    }    
})