import FakeS3 from 'fake-s3';

const server = new FakeS3({
  buckets: ['deployment-artifacts'],
  prefix: 'artifacts/'
});

await server.bootstrap(4569);

console.log('Fake S3 running at http://127.0.0.1:4569');

process.stdin.resume();