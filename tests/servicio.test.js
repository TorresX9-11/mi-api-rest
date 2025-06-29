// Prueba básica para servicios
const request = require('supertest');
const app = require('../app');

describe('API de Servicios', () => {
  it('GET /servicios debe devolver un array', async () => {
    const res = await request(app).get('/servicios');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
