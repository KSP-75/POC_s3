const AWS = require('aws-sdk');
const fs = require('fs');
const s3 = new AWS.S3();

const bucket = 'comprodls';
const key = 'example.my.compro';

const listBuckets = async()=>{
    try{
        const data = await s3.listBuckets().promise();
        console.log("Buckets: " , data.Buckets);
    }
    catch(err){
        console.log("Error listing buckets: " , err.message);
    }
}

// listBuckets();


const listObjects = async (bucketName) =>{
    try{
        const params = {Bucket : bucketName};
        const data = await s3.listObjectsV2(params).promise();
        console.log("Objects : " ,data.Contents);
    }
    catch(err){
        console.log("Error listing objects : " , err.message);
    }
};

// listObjects("comprodls");

// const file = require('./test.txt');
const uploadFile = async ()=>{
    const params = {
        Bucket : bucket,
        Key : key,
        Body : 'haaaleluiaaaaaaa, file upload hone lagi',
    };

    try{
        const data = await s3.upload(params).promise();
        console.log(`File uploaded successfully. ${data.Location}`);
    }
    catch(err){
        console.log('Error uploading file : ',  err.message);
    }
};

// uploadFile();


const downloadFile = async ()=>{
    const params = {
        Bucket : bucket,
        Key : key,
    };

    try{
        const data = await s3.getObject(params).promise();
        fs.writeFileSync('downloaded-file.txt', data.Body);
        console.log('File donwloaded successfully. ', data);
        console.log("File content:", data.Body.toString());
    }
    catch(err){
        console.log("Error downloading file : " , err.message)
    }
};

// downloadFile();


const deleteObject = async ()=>{
    const params = {
        Bucket : bucket,
        Key : key,
    };
    try{
        await s3.deleteObject(params).promise();
        console.log("Object deleted : " , key);
    }
    catch(err){
        console.log("Error deleting object : " , err);
    }
}

// deleteObject();