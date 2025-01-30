import express from 'express'
import upload from '../middlewares/multerStorage.js';
import Uploadimg from '../controllers/imgController.js';

const router=express.Router();


router.get('/',(req,res)=>{
  res.render('index.ejs',{url:null});
})
router.post('/upload', upload.single('file'), Uploadimg);

export default router;

