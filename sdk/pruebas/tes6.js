//Crear link a pagina nino
const aws=require('aws-sdk')
const s3=new aws.S3()
url=s3.getSignedUrl('getObject',{
    Bucket:'nino',
    Key:'car1/index.html',
    Expires:60
})
console.log(url)