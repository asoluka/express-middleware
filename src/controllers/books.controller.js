function getAllBooks(req, res) {
  res.status(200).json({
    message: "Application running",
  });
}

function createBook(err, req, res, next) {
  // if (err) console.log("error being logged", err);
  res.status(201).json({ message: "Book creation request received" });
}

module.exports = {
  getAllBooks,
  createBook,
};
