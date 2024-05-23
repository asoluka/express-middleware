function validateBooksCreate(req, res, next) {
  const data = req.body;
  if (!data.title && !data.author) {
    throw new Error("Book title and author required");
  }
  next(err);
}

module.exports = validateBooksCreate;
