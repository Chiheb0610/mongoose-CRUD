const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/hamadi")
  .then(() => console.log("connected"))
  .catch(err => console.log(err));
const personSchema = new mongoose.Schema({
  lastName: String,
  firstName: String,
  email: String,
  age: Number
});
const Person = mongoose.model("contact-list", personSchema);
async function addPerson(param) {
  const person = new Person({
    ...param
  });
  const result = await person.save();
  console.log(result);
}

async function getBooks() {
  const books = await Book.find().sort({ date: -1 });
  console.log(books);
}
const entree1 = { lastName: "ben lahmer", firstName: "fares", email: "fares@gmail.com", age: 26 };
const entree2 = { lastName: "kefi", firstName: "seif", email: "kefi@gmail.com", age: 15 };
const entree3 = { lastName: "fatnassi", firstName: "sarra", email: "sarra@gmail.com", age: 40 };
const entree4 = { lastName: "ben yahia", firstName: "rym", age: 4 };
const entree5 = { lastName: "cherif", firstName: "sami", age: 3 };
addPerson(entree1)
addPerson(entree2)
addPerson(entree3)
addPerson(entree4)
addPerson(entree5)
