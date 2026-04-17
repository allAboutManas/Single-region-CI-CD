import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  endpoint: 'http://127.0.0.1:4569',
  sslEnabled: false,
  accessKeyId: '123',
  secretAccessKey: 'abc',
  s3ForcePathStyle: true
});

const result = await s3.listObjectsV2({
  Bucket: 'deployment-artifacts'
}).promise();

console.log(result.Contents);