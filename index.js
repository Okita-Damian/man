const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json('hello World')
});

const port = 2000;
app.listen(port, () => console.log(`server running on port ${port}`));