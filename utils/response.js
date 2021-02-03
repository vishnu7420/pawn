const { StatusCodes } = require("http-status-codes")

/**
 * @author Sri Vishnu Prasaadh
 * @email srivishnu.prasaadh@skeintech.com
 * @create date 2021-01-30 17:53:11
 * @modify date 2021-01-30 12:36:51
 * @desc [description]
 */
class Response {
    constructor(response, status = 200) {
        this.response = response
        this.status = status
    }


    _ErrorMessage(message, error) {
        if (!this.status) {
            this.status = StatusCodes.BAD_REQUEST
        }
        this.response.status(this.status).send({
            status: false,
            message: message,
            error: error
        })
    }

    _LoginResponse(user, token) {
        this.response.status(this.status).send({
            status: true,
            message: "Login success !!",
            data: user,
            token: token
        })
    }

    _SuccessResponse(message, data) {
        this.response.status(this.status).send({
            status: true,
            message: message,
            data: data
        })
    }

}

module.exports = Response