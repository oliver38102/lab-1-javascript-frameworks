const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('route details....couldnt figure out how to make table');
});

app.get('/about', (req, res) => {
  res.send('My name is Owen Tanner and my student number is 200368970');
})

app.get('/contact', (req, res) => {
    res.send('my info is........');
  })

  const port = (process.env.PORT || 4000);
  app.listen(port, () => console.log(`listening on ${port}`));