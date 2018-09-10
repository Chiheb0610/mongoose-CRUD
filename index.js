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

async function getContactList() {
  const result = await Person.find();
  console.log(result);
}
async function getbyId(id) {
  const result = await Person.find({ id });
  console.log(result);
}
async function getByCondition(params) {
  const result = await Person.find({ ...params });
  console.log(result);
}
async function deleteByCondition(params) {
  await person.deleteMany({ ...params });
}
async function updateByCondition(findParam, changeParam) {
  const person = await Person.find(...findParam);
  if (!person) return;
  person.set({ ...changeParam });
}
const entree1 = {
  lastName: "ben lahmer",
  firstName: "fares",
  email: "fares@gmail.com",
  age: 26
};
const entree2 = {
  lastName: "kefi",
  firstName: "seif",
  email: "kefi@gmail.com",
  age: 15
};
const entree3 = {
  lastName: "fatnassi",
  firstName: "sarra",
  email: "sarra@gmail.com",
  age: 40
};
const entree4 = { lastName: "ben yahia", firstName: "rym", age: 4 };
const entree5 = { lastName: "cherif", firstName: "sami", age: 3 };
// addPerson(entree1);
// addPerson(entree2);
// addPerson(entree3);
// addPerson(entree4);
// addPerson(entree5);
// getContactList();
// getbyId();
getByCondition({ age: { $gt: 18 } });

getByCondition({ age: { $gt: 18 }, firstName: /.*rr.*/i });
// deleteByCondition({ age:{ $lt: 5} });
// getContactList();
