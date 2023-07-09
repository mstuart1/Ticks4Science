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
  // get downloadable data
  describe("GET /submission/downloadData", () => {
    it("should return all of the information pertaining to all of the submissions", (done) => {
      let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZ3JhbnQiOnRydWUsImlhdCI6MTY1OTk2MzQ5MCwiZXhwIjoxNjU5OTcwNjkwfQ.OAoYdpioqLopRjFVUv1qSL5LwbHUma7LgLc5JaBi4cI'
      chai
        .request(server)
        .get('/submission/downloadData')
        .send(token)
        .end((err, res) => {
          console.log(JSON.stringify(res.body, null, 1))
          res.should.have.status(200)
          done()
        })
    })
  })
  // update submission pathogens
  describe("PUT /submission/:id/pathos", () => {
    it("should update the pathogens associated with this submission", (done) => {
      let id = 19
      let pathogens = [{ id: 1 }, { id: 7 }, { id: 8 }, { id: 12 }]
      chai
        .request(server)
        .put(`/submission/${id}/pathos`)
        .send({ pathogens })
        .end((err, res) => {
          console.log(res.body);
          res.should.have.status(200);
          // res.body.should.have.property("code").eq("OK");
          done();
        });
    });
  }
  )
  // update submission pathogens result
  describe("PUT /submission/:id/result", () => {
    it("should update the pathogen results associated with this submission", (done) => {
      let id = 19
      let data = { pathogenId: 1, result: 'positive' }
      chai
        .request(server)
        .put(`/submission/${id}/result`)
        .send(data)
        .end((err, res) => {
          console.log(res.body);
          res.should.have.status(200);
          // res.body.should.have.property("code").eq("OK");
          done();
        });
    });
  })
});
