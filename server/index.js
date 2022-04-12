const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './.env' });
const createCheckoutSession = require('./api/checkout');
const webhook = require('./api/webhook');

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
// app.use(
//   express.json({
//     verify: (req, res, buffer) => (req['rawBody'] = buffer),
//   })
// );

app.get('/', (req, res) => {
  res.send(`Server up and running on port 8080 `);
});

app.post('/create-checkout-session', createCheckoutSession);

app.post('/webhook', webhook);

app.listen(port, () => console.log('Server listening on port', port));
