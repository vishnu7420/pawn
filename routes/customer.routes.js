/**
 * @author Sri Vishnu Prasaadh
 * @email srivishnu.prasaadh@skeintech.com
 * @create date 2021-01-30 17:53:11
 * @modify date 2021-01-30 12:36:51
 * @desc [description]
 */

var express = require('express');
const CustomerController = require('../controller/customer.controller');
const router = express.Router();
const { upload } = require('../utils/file');


/* ------------------------------- Create Customer Details ------------------------------ */
router.post('/', upload.fields([{
    name: 'customer_image'
}]), CustomerController.createCustomer)

/* -------------------------------- Get Customer -------------------------------- */
router.get('/', CustomerController.getCustomerDetails)

/* -------------------------------- update all  Customers -------------------------------- */
router.put('/update-all/:customer_id', CustomerController.updateAallCustomerDetails)

/* -------------------------------- delete  Customers -------------------------------- */
router.delete('/delete-all/:customer_id', CustomerController.deleteAllCustomerDetails)

module.exports = router;
