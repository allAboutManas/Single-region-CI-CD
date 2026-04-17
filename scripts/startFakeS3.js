import FakeS3 from 'fake-s3';
import fs from 'fs';

const server = new FakeS3({
  buckets: ['deployment-artifacts'],
  prefix: 'artifacts/'
});

await server.bootstrap();

const endpoint = `http://${server.hostPort}`;

console.log(`Fake S3 running at ${endpoint}`);

// Save endpoint so Jenkins can use it later
fs.writeFileSync('fake-s3-endpoint.txt', endpoint);

setInterval(() => {}, 1000);