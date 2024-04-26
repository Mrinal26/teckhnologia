const express = require('express');
const bodyParser = require('body-parser');
const detailsRoutes = require('./routes/detailsRoutes');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const sequelize = require('./db/index');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

app.use('/details', upload.single('resume'), detailsRoutes);

sequelize.sync().then(() => {
  console.log('Database connected');
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Database connection error:', err);
});
