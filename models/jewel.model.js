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


const CustomerModel = {


    // Create Customer machine
    async createCustomerDetails(jewel_group = {
        group_id,
        customer_id 
    },
    
    
    ) {

        // Query generator can generate a insert query based on object we passed
        return await database.promise().query(QueryGenerator.insert("customer_details", jewel_group))
    },



    /* ---------------------------- Get Customer Details starts ---------------------------- */

    async getIndividualCustomerDetails(
        { customer_id }
    ) {


        /* ------------------------ Setting initial variables ----------------------- */

        let values = [],
            // // Selecting columns
            select = `customer_id,
            customer_name as name,
            customer_address1 as address1,
            customer_address2 as addresss2,
            city,
            state,
            pincode,
            customer_mobile_no1 as Contact_no1,
            customer_mobile_no2 as Contact_no2,
            customer_land_line as Customer_landline,
            shop_id,
            customer_added_at,
            customer_status,
            customer_created_by,
            customer_image`



        query = `SELECT ${ select } FROM customer_details where customer_id = ${ customer_id } `


        // Query generator can generate a insert query based on object we passed

        return await database.promise().query(QueryGenerator.format(query, values))

    },

    /* --------------------------- Get Customer ends here -------------------------- */





    // update

    async updateCustomerDeatailByCustomerid(customer_id, { customer_name, customer_address1,
        customer_address2, city, state, pincode, customer_mobile_no1, customer_mobile_no2,
        customer_land_line, shop_id, customer_added_at, customer_status, customer_created_by,customer_image
    }) {


        if (!shop_id) {
            throw new Error(Message.Workout.FailureMessage.IdNotFound)
        }

        let query = QueryGenerator.update('customer_details', {
            customer_name, customer_address1,
            customer_address2, city, state, pincode, customer_mobile_no1, customer_mobile_no2,
            customer_land_line, shop_id, customer_added_at, customer_status, customer_created_by,customer_image
        }, { customer_id: customer_id })

        return await database.promise().query(query)

    },
    // delete
    async deleteCustomerDetailsByCustomerid(customer_id) {

        if (!id) {
            throw new Error(Message.Workout.FailureMessage.IdNotFound)
        }

        let query = QueryGenerator.format(`DELETE FROM customer_details where customer_id =? `, [customer_id])

        return await database.promise().query(query)

    },


}


module.exports = CustomerModel
