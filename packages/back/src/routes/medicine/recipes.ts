import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.send("medicine recipes");
});

export { router as medicineRecipesRouter };
