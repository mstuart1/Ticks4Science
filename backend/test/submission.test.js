let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");

chai.should();
chai.use(chaiHttp);


describe("Submission", () => {

  // update existing submission
  describe("PUT /submission/:id", () => {
    it("should add a userMuni to this submission", (done) => {
     let id = 9
     let newInfo = {
      userMuni: 'Test Muni'
     }
      chai
        .request(server)
        .put(`/submission/${id}`)
        .send(newInfo)
        .end((err, res) => {
          // console.log(res.body);
          res.should.have.status(200);
          // res.body.should.have.property("code").eq("OK");
          done();
        });
    });
    it("should add a userZip and pathogens to this submission", (done) => {
      let id = 9
      let newInfo = {
       userZip: 26586,
       pathogens: [1, 7, 8, 12]
      }
       chai
         .request(server)
         .put(`/submission/${id}`)
         .send(newInfo)
         .end((err, res) => {
           // console.log(res.body);
           res.should.have.status(200);
           // res.body.should.have.property("code").eq("OK");
           done();
         });
     })
    //  .timeout(5000000);
    
  });


});
