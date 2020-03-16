'use strict';

const express = require('express');
// Constants
const PORT = 9090;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) =>{
	res.send('Hello Node.js v 1.0\n');
});

app.listen(PORT, HOST);