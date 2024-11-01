import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Succesfully Connected to Database");
  } catch (error) {
    console.log("There was an error connecting to the database:");
    console.log(error);
  }
};

export default connectToDatabase;
