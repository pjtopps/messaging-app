const express = require('express')

const app = express();
app.get('/', (erq, res) => res.send('hellloooo there'));
app.listen(3000);
