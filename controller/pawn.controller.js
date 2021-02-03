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
const PawnModel = require("../models/pawn.model");
const { StatusCodes } = require("http-status-codes");

/* --------------------------------- Imports ends here -------------------------------- */



/* ----------------------- Pawn controller starts here ---------------------- */

const PawnController = {

    /**
     * ANCHOR user creation 
     * @param {*} req 
     * @param {*} res 
     */
    async createPawn(req, res) {

        // getting request from body
        let { shop_id, owner_id, customer_id,
            pawn_amount_given_to_customer, interest_percentage, date_of_pawing, payment_due_details,
            outstanding_due_details, next_payment_date, pawn_closing_date, overdueamount, other_charge1,
            other_charge2, other_charge3, other_charge4, amount_paid_till_date, last_payment_received,
            last_payment_received_date } = req.body


        try {

            await PawnModel.createPawnDetails({
                shop_id,
                owner_id,
                customer_id,
                pawn_amount_given_to_customer,
                interest_percentage,
                date_of_pawing,
                payment_due_details,
                outstanding_due_details,
                next_payment_date,
                pawn_closing_date,
                overdueamount,
                other_charge1,
                other_charge2,
                other_charge3,
                other_charge4,
                amount_paid_till_date,
                last_payment_received,
                last_payment_received_date
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



    /* ---------------------------- Get Pawn Details ---------------------------- */
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    async getpawnDetails(req, res) {
        try {


            let {
                customer_id,
            } = req.query

            let [pawn] = await PawnModel.getIndividualPawnDetails({
                customer_id,
            })

            if (pawn.length) {

                // if pawn details found

                new Response(
                    res,
                    StatusCodes.OK
                )._SuccessResponse(
                    Message.UserManagement.SuccessMessage.Fetch,
                    pawn
                )

            }
            else {

                // if pawn details not found
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

    /* --------------------------- Get Pawn Details ends here -------------------------- */





    // update
    /**
           * 
           * @param {*} req 
           * @param {*} res 
           */
    async updateAallPawnDetails(req, res) {

        // getting request from body
        let { shop_id, owner_id, customer_id,
            pawn_amount_given_to_customer, interest_percentage, date_of_pawing, payment_due_details,
            outstanding_due_details, next_payment_date, pawn_closing_date, overdueamount, other_charge1,
            other_charge2, other_charge3, other_charge4, amount_paid_till_date, last_payment_received,
            last_payment_received_date } = req.body;
        let { pawn_id } = req.params
        try {



            let [pawndetails] = await PawnModel.updatePawnDeatailByPawnid(pawn_id, {
                shop_id, owner_id, customer_id,
                pawn_amount_given_to_customer, interest_percentage, date_of_pawing, payment_due_details,
                outstanding_due_details, next_payment_date, pawn_closing_date, overdueamount, other_charge1,
                other_charge2, other_charge3, other_charge4, amount_paid_till_date, last_payment_received,
                last_payment_received_date 
            })




            // Pawn Details updatedted successfully
            if (pawndetails.affectedRows) {

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
    async deleteAllPawnDetails(req, res) {

        // getting request from query params
        let { pawn_id } = req.params
        try {


            let [deletepawn] = await PawnModel.deletePawnDetailsByPawnid(customer_id)




            if (deletepawn.affectedRows) {

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

module.exports = PawnController  