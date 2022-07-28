let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");

chai.should();
chai.use(chaiHttp);


describe("Submission", () => {

  // update existing submission
  describe("PUT /submission/:id", () => {
    it.only("should add a userMuni to this submission", (done) => {
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
    
    it("should not generate a token for this unregistered user", (done) => {
      const login_info = {
        email: "best@tacos.profact.edu",
      };
      chai
        .request(server)
        .put("/api/login/forgot")
        .send(login_info)
        .end((err, res) => {
          res.should.have.status(400);
          res.type.should.eq("application/json");
          res.body.should.be.an("object");
          // res.body.should.have.property("code").eq("NOT_OK");
          done();
        });
    });
  });


});


  // // TEST GET /login/status - validate header token
  // describe("GET /api/login/status", () => {
  //   it("should show the validation status of the token", (done) => {
  //     chai
  //       .request(server)
  //       .get("/api/login/status")
  //       .set({
  //         Authorization: "Bearer " + Admintoken.body.token,
  //       })
  //       .send()
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         res.type.should.eq("application/json");
  //         res.body.should.be.an("object");
  //         res.body.should.have.property("message").eq("Token authenticated");
  //         done();
  //       });
  //   });

  //   it("should deny the validation status of the incorrect token", (done) => {
  //     chai
  //       .request(server)
  //       .get("/api/login/status")
  //       .set({
  //         Authorization: "Bearer " + "834jafkjao;ieufjaj",
  //       })
  //       .send()
  //       .end((err, res) => {
  //         res.should.have.status(403);
  //         res.type.should.eq("application/json");
  //         res.body.should.be.an("object");
  //         res.body.should.have.property("code").eq("AUTH_ERROR");
  //         done();
  //       });
  //   });
  // });

  // // TEST GET /login/validateResetToken/:token - validate path token
  // describe("GET /api/login/validateResetToken/:token", () => {
  //   it("should show the validation status of the token", (done) => {
  //     let cfalink = loginPrep
  //       .createResetLinkCfa(cfa.id)
  //       // let cfalink = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTYzNywiYWRtaW4iOmZhbHNlLCJleHBpcmVzSW4iOjcyMDAsImlhdCI6MTYwMDY5NjM5MX0.hCfMovSrWCMe_KXmibdve0AlhRhSHsGZE_1DqJFE6pU'
  //       .then((cfalink) => {
  //         chai
  //           .request(server)
  //           .get(`/api/login/validateResetToken/${cfalink}`)
  //           .end((err, res) => {
  //             // console.log(res.body);
  //             res.should.have.status(200);
  //             res.type.should.eq("application/json");
  //             res.body.should.be.an("object");
  //             res.body.should.have.property("code").eq("OK");
  //             done();
  //           });
  //       });
  //   });
  //   it("should deny the validation status of an expired token", (done) => {
  //     let cfalink =
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mjk1LCJhZG1pbiI6ZmFsc2UsImlhdCI6MTYwMDcwMzUxNywiZXhwIjoxNjAwNzg5OTE3fQ.VFAuSoWwvjSdTCKMcrgX77o_vOfDJiz-5lwRVsycYcc";
  //     chai
  //       .request(server)
  //       .get(`/api/login/validateResetToken/${cfalink}`)
  //       .end((err, res) => {
  //         // console.log(res.body);
  //         res.should.have.status(403);
  //         res.type.should.eq("application/json");
  //         res.body.should.be.an("object");
  //         res.body.should.have.property("code").eq("AUTH_ERROR");
  //         done();
  //       });
  //   });
  //   //   it("should deny the validation status of a token with no user match", (done) => {
  //   //     let cfalink = userToken.body.token;
  //   //     chai
  //   //       .request(server)
  //   //       .get(`/api/login/validateResetToken/${cfalink}`)
  //   //       .end((err, res) => {
  //   //         // console.log(res.body);
  //   //         res.should.have.status(404);
  //   //         res.type.should.eq("application/json");
  //   //         res.body.should.be.an("object");
  //   //         res.body.should.have.property("code").eq("BAD_LINK");
  //   //         done();
  //   //       });
  //   //   });
  // });

    // // test PUT reset password with a token
    // describe("PUT /api/login/reset/:token", () => {
    //   it("should not reset the password for this user with an invalid token", (done) => {
    //     const login_info = {
    //       reset:
    //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIwLCJleHBpcmVzSW4iOjEyMDAwMDAsImlhdCI6MTU5NzA4ODMwMH0.CBWoRUlXQpIUzZv5am8CqeV3diIImlydtUe9hCcc4Dw",
    //       newPass: "thisismynewpassword",
    //     };
    //     chai
    //       .request(server)
    //       .put(`/api/login/reset/${login_info.reset}`)
    //       .send(login_info)
    //       .end((err, res) => {
    //         res.should.have.status(404);
    //         // res.error.should.have.property('code').eq('{"message":"Invalid or expired reset link."}');
    //         done();
    //       });
    //   });
    //   it("should reset the password for this CFA user with a valid token", (done) => {
    //     let cfalink = loginPrep
    //       .createResetLinkCfa(cfa.id)
    //       // let cfalink = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTg3MSwiYWRtaW4iOmZhbHNlLCJpYXQiOjE2MDE2NjE3NTAsImV4cCI6MTYwMTc0ODE1MH0.q7eSan8Np1rehpaYHrGXwR3VozMfWsYDrXPBShsIA5Q'
    //       .then((cfalink) => {
    //         const login_info = {
    //           reset: cfalink,
    //           newPass: "frogsarecool",
    //         };
    //         chai
    //           .request(server)
    //           .put(`/api/login/reset/${login_info.reset}`)
    //           .send(login_info)
    //           .end((err, res) => {
    //             console.log(res.body);
    //             res.should.have.status(200);
    //             res.type.should.eq("application/json");
    //             res.body.should.be.an("object");
    //             res.body.should.have.property("code").eq("OK");
    //             res.body.should.have
    //               .property("message")
    //               .eq("Cfa password updated successfully.");
    //             done();
    //           });
    //       });
    //   });
  
    //   it("should reset the password for this Admin user with a valid token", (done) => {
    //     let adminLink = loginPrep
    //       .createResetLinkAdmin(admin.id)
    //       .then((adminLink) => {
    //         const login_info = {
    //           reset: adminLink,
    //           newPass: "frogsarecool",
    //         };
    //         console.log(admin.id);
    //         chai
    //           .request(server)
    //           .put(`/api/login/reset/${login_info.reset}`)
    //           .send(login_info)
    //           .end((err, res) => {
    //             res.should.have.status(200);
    //             res.body.should.have
    //               .property("message")
    //               .eq("Admin password updated successfully.");
    //             done();
    //           });
    //       });
    //   });
    // });