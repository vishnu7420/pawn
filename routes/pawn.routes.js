/**
 * @author Sri Vishnu Prasaadh
 * @email srivishnu.prasaadh@skeintech.com
 * @create date 2021-01-30 17:53:11
 * @modify date 2021-01-30 12:36:51
 * @desc [description]
 */

var express = require('express');
const PawnController = require('../controller/pawn.controller');
const router = express.Router();


/* ------------------------------- Create pawn Details ------------------------------ */
router.post('/', PawnController.createPawn)

/* -------------------------------- Get pawn -------------------------------- */
router.get('/', PawnController.getpawnDetails)

/* -------------------------------- update all  pawn -------------------------------- */
router.put('/update-all/:pawn_id', PawnController.updateAallPawnDetails)

/* -------------------------------- delete  pawn -------------------------------- */
router.delete('/delete-all/:pawn_id', PawnController.deleteAllPawnDetails)

module.exports = router;
