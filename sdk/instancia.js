const aws=require('aws-sdk')
aws.config.update({region:'us-east-1'})
const s3=new aws.EC2()
const params={
    ImageId:"ami-084568db4383264d4",
    InstanceType: 't2.micro',
    MinCount:1,
    MaxCount:1,
    KeyName:"claveninno",
    TagSpecifications:[
        {
            ResourceType:'instance',
            Tags:[{Key:"Proyecto",Value:"DemoSDK"}]
        }
    ]
}
s3.runInstances(params,(err,data)=>{
    if(err) console.log(err)
    else{
        const instancia=data.Instances[0].InstanceId
        console.log("Instancia creada id: ",instancia)
    }    
})