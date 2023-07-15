const app = require("./app"); // the actual Express application
const config = require("./utils/config");
const logger = require("./utils/logger");

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});

// const express = require("express");
// const app = express();
// const cors = require("cors");
// require("dotenv").config();
// const Note = require("./models/note");
// const mongoose = require("mongoose");

// // if (process.argv.length < 3) {
// //   console.log("give password as argument");
// //   process.exit(1);
// // }

// // const password = process.argv[2];
// // // console.log("password: " + password);
// // const url = `mongodb+srv://sampadsarker777:${password}@cluster0.0w9fvb9.mongodb.net/noteApp?retryWrites=true&w=majority`;

// // mongoose.set("strictQuery", false);
// // mongoose.connect(url);

// // const noteSchema = new mongoose.Schema({
// //   content: String,
// //   important: Boolean,
// // });

// // noteSchema.set("toJSON", {
// //   transform: (document, returnedObject) => {
// //     returnedObject.id = returnedObject._id.toString();
// //     delete returnedObject._id;
// //     delete returnedObject.__v;
// //   },
// // });

// // const Note = mongoose.model("Note", noteSchema);

// const url = process.env.MONGODB_URI;

// console.log("connecting to >>", url);

// mongoose
//   .connect(url)
//   .then(() => {
//     console.log("connected to MongoDB successfully");
//   })
//   .catch((error) => {
//     console.log("error connecting to MongoDB:", error.message);
//   });

// const requestLogger = (request, response, next) => {
//   console.log("Method:", request.method);
//   console.log("Path:  ", request.path);
//   console.log("Body:  ", request.body);
//   console.log("---");
//   next();
// };

// const unknownEndpoint = (request, response) => {
//   response.status(404).send({ error: "unknown endpoint" });
// };

// app.use(cors());
// app.use(express.static("dist"));
// app.use(express.json());
// app.use(requestLogger);
// // app.use(unknownEndpoint); //not work properly

// // let notes = [
// //   {
// //     id: 1,
// //     content: "HTML is easy",
// //     important: true,
// //   },
// //   {
// //     id: 2,
// //     content: "Browser can execute only JavaScript",
// //     important: false,
// //   },
// //   {
// //     id: 3,
// //     content: "GET and POST are the most important methods of HTTP protocol",
// //     important: true,
// //   },
// // ];

// app.get("/", (req, res) => {
//   res.send("<h1>Hello World! Notes backend💻💻🖥🖥</h1>");
// });

// //get all resources from mongodb
// app.get("/api/notes", (req, res) => {
//   Note.find({}).then((notes) => {
//     res.json(notes);
//   });
// });

// // const generateId = () => {
// //   const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
// //   return maxId + 1;
// // };
// //create a new note
// app.post("/api/notes", (request, response, next) => {
//   const body = request.body;

//   if (!body.content) {
//     return response.status(400).json({
//       error: "content missing",
//     });
//   }

//   // const note = {
//   //   id: generateId(),
//   //   content: body.content,
//   //   important: body.important || false,
//   // };

//   // notes = notes.concat(note);
//   // response.json(note);

//   const note = new Note({
//     content: body.content,
//     important: body.important || false,
//   });

//   note
//     .save()
//     .then((savedNote) => {
//       response.json(savedNote);
//     })
//     .catch((error) => next(error));
// });

// //get a note from mongodb  by postman
// app.get("/api/notes/:id", (request, response, next) => {
//   // const id = Number(request.params.id);
//   // const note = notes.find((note) => note.id === id);

//   // if (note) {
//   //   response.json(note);
//   // } else {
//   //   response.status(404).end();
//   // }

//   Note.findById(request.params.id)
//     .then((note) => {
//       // response.json(note);
//       if (note) {
//         response.json(note);
//       } else {
//         response.status(404).end();
//       }
//     })
//     .catch((error) => {
//       console.log(error)
//       // response.status(400).send({ error: 'malformed id' })
//       next(error);
//     });
// });

// //replace a note with a request body by postman
// app.put("/api/notes/:id", (request, response, next) => {
//   // const body = request.body;

//   // const note = {
//   //   content: body.content,
//   //   important: body.important,
//   // };

//   const { content, important } = request.body;

//   Note.findByIdAndUpdate(
//     request.params.id,
//     { content, important },
//     { new: true, runValidators: true, context: "query" }
//   )
//     .then((updatedNote) => {
//       response.json(updatedNote);
//     })
//     .catch((error) => next(error));
// });

// //delete a note by id using postman
// app.delete("/api/notes/:id", (request, response, next) => {
//   // const id = Number(request.params.id);
//   // notes = notes.filter((note) => note.id !== id);
//   // response.status(204).end();

//   Note.findByIdAndRemove(request.params.id)
//     .then(() => {
//       response.status(204).end("<h1>deleted successfully</h1>");
//     })
//     .catch((error) => next(error));
// });

// app.use(unknownEndpoint);

// const errorHandler = (error, request, response, next) => {
//   console.error(error.message);

//   if (error.name === "CastError") {
//     return response.status(400).send({ error: "malformatted id" });
//   } else if (error.name === "ValidationError") {
//     return response.status(400).json({ error: error.message });
//   }

//   next(error);
// };
// app.use(errorHandler);
// // const PORT = 3001;
// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });

// // const PORT = process.env.PORT || 3001;
// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });

// const PORT = process.env.PORT;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
