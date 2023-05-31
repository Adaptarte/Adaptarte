import { https } from "firebase-functions";

import { app as expressApp } from "./app";

const app = https.onRequest(expressApp);

export { app };
