require(`${process.cwd()}/tests_explorer/base`)

const apis = require(`${process.cwd()}/tests_explorer/object_repository/apis`),
   api_general = new apis.apiGeneral


describe("Test Suite Authentication", function () {
   it("should passed get token for auth", async function () {
    let response = await api_general.Authentication();
   // response.should.have.status(200);
    global.token = response.body.token;
    console.log(response.body)
   })

  
})