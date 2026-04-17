import request from 'supertest';
import app from '../app.js';

describe('Backend API Tests', () => {
  test('GET / should return success message', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Backend is running successfully');
  });

  test('GET /health should return healthy status', async () => {
    const response = await request(app).get('/health');

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('healthy');
  });

  test('GET /api/users should return user list', async () => {
    const response = await request(app).get('/api/users');

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(3);
  });
});