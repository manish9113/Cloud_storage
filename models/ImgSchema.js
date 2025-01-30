import mongoose from 'mongoose';


const imgSchema=mongoose.Schema({
    filename:{
        type:String,
        required:true
    },
    public_id:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    }

})

const imgModel=mongoose.model('Cloudinary',imgSchema);

export default imgModel;