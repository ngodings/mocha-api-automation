require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});

const ApiBase = require(`${process.cwd()}/tests_explorer/object_repository/api_base`)

class General extends ApiBase {
    Authentication() {
        return this.endpoint.post('auth')
           // .set('Content-Type', 'application/json')
            .send({
                 "username" : "admin",
                 "password" : "password123"
            })
    }
}

module.exports = General