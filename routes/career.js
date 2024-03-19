const express = require('express');
const router = express.Router();
const LowonganKerjaController = require('../controllers/LowonganKerjaController');

router.get('/', LowonganKerjaController.getAllLowonganKerja);
router.get('/:id', LowonganKerjaController.getLowonganKerjaById);

module.exports = router;
