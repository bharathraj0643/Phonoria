import mongoose from "mongoose";
import { getDBName } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${getDBName()}`
    );
    console.log(
      `\n MongoDB connected! DB host : ${connectionInstance.connection.host} , DB name : ${getDBName()} , DB env : ${process.env.DB_ENV}`
    );
  } catch (error) {
    console.log("MongoDB connection error", error);
    process.exit(1);
  }
};

export default connectDB;
