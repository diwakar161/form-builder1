const Response = require('../models/Response');
const Form = require('../models/Form');

// 📨 Submit a response to a form
const submitFormResponse = async (req, res) => {
  try {
    const { formId, answers } = req.body;

    if (!formId || !answers || typeof answers !== 'object') {
      return res.status(400).json({ error: 'Form ID and answers are required.' });
    }

    const form = await Form.findById(formId);
    if (!form) return res.status(404).json({ error: 'Form not found' });

    const response = new Response({ formId, answers });
    await response.save();

    res.status(200).json({ message: 'Response saved successfully.' });
  } catch (err) {
    console.error('❌ Error saving response:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// 📥 Get all responses for a specific form
const getResponsesByFormId = async (req, res) => {
  try {
    const { formId } = req.params;

    if (!formId) {
      return res.status(400).json({ error: 'Form ID is required.' });
    }

    const responses = await Response.find({ formId }).sort({ createdAt: -1 });
    res.json(responses);
  } catch (err) {
    console.error('❌ Error fetching responses:', err.message);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { submitFormResponse, getResponsesByFormId };
