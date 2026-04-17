import FakeS3 from 'fake-s3';

const server = new FakeS3({
  buckets: ['deployment-artifacts'],
  prefix: 'artifacts/'
});

await server.bootstrap();

console.log(`Fake S3 running at http://${server.hostPort}`);

// Keep the process alive forever
setInterval(() => {
  console.log('Fake S3 still running...');
}, 30000);