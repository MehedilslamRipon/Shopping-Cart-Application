// dependencies
const express = require("express");
const cors = require("cors");
const path = require("path");
const router = require("./routes");

const app = express();

app.use(cors());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "../", "public")));

// server PORT
const PORT = 3000;

// basic routes
router(app);
app.get("/", (req, res) => {
   res.send("<h1> Hello World </h1>");
});

// middleware
app.use((req, res, next) => {
   const error = new Error();
   error.status = 404;
   next(error);
});

app.use((error, req, res, next) => {
   if (error.status === 404) {
      res.status(404);
      return res.render("errors/404");
   }

   res.status(500);
   res.render("error/500");
});

// start server
app.listen(PORT, () => {
   console.log(`server is running on PORT: ${PORT}`);
});
