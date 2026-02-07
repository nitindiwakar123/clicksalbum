import mongoose from "mongoose";

export const connectDatabase = async () => {
  const uri =
    process.env.MONGO_URI || "mongodb://localhost:27017/clicksalbum";

  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
  });

  mongoose.connection.on("error", (error) => {
    console.error("MongoDB connection error", error);
  });

  await mongoose.connect(uri, {
    autoIndex: true,
  });
};
