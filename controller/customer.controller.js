/**
 * @author Sri Vishnu Prasaadh
 * @email srivishnu.prasaadh@skeintech.com
 * @create date 2021-01-30 17:53:11
 * @modify date 2021-01-30 12:36:51
 * @desc [description]
 */

/* --------------------------------- Imports starts here -------------------------------- */


const { Message } = require("../utils/messages");
const Response = require("../utils/response");
const SpErrorHandler = require("../utils/error-handler");
const CustomerModel = require("../models/customer.model");
const { StatusCodes } = require("http-status-codes");

/* --------------------------------- Imports ends here -------------------------------- */



/* ----------------------- Customer controller starts here ---------------------- */

const CustomerController = {

    /**
     * ANCHOR user creation 
     * @param {*} req 
     * @param {*} res 
     */
    async createCustomer(req, res) {

        // getting request from body
        let { customer_name, customer_address1, customer_address2, city, state, pincode,
            customer_mobile_no1, customer_mobile_no2, customer_land_line, shop_id, customer_added_at,
            customer_status, customer_created_by,customer_image } = req.body


        try {

            await CustomerModel.createCustomerDetails({
                customer_name,
                customer_address1,
                customer_address2,
                city,
                state,
                pincode,
                customer_mobile_no1,
                customer_mobile_no2,
                customer_land_line,
                shop_id,
                customer_added_at,
                customer_status,
                customer_created_by,
                customer_image

            })





            new Response(res)._SuccessResponse(Message.UserManagement.SuccessMessage.Create)


        }
        catch (err) {

            /**
             * ANCHOR user creation and machine creation error handler
             */
            new SpErrorHandler(res, err)
        }
    },



    /* ---------------------------- Get Customer Details ---------------------------- */
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    async getCustomerDetails(req, res) {
        try {


            let {
                customer_id,
            } = req.query

            let [customer] = await CustomerModel.getIndividualCustomerDetails({
                customer_id,
            })

            if (customer.length) {

                // if users found

                new Response(
                    res,
                    StatusCodes.OK
                )._SuccessResponse(
                    Message.UserManagement.SuccessMessage.Fetch,
                    customer
                )

            }
            else {

                // if no users found
                new Response(
                    res,
                    StatusCodes.NOT_FOUND
                )._ErrorMessage(
                    Message.UserManagement.FailureMessage.NotFound,
                )
            }
        }
        catch (err) {


            // if something went wrong
            new SpErrorHandler(
                res,
                err
            )
        }
    },

    /* --------------------------- Get Customer Details ends here -------------------------- */





    // update
    /**
           * 
           * @param {*} req 
           * @param {*} res 
           */
    async updateAallCustomerDetails(req, res) {

        // getting request from body
        let { customer_name, customer_address1, customer_address2, city, state, pincode,
            customer_mobile_no1, customer_mobile_no2, customer_land_line, shop_id, customer_added_at,
            customer_status, customer_created_by,customer_image } = req.body;
        let { customer_id } = req.params
        try {



            let [customerdetails] = await CustomerModel.updateCustomerDeatailByCustomerid(customer_id, {
                customer_name, customer_address1, customer_address2, city, state, pincode,
                customer_mobile_no1, customer_mobile_no2, customer_land_line, shop_id, customer_added_at,
                customer_status, customer_created_by,customer_image
            })




            // CustomerDetails updatedted successfully
            if (customerdetails.affectedRows) {

                // sending success response to client
                new Response(res)._SuccessResponse(Message.UserManagement.SuccessMessage.Update)

            }
            else {
                // failed response
                new Response(res, StatusCodes.NOT_FOUND)._ErrorMessage(Message.UserManagement.SuccessMessage.Update)

            }
        }
        catch (err) {
            new SpErrorHandler(res, err)
        }
    },
    // delete
    /**
       * 
       * @param {*} req 
       * @param {*} res 
       */
    async deleteAllCustomerDetails(req, res) {

        // getting request from query params
        let { customer_id } = req.params
        console.log("user id ====>", id);
        try {


            let [deletecustomer] = await CustomerModel.deleteCustomerDetailsByCustomerid(customer_id)




            if (deletecustomer.affectedRows) {

                // sending success response to client
                new Response(res)._SuccessResponse(Message.UserManagement.SuccessMessage.Delete)

            }
            else {
                // failed response
                new Response(res, StatusCodes.NOT_FOUND)._ErrorMessage(Message.UserManagement.SuccessMessage.Delete)

            }
        }
        catch (err) {
            new SpErrorHandler(res, err)
        }
    },
}

/* ------------------------ Customer controller ends here ----------------------- */

module.exports = CustomerController  