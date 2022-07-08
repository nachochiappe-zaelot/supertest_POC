/**
 * @group regression
 * @group smoke
 * @group users
 */

const request = require("supertest");

const baseUrl = 'https://reqres.in/api/';

describe('Get users', () => {
	it('should get all users', async () => {
		const response = await request(baseUrl)
            .get('users');
        expect(response.statusCode).toBe(200);
        expect(response.body.data).toHaveLength(6);
	});

    it('should get a single user', async () => {
		const response = await request(baseUrl)
            .get('users/2');
        expect(response.statusCode).toBe(200);
        expect(response.body.data.id).toEqual(2);
	});

    it('should return 404 if a user is not found', async () => {
		const response = await request(baseUrl)
            .get('users/23');
        expect(response.statusCode).toBe(404);
	});
});