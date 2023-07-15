const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url =
  `mongodb+srv://sampadsarker777:${password}@cluster0.0w9fvb9.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set("strictQuery", false);
mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

// const note = new Note({
//   content: "JS is Easy?",
//   important: true,
// });

// note.save().then(result => {
//   // console.log(`${result} note saved!`)
//   console.log(`note saved!`)

//   mongoose.connection.close()
// })

Note.find({ important: false }).then((result) => {
  // console.log(">>>>>>>>>>",result)
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
