import { Router } from "express";

import { examsTensionRouter } from "./tension";

const router = Router();
router.use("/tension", examsTensionRouter);

export { router as examsRouter };
