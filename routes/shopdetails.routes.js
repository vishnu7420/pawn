/**
 * @author Sri Vishnu Prasaadh
 * @email srivishnu.prasaadh@skeintech.com
 * @create date 2021-01-30 17:53:11
 * @modify date 2021-01-30 12:36:51
 * @desc [description]
 */

var express = require('express');
const ShopController = require('../controller/shop.controller');
const router = express.Router();
const { upload } = require('../utils/file');


/* ------------------------------- Create Shop Details ------------------------------ */
router.post('/', upload.fields([{
    name: 'shop_image'
}]), ShopController.createShop)

/* -------------------------------- Get user -------------------------------- */
router.get('/', ShopController.getShopDetails)

/* -------------------------------- update all type of shops -------------------------------- */
router.put('/update-all/:shop_id', ShopController.updateAallShopDetails)

/* -------------------------------- delete all type of Shops -------------------------------- */
router.delete('/delete-all/:shop_id', ShopController.deleteAllShopDetails)


/* -------------------------------- Check Login-------------------------------- */
router.post('/login', ShopController.login)


module.exports = router;
