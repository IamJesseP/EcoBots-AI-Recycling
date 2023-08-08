const express = require('express');
const router = express.Router();
const { getRecycleInfo } = require('../controllers/recycleController');

router.get('/', getRecycleInfo);

module.exports = router;
