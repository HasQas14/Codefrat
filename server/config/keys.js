const GOOGLE_TOKENS = {
  GOOGLE_ACCESS_TOKEN: "1012220327745-8iu978h7tf2809hsmard65e9djkfsm7v.apps.googleusercontent.com",
  GOOGLE_TOKEN_SECRET: "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",
};

// const DB_USER = "SOME USER";
// const DB_PASSWORD = "SOME PASSWPORD";
const MONGODB = {
  MONGODB_URI: "mongodb+srv://qaseem14:qaseem14@cluster0.vnngh.mongodb.net/codefratdb?retryWrites=true&w=majority"
};

const SESSION = {
  COOKIE_KEY: "thisappisawesome",
};

const KEYS = {
  ...GOOGLE_TOKENS,
  ...MONGODB,
  ...SESSION,
};

module.exports = KEYS;
