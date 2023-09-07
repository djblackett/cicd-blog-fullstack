require("dotenv").config();

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.NODE_ENV === "test" ?
  process.env.TEST_MONGODB_URI :
  process.env.DATABASE_URL;

module.exports = {
  DATABASE_URL,
  PORT
};