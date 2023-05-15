import { Router } from "express";

import { medicineIntakesRouter } from "./intakes";
import { medicineRecipesRouter } from "./recipes";

const router = Router();
router.use("/intakes", medicineIntakesRouter);
router.use("/recipes", medicineRecipesRouter);

export { router as medicineRouter };
