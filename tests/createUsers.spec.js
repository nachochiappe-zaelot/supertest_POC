const request = require("supertest");

const baseUrl = 'https://reqres.in/api/';

describe('Create user', () => {
    it('should create a new user', async () =>  {
        const response = await request(baseUrl)
            .post('users')
            .send({
                "name": "Ignacio",
                "job": "Chiappe"
            });
        expect(response.statusCode).toBe(201);
        expect(response.body.name).toEqual("Ignacio");
        expect(response.body.job).toEqual("Chiappe");
    });
});