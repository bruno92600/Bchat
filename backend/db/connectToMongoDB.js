import mongoose from "mongoose";

const connectToMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Connecter a mongodb");
    } catch (error) {
        console.log("Erreur de connexion à MongoDB", error.message);
    }
}

export default connectToMongoDb;