import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.send("food intakes");
});

export { router as foodIntakesRouter };
