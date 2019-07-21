import {Application} from 'express';
import {authenticate} from './request-handlers';

const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app: Application = express();
app.use(bodyParser.json());
app.use(cors());
app.route('/api/pin').post(authenticate);

const port = process.env.PORT || 9999;

app.listen(port, () => {
    console.log('Mock Image Index API running at http://localhost:' + port);
});


