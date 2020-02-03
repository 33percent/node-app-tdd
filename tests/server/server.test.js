let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../../src/app");
let should = chai.should()
chai.use(chaiHttp);
//Our parent block
describe("Server Init", () => {
  /*
   * Test the /GET route
   */
  describe("server status", () => {
    it("is my app working?", done => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.be.eql({
            status: "working perfectly fine"
          });
          done();
        });
    });

    it("is my app running?", done => {
      chai
        .request(server)
        .get("/ping")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.be.eql({
            status: "success"
          });
          done();
        });
    });

    it('does it handle an error page', done => {
      chai
        .request(server)
        .get('/unknown-route')
        .end((err,res) => {
          res.should.have.status(404);
          res.body.should.be.a("object");
          res.body.should.be.eql({
            message:"Not Found"
          });
          done();
        });
        
    })
  });
});
