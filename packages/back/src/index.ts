import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

app.get("/", (_, res) => {
  res.send("Welcome to Adaptarte's API");
});

const { PORT = 8000 } = process.env;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
