const express = require('express');
const router = express.Router();
const {
  submitFormResponse,
  getResponsesByFormId,
} = require('../controllers/responseController');

// Route to submit response
router.post('/submit', submitFormResponse);

// Route to get responses by formId
router.get('/:formId', getResponsesByFormId);

module.exports = router;
