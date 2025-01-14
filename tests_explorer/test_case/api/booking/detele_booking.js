const { expect } = require("chai");
require(`${process.cwd()}/tests_explorer/base`)

const apis = require(`${process.cwd()}/tests_explorer/object_repository/apis`),
api_booking = new apis.apiBooking, 
initial = require(`${process.cwd()}/tests_explorer/test_case/initial`)


describe("Test Suite Delete Booking", function () {
        

        it("should success to delete data", async function () {
        let response = await api_booking.DeleteBooking(global.id)
        response.should.have.status(201);
        })

        it("should 405 for id null", async function () {
            let response = await api_booking.DeleteBooking(null)
            response.should.have.status(405);
            })

         it("should 405 for global token null", async function () {
            global.token = null;
            let response = await api_booking.DeleteBooking(null)
            response.should.have.status(403);
            })
    
 })