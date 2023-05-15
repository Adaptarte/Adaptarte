import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send("Welcome to Adaptarte's API");
});

export { app };
