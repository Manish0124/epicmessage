import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?:number
}

const connection : ConnectionObject = {}

console.log(connection);


async function dbConnect() : Promise<void> {
    if(connection.isConnected){
        console.log("Already connected to db");
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI || '' , {} )

        connection.isConnected = db.connections[0].readyState

        console.log("Db connected Successfully");
        
    } catch (error) {

        console.log("failed to connect db", error);
        
        process.exit(1)
    }


}

export default dbConnect;