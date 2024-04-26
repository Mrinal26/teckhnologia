const express = require('express');
const bodyParser = require('body-parser');
const detailsRoutes = require('./routes/detailsRoutes');
const multer= require('multer');
const path = require('path');
const cors= require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const storage= multer.diskStorage({
  destination :(req, file, cb)=>{
    cb(null, 'uploads');

  },
  filename: (req, file, cb) =>{
    const uniquesuffix = Date.now() + '-' +Math.round(Math.random()*1E9);
    cb(null, uniquesuffix +path.extname(file.originalname));
  }
});

const upload= multer({storage});

// app.post('/details' , upload.single('resume'), (req,res)=>{
//   const {name}= req.body;
//   const resumePath= req.file?req.file.path:null;
//   console.log(resumePath);

//   res.json({message:'uploaded successfully'});
// })


app.use(detailsRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = upload;