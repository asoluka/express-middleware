const { format } = require("date-fns");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

async function customMorgan(req, res, next) {
  const datetime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const log = `${req.baseUrl} ${req.url} ${datetime}`;
  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
    }

    await fsPromises.appendFile(
      path.join(__dirname, "..", "logs", "routeLogs"),
      log
    );
  } catch (err) {
    console.log(err);
  }

  next();
}

module.exports = customMorgan;
