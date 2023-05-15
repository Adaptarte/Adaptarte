import dotenv from "dotenv";

import { app } from "./app";

dotenv.config();

const { PORT = 8000 } = process.env;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
