const router = require("express").Router();

router.get("/", (req, res) => {
   res.render("pages/buckets");
});

router.get("/:id", (req, res) => {
   res.render("pages/bucket-details");
});

module.exports = router;
