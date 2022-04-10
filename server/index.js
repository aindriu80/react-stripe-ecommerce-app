const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './.env' });
const createCheckoutSession = require('./api/checkout');
 
const compression = require('compression');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(
  cors({
    origin: 'https://localhost:3000',
  })
);

app.use(compression());
app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`Server up and running on port 8080 `);
});

app.post('/create-checkout-session', createCheckoutSession);

app.listen(port, () => console.log('Server listening on port', port));
