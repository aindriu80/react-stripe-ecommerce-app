const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './.env' });
const createCheckoutSession = require('./api/checkout');

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors({ origin: true }));


app.get('/', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'https://localhost:3000');
  res.send(`Server up and running on port 8080 `);
});

app.post('/create-checkout-session', createCheckoutSession);

app.listen(port, () => console.log('Server listening on port', port));
