const aws=require('aws-sdk')
const s3=new aws.S3()
const url=s3.getSignedUrl('getObject',{
    Bucket:'ninonakano',
    Key:'index.html',
    Expires:60
})
console.log(url)


