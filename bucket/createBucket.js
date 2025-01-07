
const createBucket = async (bucketName) =>{
    try{
        const params = {Bucket : bucketName};
        const data = await S3.createBucket(params).promise();
        console.log("Bucket created : ", data.Location);
    }
    catch(err){
        console.log("Error creating bucket: ", err.message);
    }
};


const bucketName = "comprodls"
createBucket()