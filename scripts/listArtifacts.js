import AWS from 'aws-sdk';

const endpoint = process.env.FAKE_S3_ENDPOINT || 'http://127.0.0.1:4569';

const s3 = new AWS.S3({
  endpoint,
  sslEnabled: false,
  accessKeyId: '123',
  secretAccessKey: 'abc',
  region: 'us-east-1',
  s3ForcePathStyle: true
});

async function listArtifacts() {
  try {
    const data = await s3.listObjectsV2({
      Bucket: 'deployment-artifacts'
    }).promise();

    console.log('Artifacts in bucket:');

    if (!data.Contents || data.Contents.length === 0) {
      console.log('No artifacts found');
      return;
    }

    data.Contents.forEach((item) => {
      console.log(`${item.Key} - ${item.Size} bytes`);
    });
  } catch (err) {
    console.error('Failed to list artifacts:', err);
    process.exit(1);
  }
}

listArtifacts();