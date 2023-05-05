const express = require('express');
const router = express.Router();

// GET /cart - display the cart page
router.get('/', (req, res) => {
  res.render('cart');
});

module.exports = router;
