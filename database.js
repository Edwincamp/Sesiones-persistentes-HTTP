import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://Edwincampos:Edwin230411@clusteredwin.txagr.mongodb.net/API-AWI4_0-230425?retryWrites=true&w=majority&appName=Clusteredwin") ;
                           
    console.log("Conectado a MongoDB Atlas");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
  }
};

export default connectDB;