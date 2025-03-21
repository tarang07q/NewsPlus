const express = require('express');
const axios = require('axios');
const protect = require('../config/authmiddleWare');
const router = express.Router();

router.get('/', protect, async (req, res) => {
  const { category } = req.query;
  try {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${category}&apiKey=${process.env.NEWS_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news' });
  }
});

module.exports = router;