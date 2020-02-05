/*
Testcases
1. check if the modules returns a promise.
2. check if the module resolves and returns the exact data as mentioned and with datatype
3. check for error response.
4. Stub the request and save the response.
5. Add the module.
*/
const expect = require('chai').expect;
const chai = require('chai');
chai.should();
import post from '../../src/modules/jsonplaceholder/index';

describe('Check if jsonplaceholder returns data', () => {

    it('check if the module returns a promise', () => {
        expect(post(1)).to.be.a('promise');
    });

    it('check if the module resolves and returns the exact data as mentioned and with datatype', async () => {
        const postData = await post(1);
        expect(postData).to.deep.equal({
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        })
    });

    it('check for error response.', async () => {
        try {
            const postData = await post(1872381293);
        } catch (err) {
            expect(err).to.deep.equal('some Fake error')
        }
    });

    
})