import AWS from 'aws-sdk';
import fs from 'fs';

const endpoint = process.env.FAKE_S3_ENDPOINT || 'http://127.0.0.1:4569';

const s3 = new AWS.S3({
  endpoint,
  sslEnabled: false,
  accessKeyId: '123',
  secretAccessKey: 'abc',
  region: 'us-east-1',
  s3ForcePathStyle: true
});

const bucketName = 'deployment-artifacts';
const filePath = './build/app.tar.gz';

async function uploadArtifact() {
  try {
    // Create bucket if it does not exist
    try {
      await s3.createBucket({ Bucket: bucketName }).promise();
      console.log('Bucket created');
    } catch (err) {
      console.log('Bucket may already exist');
    }

    // Read artifact file
    const fileContent = fs.readFileSync(filePath);

    // Use putObject instead of upload
    await s3.putObject({
      Bucket: bucketName,
      Key: 'app.tar.gz',
      Body: fileContent
    }).promise();

    console.log('Artifact uploaded successfully');
    console.log(`Bucket: ${bucketName}`);
    console.log(`Key: app.tar.gz`);
  } catch (err) {
    console.error('Upload failed:', err);
    process.exit(1);
  }
}

uploadArtifact();