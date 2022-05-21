const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI = "mongodb+srv://qaseem14:qaseem14@cluster0.vnngh.mongodb.net/codefratdb?retryWrites=true&w=majority";

const InitiateMongoServerQuestion = async () => {
  try {
    await mongoose.createConnection(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connected to DB  Question!!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServerQuestion;
