const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './.env' });

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors({ origin: true }));

app.get('/', (req, res) => res.send(`Server up and running on port 8080 `));

app.listen(port, () => console.log('Server listening on port', port));
