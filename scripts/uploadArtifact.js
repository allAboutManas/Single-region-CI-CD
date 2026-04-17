import AWS from 'aws-sdk';
import fs from 'fs';

const s3 = new AWS.S3({
  endpoint: 'http://127.0.0.1:4569',
  sslEnabled: false,
  accessKeyId: '123',
  secretAccessKey: 'abc',
  s3ForcePathStyle: true
});

const fileContent = fs.readFileSync('./build/app.tar.gz');

const params = {
  Bucket: 'deployment-artifacts',
  Key: 'app.tar.gz',
  Body: fileContent
};

s3.upload(params, (err, data) => {
  if (err) {
    console.error('Upload failed:', err);
    process.exit(1);
  }

  console.log('Upload success:', data.Location);
});