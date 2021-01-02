// dependencies
const express = require("express");
const app = express();

// server PORT
const PORT = 3000;

// basic routes
app.get("/", (req, res) => {
   res.send("hello world");
});

// start server
app.listen(PORT, () => {
   console.log(`server is running on PORT: ${PORT}`);
});
