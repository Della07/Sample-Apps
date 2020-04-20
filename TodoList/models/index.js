const mongoose = require("mongoose");

const dbRoute = process.env.MONGOURI;

mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// mongoose.connect("mongodb://localhost/todo-app", {
//   // connecting to the mongodb database name: "todo-app" locally
//   keepAlive: true, // keeping the connection alive
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// mongoose.set("debug", true) // enabling debugging information to be printed to the console for debugging purposes
// mongoose.Promise = Promise // setting mongoose's Promise to use Node's Promise

module.exports.Todo = require("./todo"); // requiring the todo model that we just created in mongodb
