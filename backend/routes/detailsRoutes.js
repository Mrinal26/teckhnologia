const express = require('express');
const router = express.Router();
const detailsController = require('../controllers/detailsController');
const multer= require('multer');

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

router.post('/details', upload.single('resume'), detailsController.createDetail);

router.get('/details', detailsController.getDetails);

router.delete('/details/:id', detailsController.deleteDetail);

module.exports = router;
