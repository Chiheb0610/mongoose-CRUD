const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/hamadi")
  .then(() => console.log("cezfefefzezezected"))
  .catch(err => console.log(err));
const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});
const Book = mongoose.model("book", bookSchema);
const Book1 = mongoose.model("book1", bookSchema);
async function createBook() {
  const book = new Book({
    name: "the prince of milk",
    author: "exurb1a",
    tags: ["sci-fi", "spacy-shit"],
    isPublished: true
  });
  const result = await book.save();
  console.log(result);
}
async function getBooks() {
  const books = await Book.find().sort({ date: -1 });
  console.log(books);
}

getBooks();
