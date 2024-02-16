let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");

chai.should();
chai.use(chaiHttp);

describe("Message", () => {

  // update existing submission
  describe("POST /message", () => {
    it("should add message to the db", (done) => {
      
      let newInfo = {
        role: 'submitter',
        message: 'This is a test message',
        answered: false,
        submissionId: 13
      }
      chai
        .request(server)
        .post(`/message`)
        .send(newInfo)
        .end((err, res) => {
          console.log(res.body);
          res.should.have.status(200);
          // res.body.should.have.property("code").eq("OK");
          done();
        });
    });   
    //  .timeout(5000000);
  });
  
});
