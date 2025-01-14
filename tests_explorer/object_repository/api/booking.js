const ApiBase = require(`${process.cwd()}/tests_explorer/object_repository/api_base`)

class Booking extends ApiBase {

    CreateBooking(firstName, lastName, totalPrice, depositPaid, bookingDates, additionalNeeds) {
        return this.endpoint.post('booking')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({
                "firstname" : firstName,
                "lastname" : lastName,
                "totalprice" : totalPrice,
                "depositpaid" : depositPaid,
                "bookingdates" : bookingDates,
                "additionalneeds" : additionalNeeds
            })
    }

    DeleteBooking(id) {
        return this.endpoint.delete('booking/'+id)
            .set('content-type', 'application/json')
            .set('Cookie', 'token='+global.token)
            
           
    }

}
module.exports = Booking