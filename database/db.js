import mongoose from 'mongoose';


const Connection = async (USERNAME, PASSWORD)=>{
    try{
        const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@manishcluster.l7yaaki.mongodb.net/?retryWrites=true&w=majority&appName=manishcluster`
        await mongoose.connect(URL)
        console.log('database connected successfully');
    }
    catch(error){
        console.log('error while connecting database',error);
    }
}

export default Connection;