import mongoose from "mongoose";

// create connection
const mongoDBConnect = async () => {
  try {
    const connect = mongoose.connect(process.env.MONGO);
    console.log("MongoDB Connected successful");
  } catch (error) {
    console.log(error.message);
  }
};

// export connection
export default mongoDBConnect;
