const express = require('express');
const router = express.Router();

// GET /checkout - display the checkout page
router.get('/', (req, res) => {
  res.render('checkout');
});

// POST /charge - process the payment
router.post('/charge', (req, res) => {
  const stripe = require('stripe')('sk_test_1234567890abcdefghijklmnopqrstuvwxyz');

  const amount = 999;

  stripe.customers.create({
    email: req.body.email,
    source: req.body.stripeToken
  })
  .then(customer => stripe.charges.create({
    amount,
    description: 'Purchase T-Shirt',
    currency: 'usd',
    customer: customer.id
  }))
  .then(() => {
    res.render('success');
  })
  .catch(() => {
    res.render('error');
  });
});

module.exports = router;
