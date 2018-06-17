const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare();

const app = express();
app.use(handle);

app.listen(14000);
console.log('listening on port 14000');
