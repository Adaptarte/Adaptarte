import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.send("medicine intakes");
});

export { router as medicineIntakesRouter };
