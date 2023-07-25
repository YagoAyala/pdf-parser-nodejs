const express = require("express");
const router = express.Router();
const portableDocumentFormatController = require("../controllers/portableDocumentFormat.controller")

router.post("/create", portableDocumentFormatController.createPdfController)

module.exports = router