const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const BUCKET_NAME = 'give-for-child';
const IAM_USER_KEY = 'AKIAJROEPUJ26JSNWGBQ';
const IAM_USER_SECRET = '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';
const url = 'https://' + BUCKET_NAME + '.s3.amazonaws.com/';

exports.uploadToS3 = async (file) => {
    const file_name = uuidv4() + '.jpg';
    let s3bucket = new AWS.S3({
        accessKeyId: IAM_USER_KEY,
        secretAccessKey: IAM_USER_SECRET,
        Bucket: BUCKET_NAME,
    });
    var params = {
        Bucket: BUCKET_NAME,
        Key: file_name,
        Body: file.data,
        ACL: 'public-read',
    };
    return new Promise(function (resolve, reject) {
        s3bucket.upload(params, function (err, data) {
            if (err) {
                throw err;
            } else {
                resolve(data.Location);
            }
        });
    });
};
