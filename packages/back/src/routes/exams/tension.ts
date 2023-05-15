import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.send("exams tension");
});

export { router as examsTensionRouter };
