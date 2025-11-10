
const AWS=require('aws-sdk')
const fs=require('fs')
const path=require('path')
const s3 = new AWS.S3();
const filepath=path.join(__dirname,'public','index.html')
const filecontent=fs.readFileSync(filepath)
const params = {
  Bucket: 'nino',
  Key: 'index.html',
  Body: filecontent
};

s3.putObject(params, function(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log('Archivo subido con éxito:', data);
  }
});
