import { Router } from "express";

import { foodIntakesRouter } from "./intakes";

const router = Router();
router.use("/intakes", foodIntakesRouter);

export { router as foodRouter };
