const request = require('supertest');
const {app , server} = require('./server');

describe("Server TEST",() => {
    it("GET response 200 OK", async () => {
        const res = await request(app).get('/')

        expect(res.statusCode).toBe(200)
        expect(res.text).toBe("Welcome to CI/CD")
    })
})

afterAll(() => {
    server.close()
})