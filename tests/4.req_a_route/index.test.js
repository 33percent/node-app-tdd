/*
testcases
    1. check if the url exists
    2. check if it returns the exact data
    3. check if it sends the correct error response. 
*/

// const expect = require('chai').expect;
const chai = require('chai');
let chaiHttp = require("chai-http");
let server = require("../../src/app");
chai.should();
chai.use(chaiHttp);
describe('requesting a route to get data', async () => {
    // it('check if the url exists', async (done) => {
    //     chai
    //     .request(server)
    //     .post('/get-post')
    //     .send({
    //         asd:"ajhds"
    //     })
    //     .end((err,res) => {
    //         res.should.have.status(200);
    //     });
    //     done();
    // });
    it('check if the url exists && check if the url returns the exact data', async (done) => {
        chai
        .request(server)
        .post('/get-post')
        .send({
            id:1
        })
        .end((err,res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.be.eql({
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            });
        });
        done();
    });
    it('check if the url returns error response',  (done) => {
        chai
        .request(server)
        .post('/get-post')
        .send({
            id:1273981278
        })
        .end((err,res) => {
            res.body.should.be.eql({});
        });
        done();
    });
    
})