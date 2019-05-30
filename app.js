const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hey `dere world');
});

app.get('/about', (req, res) => {
  res.send('i like long walks on the beach');
})

app.get('/contact', (req, res) => {
    res.send('my info is........');
  })

app.listen(4000, () => console.log('listening on 4000'));