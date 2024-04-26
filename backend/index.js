const express = require('express');
const bodyParser = require('body-parser');
const detailsRoutes = require('./routes/detailsRoutes');

const app = express();

app.use(bodyParser.json());

app.use(detailsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
