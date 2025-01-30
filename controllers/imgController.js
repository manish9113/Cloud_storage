import { v2 as cloudinary } from 'cloudinary';
import imgModel from '../models/ImgSchema.js';


// Configuration
cloudinary.config({
    cloud_name: 'dnjwfsnsj',
    api_key: '542922579146395',
    api_secret: 'gzFTSlQD5hohY_x8S4waUsRzmV8' 
});

const Uploadimg=async(req,res)=>{
    try{
        const File=req.file.path;
        const cloudinaryResponse=await cloudinary.uploader.upload(File,{
            folder:'images_1'
        })
        console.log('Cloudinary Response:', cloudinaryResponse);
        const savetodb=await imgModel.create({
            filename:req.file.originalname,
            public_id: cloudinaryResponse.public_id,
            imageUrl: cloudinaryResponse.secure_url,
        })
        console.log("save to mongodb ",savetodb);
        res.render('index.ejs', { url: cloudinaryResponse.secure_url })
    }
    catch(error){
        console.log('error while loading image to cloud',error.message);
    }
}

export default Uploadimg;

