// test/app.test.js
const request = require('supertest');
const app = require('../index'); // важливо, щоб index.js експортував app

describe('GET /', () => {
    it('should return Hello World', async () => {
        const res = await request(app).get('/');
        expect(res.text).toBe('Hello World!');
    });
});
