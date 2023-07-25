const express = require("express");
const router = express.Router();
const portableDocumentFormatController = require("../controllers/portableDocumentFormat.controller")

router.post("/create", portableDocumentFormatController.createPdfController)
router.get("/get_all", portableDocumentFormatController.getAllPdfsController)
router.get("/get_by_id/:id", portableDocumentFormatController.getPdfByIdController)
router.put("/update", portableDocumentFormatController.updatePdfController)
router.delete("/delete/:id", portableDocumentFormatController.deletePdfController)


module.exports = router