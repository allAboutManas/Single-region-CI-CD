import FakeS3 from 'fake-s3';

const server = new FakeS3({
  buckets: ['deployment-artifacts'],
  prefix: 'builds/'
});

await server.bootstrap();

console.log(`Fake S3 server running at ${server.hostPort}`);

process.stdin.resume();

process.on('SIGINT', async () => {
  await server.close();
  process.exit(0);
});