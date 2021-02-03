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


const ShopModel = {


    // Create vending machine
    async createShopDetails(profile = {

        shop_name,
        shop_email,
        shop_address1,
        shop_address2,
        city, state,
        pincode,
        owner_mobile_no,
        password, status,
        submitted_at,
        activated_at,
        activated_by,
        payment_status,
        last_payment_amount,
        last_payment_at,
        remarks,
        shop_image
    }) {

        // Query generator can generate a insert query based on object we passed
        return await database.promise().query(QueryGenerator.insert("shop_details", profile))
    },



    /* ---------------------------- Get Shop Details starts ---------------------------- */

    async getIndividualShopDetails(
        { shop_id }
    ) {


        /* ------------------------ Setting initial variables ----------------------- */

        let values = [],
            // // Selecting columns
            select = `shop_id,
            shop_name,
            shop_email as emailID,
            shop_address1 as address1,
            shop_address2 as address2,
            city,
            state,
            pincode,
            owner_mobile_no as contact_no,
            status,
            submitted_at,
            activated_at,
            activated_by,
            payment_status,
            last_payment_amount,
            last_payment_at,
            remarks,
            shop_image`
         


        query = `SELECT ${select} FROM shop_details where shop_id = ${shop_id}`


        // Query generator can generate a insert query based on object we passed

        return await database.promise().query(QueryGenerator.format(query, values))

    },

    /* --------------------------- Get users ends here -------------------------- */





    // update

    async updateShopDeatailByShopid(shop_id, { shop_name, shop_email, shop_address1, shop_address2, city, state, pincode,
        owner_mobile_no, password, status, submitted_at, activated_at,
        activated_by, payment_status, last_payment_amount, last_payment_at, remarks,shop_image

    }) {


        if (!shop_id) {
            throw new Error(Message.Workout.FailureMessage.IdNotFound)
        }

        let query = QueryGenerator.update('shop_details', {
            shop_name, shop_email, shop_address1, shop_address2, city, state, pincode,
            owner_mobile_no, password, status, submitted_at, activated_at,
            activated_by, payment_status, last_payment_amount, last_payment_at, remarks,shop_image
        }, { shop_id: shop_id })

        return await database.promise().query(query)

    },
    // delete
    async deleteShopDetailsByShopid(Shop_id) {

        if (!id) {
            throw new Error(Message.Workout.FailureMessage.IdNotFound)
        }

        let query = QueryGenerator.format(`DELETE FROM shop_details where shop_id=?`, [Shop_id])

        return await database.promise().query(query)

    },




    

}


module.exports = ShopModel