import dotenv from "dotenv";

dotenv.config();

const {
  AUTH_PROVIDER_X509_CERT_URL,
  AUTH_URI,
  CLIENT_EMAIL,
  CLIENT_ID,
  CLIENT_X509_CERT_URL,
  PRIVATE_KEY,
  PRIVATE_KEY_ID,
  PROJECT_ID,
  TOKEN_URI,
  TYPE,
  UNIVERSE_DOMAIN
} = process.env;

const serviceAccount = {
  authProviderX509CertUrl: AUTH_PROVIDER_X509_CERT_URL,
  authUri: AUTH_URI,
  clientEmail: CLIENT_EMAIL,
  clientId: CLIENT_ID,
  clientX509CertUrl: CLIENT_X509_CERT_URL,
  privateKey: PRIVATE_KEY,
  privateKeyId: PRIVATE_KEY_ID,
  projectId: PROJECT_ID,
  tokenUri: TOKEN_URI,
  type: TYPE,
  universeDomain: UNIVERSE_DOMAIN
};

export { serviceAccount };
