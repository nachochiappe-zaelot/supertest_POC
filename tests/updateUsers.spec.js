const request = require("supertest");

const baseUrl = 'https://reqres.in/api/';

describe('Update user', () => {
    it('should update a user', async () =>  {
        const response = await request(baseUrl)
            .put('users/2')
            .send({
                "name": "Ignacio",
                "job": "Chiappe"
            });
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toEqual("Ignacio");
        expect(response.body.job).toEqual("Chiappe");
    });
});