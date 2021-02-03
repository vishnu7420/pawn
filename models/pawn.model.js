/**
 * @author Sri Vishnu Prasaadh
 * @email srivishnu.prasaadh@skeintech.com
 * @create date 2021-01-30 17:53:11
 * @modify date 2021-01-30 12:36:51
 * @desc [description]
 */
const database = require("../config/database")
const QueryGenerator = require("../generators/query.generator")
const { Message } = require("../utils/messages")

const uniqid = require('uniqid')


const PawnModel = {


    // Create Pawn
    async createPawnDetails(profile = {

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
    }) {

        // Query generator can generate a insert query based on object we passed
        return await database.promise().query(QueryGenerator.insert("pawn_details", profile))
    },



    /* ---------------------------- Get Pawn Details starts ---------------------------- */

    async getIndividualPawnDetails(
        { customer_id }
    ) {


        /* ------------------------ Setting initial variables ----------------------- */

        let values = [],
            // // Selecting columns
            select = `pawn_id,
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
            last_payment_received_date`



        query = `SELECT ${select} FROM pawn_details where customer_id = ${customer_id} `


        // Query generator can generate a insert query based on object we passed

        return await database.promise().query(QueryGenerator.format(query, values))

    },

    /* --------------------------- Get Pawn Details ends here -------------------------- */





    // update

    async updatePawnDeatailByPawnid(pawn_id, { shop_id, owner_id, customer_id,
        pawn_amount_given_to_customer, interest_percentage, date_of_pawing, payment_due_details,
        outstanding_due_details, next_payment_date, pawn_closing_date, overdueamount, other_charge1,
        other_charge2, other_charge3, other_charge4, amount_paid_till_date, last_payment_received,
        last_payment_received_date
    }) {


        if (!shop_id) {
            throw new Error(Message.Workout.FailureMessage.IdNotFound)
        }

        let query = QueryGenerator.update('pawn_details', {
            shop_id, owner_id, customer_id,
            pawn_amount_given_to_customer, interest_percentage, date_of_pawing, payment_due_details,
            outstanding_due_details, next_payment_date, pawn_closing_date, overdueamount, other_charge1,
            other_charge2, other_charge3, other_charge4, amount_paid_till_date, last_payment_received,
            last_payment_received_date
        }, { pawn_id: pawn_id })

        return await database.promise().query(query)

    },
    // delete
    async deletePawnDetailsByPawnid(customer_id) {

        if (!id) {
            throw new Error(Message.Workout.FailureMessage.IdNotFound)
        }

        let query = QueryGenerator.format(`DELETE FROM pawn_details where customer_id =? `, [customer_id])

        return await database.promise().query(query)

    },


}


module.exports = PawnModel
