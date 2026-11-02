import sum from "./sum.js";
import { once } from 'node:events';
import { get } from 'node:http';
import app from './server.js';

const getResponse = (url) => new Promise((resolve, reject) => {
    const request = get(url, (response) => {
        let body = '';
        response.setEncoding('utf8');
        response.on('data', (chunk) => {
            body += chunk;
        });
        response.on('end', () => {
            resolve({
                status: response.statusCode,
                headers: response.headers,
                body
            });
        });
    });
    request.on('error', reject);
});

describe("test for sum fxn", () =>{

    
test("adds 2 + 2 to eual 4", () =>{
    expect(sum(2,2)).toBe(4);
});

describe('HTTP routes', () => {
    let server;
    let baseUrl;

    beforeAll(async () => {
        server = app.listen(0, '127.0.0.1');
        await once(server, 'listening');
        baseUrl = `http://127.0.0.1:${server.address().port}`;
    });

    afterAll(async () => {
        server.close();
        await once(server, 'close');
    });

    test('root redirects to the home endpoint', async () => {
        const response = await getResponse(baseUrl);

        expect(response.status).toBe(302);
        expect(response.headers.location).toBe('/home');
    });

    test('home endpoint returns the app response', async () => {
        const response = await getResponse(`${baseUrl}/home`);

        expect(response.status).toBe(200);
        expect(JSON.parse(response.body)).toEqual({ msg: 'i am root!' });
    });
});

  
test("adds -1 + 5 to eual 4", () =>{
    expect(sum(-1,5)).toBe(4);
});

});