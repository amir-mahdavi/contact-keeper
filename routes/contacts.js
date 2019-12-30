const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get contacts
// @access  Private
router.get('/', (req, res) => {
  res.send({ contacts: [] });
});

// @route   POST api/contacts
// @desc    Create a contact
// @access  Private
router.post('/', (req, res) => {
  res.send({ contact: 'contact' });
});

// @route   PUT api/contacts/:id
// @desc    Update a contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send({ contact: 'contact' });
});

// @route   DELETE api/contacts/:id
// @desc    Delete a contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send({ contact: 'contact' });
});

module.exports = router;
