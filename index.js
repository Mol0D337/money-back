const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
// const { routes } = require('./src/routes');
const DB_URL = `mongodb+srv://molod337:Hello528194731307@first.dve8f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(DB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes.forEach(item => {
//   app.use(`/api/v1/${item}`, require(`./src/routes/${item}`))
// });

const PORT = 1488;
http.createServer({}, app).listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
