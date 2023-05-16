import express from "express";

import { examsRouter } from "routes/exams";
import { foodRouter } from "routes/food";
import { medicineRouter } from "routes/medicine";

const app = express();
app.use("/exams", examsRouter);
app.use("/food", foodRouter);
app.use("/medicine", medicineRouter);

app.get("/", (_, res) => {
  res.send("Welcome to Adaptarte's API");
});

export { app };
