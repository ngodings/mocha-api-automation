const { expect } = require("chai");
require(`${process.cwd()}/tests_explorer/base`)

const apis = require(`${process.cwd()}/tests_explorer/object_repository/apis`),
api_booking = new apis.apiBooking

let bookingId;
let firstName = "Lala"
let lastName = "Aqila"
let totalPrice = 10000
let depositPaid = true
let checkinDate = "2025-01-13"
let checkOutDate = "2025-01-14"
let bookingDates = {
    "checkin" : checkinDate,
    "checkout" : checkOutDate
}
let additionalNeeds = "note auto testing"
describe("Test Suite Create Booking", function () {
        it("should passed create booking for valid firstname data", async function () {
        let response = await api_booking.CreateBooking(firstName, lastName, totalPrice, depositPaid, bookingDates, additionalNeeds);
        
        response.should.have.status(200);
        expect(response.body).to.have.property('bookingid'); 
        expect(response.body.booking).to.have.property('firstname', firstName);
        })
    
        it("should passed create booking for valid lastname data", async function () {
            let response = await api_booking.CreateBooking(firstName, lastName, totalPrice, depositPaid, bookingDates, additionalNeeds);
        
            response.should.have.status(200);
            global.id = response.body.bookingid;
            expect(response.body).to.have.property('bookingid'); 
            expect(response.body.booking).to.have.property('firstname', firstName);
            expect(response.body.booking).to.have.property('lastname', lastName);
            expect(response.body.booking).to.have.property('totalprice', totalPrice);
            expect(response.body.booking).to.have.property('depositpaid', depositPaid);
            expect(response.body.booking.bookingdates).to.have.property('checkin', checkinDate);
            expect(response.body.booking.bookingdates).to.have.property('checkout', checkOutDate);
            expect(response.body.booking).to.have.property('additionalneeds', additionalNeeds);
        })
        
       it("should passed create booking for valid total price data", async function () {
        let response = await api_booking.CreateBooking(firstName, lastName, totalPrice, depositPaid, bookingDates, additionalNeeds);
       
        response.should.have.status(200);
        expect(response.body).to.have.property('bookingid'); 
        expect(response.body.booking).to.have.property('firstname', firstName);
        expect(response.body.booking).to.have.property('lastname', lastName);
        expect(response.body.booking).to.have.property('totalprice', totalPrice);
       })

       it("should passed create booking for valid deposit paid data", async function () {
        let response = await api_booking.CreateBooking(firstName, lastName, totalPrice, depositPaid, bookingDates, additionalNeeds);
       
        response.should.have.status(200);
        expect(response.body).to.have.property('bookingid'); 
        expect(response.body.booking).to.have.property('firstname', firstName);
        expect(response.body.booking).to.have.property('lastname', lastName);
        expect(response.body.booking).to.have.property('totalprice', totalPrice);
        expect(response.body.booking).to.have.property('depositpaid', depositPaid);
       })
   
       it("should get response status 500 for empty first name", async function () {
        let response = await api_booking.CreateBooking(null, lastName, totalPrice, depositPaid, bookingDates, additionalNeeds);
       
        response.should.have.status(500); 
       })

       it("should get response status 500 for empty last name", async function () {
        let response = await api_booking.CreateBooking(firstName, null, totalPrice, depositPaid, bookingDates, additionalNeeds);
       
        response.should.have.status(500);
       })

       it("should get response status 500 for empty total price", async function () {
        let response = await api_booking.CreateBooking(firstName, lastName, null, depositPaid, bookingDates, additionalNeeds);
       
        response.should.have.status(500);
       })

       it("should get response status 500 for empty deposit paid", async function () {
        let response = await api_booking.CreateBooking(firstName, lastName, totalPrice, null, bookingDates, additionalNeeds);
       
        response.should.have.status(500);
       })
 })