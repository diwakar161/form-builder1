const Form = require('../models/Form');

// 👉 Create a new form
const createForm = async (req, res) => {
  try {
    if (!req.body || !req.body.title || !req.body.fields) {
      return res.status(400).json({ error: 'Title and fields are required' });
    }

    const form = new Form(req.body);
    await form.save();
    res.status(201).json(form);
  } catch (error) {
    console.error('❌ Error creating form:', error.message);
    res.status(500).json({ error: error.message });
  }
};

// 👉 Get all forms
const getForms = async (req, res) => {
  try {
    const forms = await Form.find().sort({ createdAt: -1 }); // optional: latest first
    res.json(forms);
  } catch (error) {
    console.error('❌ Error fetching forms:', error.message);
    res.status(500).json({ error: error.message });
  }
};

// 👉 Get form by ID (with validation)
const getFormById = async (req, res) => {
  try {
    const formId = req.params.id;

    if (!formId || formId === 'undefined') {
      return res.status(400).json({ error: 'Invalid or missing form ID' });
    }

    const form = await Form.findById(formId);

    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }

    res.json(form);
  } catch (error) {
    console.error('❌ Error fetching form by ID:', error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createForm, getForms, getFormById };
