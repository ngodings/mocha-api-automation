require(`${process.cwd()}/tests_explorer/base`)

const apis = require(`${process.cwd()}/tests_explorer/object_repository/apis`),
   api_general = new apis.apiGeneral
 

/* Function authentication yang akan dipanggil di before di dalam describe */
async function authentication() {
   let response = await api_general.Authentication();
   response.should.have.status(200);
   /** Set Global Token */
   global.token = response.body.token;

}


module.exports = {
   authentication,
}