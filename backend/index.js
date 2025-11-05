import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';
import chatbotRoutes from './routes/chatbot.route.js';
const app = express();

// ✅ Correct method name
dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())

// Database connection code
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.use("/bot/v1/", chatbotRoutes)


app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
