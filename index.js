const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
app.get('/products', (req, res) => {
  res.send('This is the products page');
});
