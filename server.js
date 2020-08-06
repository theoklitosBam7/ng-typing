const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("./dist/typing"));

app.get("/*", (req, res, next) => {
  res.sendFile("index.html", { root: "dist/typing" }, (err) => {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log("Sent:", fileName);
    }
  });
});

app.listen(PORT, () => {
  console.log(`App listening at port: ${PORT}`);
});
