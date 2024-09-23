const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

// Create a contact message
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  const newContact = new Contact({ name, email, message });

  try {
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create contact message' });
  }
});

module.exports = router;