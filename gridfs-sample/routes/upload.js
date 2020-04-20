const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const mongoose = require("mongoose");
require("dotenv").config();

module.exports = (app) => {
  // DB
  const mongoURI = process.env.MONGO_URI;

  // connection
  const conn = mongoose.createConnection(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  let gfs;
  conn.once("open", () => {
    // init stream
    gfs = new mongoose.mongo.GridFSBucket(conn.db, {
      bucketName: "fs",
    });
  });

  const storage = new GridFsStorage({ url: mongoURI });

  const upload = multer({
    storage,
  });

  app.post("/upload", upload.single("file"), (req, res) => {
    res.redirect("/");
  });

  app.get("/image/:filename", (req, res) => {
    // console.log('id', req.params.id)
    const file = gfs
      .find({
        filename: req.params.filename,
      })
      .toArray((err, files) => {
        if (!files || files.length === 0) {
          return res.status(404).json({
            err: "no files exist",
          });
        }
        gfs.openDownloadStreamByName(req.params.filename).pipe(res);
      });
  });

  app.get("/", (req, res) => {
    if (!gfs) {
      console.log(gfs);
      console.log("some error occured, check connection to db");
      res.send("some error occured, check connection to db");
      process.exit(0);
    }
    console.log(gfs);
    gfs.find().toArray((err, files) => {
      // check if files
      if (!files || files.length === 0) {
        return res.render("index", {
          files: false,
        });
      } else {
        const f = files
          .map((file) => {
            if (
              file.contentType === "image/png" ||
              file.contentType === "image/jpeg"
            ) {
              file.isImage = true;
            } else {
              file.isImage = false;
            }
            console.log(file);
            return file;
          })
          .sort((a, b) => {
            return (
              new Date(b["uploadDate"]).getTime() -
              new Date(a["uploadDate"]).getTime()
            );
          });

        return res.render("index", {
          files: f,
        });
      }
    });
  });

  // files/del/:id
  // Delete chunks from the db
  app.post("/files/del/:id", (req, res) => {
    gfs.delete(new mongoose.Types.ObjectId(req.params.id), (err, data) => {
      if (err) return res.status(404).json({ err: err.message });
      res.redirect("/");
    });
  });
};
