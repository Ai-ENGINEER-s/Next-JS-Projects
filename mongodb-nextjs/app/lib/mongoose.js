import mongoose from "mongoose" ; 

const connectionToDatabase = async()=>{

    try {
        await mongoose.connect(process.env.MongoURL) ; 
        console.log("connected Successfully")
    } 
    catch (error) 
    {

        console.log(error)
    }

}


export default connectionToDatabase
