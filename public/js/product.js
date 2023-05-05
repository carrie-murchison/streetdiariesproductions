const express = require('express');
const router = express.Router();

// GET /products - display the list of products
router.get('/', (req, res) => {
  const products = [
    {
      name: 'Street Diaries T-Shirt',
      image: '/img/tshirt.jpg',
      price: 1999
    },
    {
      name: 'Street Diaries Hat',
      image: '/img/hat.jpg',
      price: 1499
    }
  ];

  res.render('products', { products });
});

module.exports = router;
