const express = require('express');
const app = express();
const port = 80; //預設為 8080

app.get('/', (req, res) => res.send('Hello World!世界你好！！'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
