'use strict';

const express = require('express');
// Constants
const PORT = 9090;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) =>{
	res.send('Hello Node.js v 2.0\n New image has been deployed!');
});

app.listen(PORT, HOST);
