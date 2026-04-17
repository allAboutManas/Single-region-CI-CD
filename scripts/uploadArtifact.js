import AWS from 'aws-sdk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const artifactPath = path.join(__dirname, '../build/app.tar.gz');

const s3 = new AWS.S3({
  endpoint: 'http://127.0.0.1:4569',
  sslEnabled: false,
  accessKeyId: '123',
  secretAccessKey: 'abc',
  s3ForcePathStyle: true
});

const fileContent = fs.readFileSync(artifactPath);

await s3.upload({
  Bucket: 'deployment-artifacts',
  Key: 'builds/app.tar.gz',
  Body: fileContent
}).promise();

console.log('Artifact uploaded successfully');
