// require(`${process.cwd()}/tests_explorer/base`)

/** Check general response API */
function checkGeneralResponseAPI(response, expectedMessage) {
    //console.log("checkGeneralResponseAPI = ", response, " --- end ---")
    response.should.have.status(200);
    expect(response.body.Status).to.equal(true);
    // response.body.Status.should.equal(true);
    expect(response.body.Message).to.equal(expectedMessage);
    // response.body.Message.should.equal(expectedMessage);
}

function parseFormatRupiah(number) {
    return number.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

module.exports = {
    checkGeneralResponseAPI,
    parseFormatRupiah
}