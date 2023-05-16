import * as functions from "firebase-functions";

import { app as expressApp } from "./app";

const app = functions.https.onRequest(expressApp);

export { app };
