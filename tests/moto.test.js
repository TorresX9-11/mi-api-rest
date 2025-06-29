// Pruebas para motos (puedes expandirlas según tus necesidades)
const request = require('supertest');
const app = require('../app');

describe('API de Motos', () => {
  it('GET /motos debe devolver un array', async () => {
    const res = await request(app).get('/motos');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
