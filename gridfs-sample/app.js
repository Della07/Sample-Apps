const express = require("express");

const app = express();

app.use(express.json());
app.set("view engine", "ejs");

require("./routes/upload")(app);

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
