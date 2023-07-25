const CONST = require("../CONSTANTS.JS");
const portableDocumentFormatService = require("../services/portableDocumentFormat.service");

const createPdfController = async (req, res) => {
  try {
    const pdfData = req.body;
    const { status } = CONST.CREATE_REQUEST;

    const newEntity = await portableDocumentFormatService.createPdfService(pdfData);

    res.status(status).json(newEntity);
  } catch (error) {
    res.status(500).send({ Error: "X", ErrorMessage: error.message });
  }
};

const getAllPdfsController = async (req, res) => {
  try {
    const { status } = CONST.GET_ALL_REQUEST;

    const result = await portableDocumentFormatService.getAllPdfsService();

    res.status(status).send(result);
  } catch (error) {
    res.status(500).send({ Error: "X", ErrorMessage: error.message });
  }
};

const getPdfByIdController = async (req, res) => {
  try {
    const { status } = CONST.DELETED_REQUEST;
    const pdfId = req.params.id;

    const result = await portableDocumentFormatService.getPdfByIdService(pdfId);

    res.status(status).json(result);
  } catch (error) {
    res.status(500).send({ Error: "X", ErrorMessage: error.message });
  }
};

const updatePdfController = async (req, res) => {
  try {
    const { status } = CONST.UPDATE_REQUEST;
    const pdfData = req.body;
    const pdfId = pdfData.id;

    delete pdfData.id;

    const result = await portableDocumentFormatService.updatePdfService(
      pdfId,
      pdfData
    );
    res.status(status).json(result);
  } catch (error) {
    res.status(500).send({ Error: "X", ErrorMessage: error.message });
  }
};

const deletePdfController = async (req, res) => {
  try {
    const { status, response } = CONST.DELETED_REQUEST;
    const pdfId = req.params.id;

    await portableDocumentFormatService.deletePdfService(pdfId);

    res.status(status).json(response);
  } catch (error) {
    res.status(500).send({ Error: "X", ErrorMessage: error.message });
  }
};

module.exports = {
  createPdfController,
  getAllPdfsController,
  getPdfByIdController,
  updatePdfController,
  deletePdfController,
};
