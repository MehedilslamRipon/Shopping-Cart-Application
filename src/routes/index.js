const bucketRouter = require("./buckets.routes");

module.exports = function (app) {
   app.use("/buckets", bucketRouter);
};
