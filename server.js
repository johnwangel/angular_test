/*jshint esversion: 6 */
let PORT = process.env.PORT || 3000;
const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});

module.exports = app;