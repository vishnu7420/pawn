/**
 * @author Sri Vishnu Prasaadh
 * @email srivishnu.prasaadh@skeintech.com
 * @create date 2021-01-30 17:53:11
 * @modify date 2021-01-30 12:36:51
 * @desc [description]
 */
var express = require('express');

// router instance
var router = express.Router();

// Shop Details router instance (it contains all methods and functionalites for Shop Details)
var shopDetailsRouter = require('./shopdetails.routes');
// Customer Details router instance (it contains all methods and functionalites for Shop Details)
var customerDetailsRouter = require('./customer.routes');
// Pawn Details router instance (it contains all methods and functionalites for Shop Details)
var pawnDetailsRouter = require('./pawn.routes');

router.use('/shop', shopDetailsRouter)
router.use('/customer', customerDetailsRouter)
router.use('/pawn', pawnDetailsRouter)

module.exports = router