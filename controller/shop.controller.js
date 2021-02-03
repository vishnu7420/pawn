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
const ShopModel = require("../models/shop.models");
const { StatusCodes } = require("http-status-codes");

/* --------------------------------- Imports ends here -------------------------------- */



/* ----------------------- User controller starts here ---------------------- */

const ShopController = {

    /**
     * ANCHOR user creation 
     * @param {*} req 
     * @param {*} res 
     */
    async createShop(req, res) {

        // getting request from body
        let { shop_name, shop_email, shop_address1, shop_address2, city, state, pincode,
            owner_mobile_no, password, status, submitted_at, activated_at,
            activated_by, payment_status, last_payment_amount, last_payment_at, remarks,shop_image } = req.body


        try {

            await ShopModel.createShopDetails({
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



    /* ---------------------------- Get Shop Details ---------------------------- */
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    async getShopDetails(req, res) {
        try {


            let {
                shop_id,
            } = req.query

            let [shop] = await ShopModel.getIndividualShopDetails({
                shop_id,
            })

            if (shop.length) {

                // if users found

                new Response(
                    res,
                    StatusCodes.OK
                )._SuccessResponse(
                    Message.UserManagement.SuccessMessage.Fetch,
                    shop
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

    /* --------------------------- Get Shop Details ends here -------------------------- */





    // update
    /**
           * 
           * @param {*} req 
           * @param {*} res 
           */
    async updateAallShopDetails(req, res) {

        // getting request from body
        let { shop_name, shop_email, shop_address1, shop_address2, city, state, pincode,
            owner_mobile_no, password, status, submitted_at, activated_at,
            activated_by, payment_status, last_payment_amount, last_payment_at, remarks,shop_image
        } = req.body;
        let { shop_id } = req.params
        try {



            let [shopdetails] = await ShopModel.updateShopDeatailByShopid(shop_id, {
                shop_name, shop_email, shop_address1, shop_address2, city, state, pincode,
                owner_mobile_no, password, status, submitted_at, activated_at,
                activated_by, payment_status, last_payment_amount, last_payment_at, remarks,shop_image
            })




            // ShopDetails updatedted successfully
            if (shopdetails.affectedRows) {

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
    async deleteAllShopDetails(req, res) {

        // getting request from query params
        let { shop_id } = req.params
        console.log("user id ====>", id);
        try {


            let [deleteshops] = await ShopModel.deleteShopDetailsByShopid(shop_id)




            if (deleteshops.affectedRows) {

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

/* ------------------------ User controller ends here ----------------------- */

module.exports = ShopController