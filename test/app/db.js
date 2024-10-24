import mongoose from 'mongoose' ; 




const connectToDatabase = async ()=>{

    try {
        const response = await mongoose.connect(
            process.env.db_url 
        ) ; 

        console.log("connected successfully to mongoDB")


    } catch (error) {
        console.log("error while connecting to database : " , error)
        
    }


}


export default  connectToDatabase 