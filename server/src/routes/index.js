const express = require("express");
const router = express.Router();
const portableDocumentFormatRouter = require("./portableDocumentFormat.routes");

router.use("/pdf", portableDocumentFormatRouter);

module.exports = router