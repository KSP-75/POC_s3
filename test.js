const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const listBuckets = async()=>{
    try{
        const buckets = await s3.listBuckets().promise();
        console.log("Buckets: " , buckets.Buckets);
    }
    catch(err){
        console.log("Error: ", err.message);
    }
};


listBuckets();