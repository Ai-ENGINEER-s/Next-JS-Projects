import mongoose from "mongoose" ; 




const connectionToDatabase = async ()=>{


    try {
     await mongoose.connect(process.env.MongoURL) ; 
     console.log("connection to mongodatabase successfully")
     
     console.log("connected ")
    } catch (error) {
       console.log(error) 
    }
}

export default connectionToDatabase
