const PortableDocumentFormatModel = require("../models/portableDocumentFormat.model");
const getErrorMessage = require("../utils/getErrorMessage");

const createPdfService = async (pdfData) => {
  try {
    const newPdf = await PortableDocumentFormatModel.create(pdfData);
    return newPdf;
  } catch (error) {
    throw new Error(`Failed to create PDF record, Error: ${getErrorMessage(error)}`);
  }
};

const getAllPdfsService = async () => {
  try {
    const pdfs = await PortableDocumentFormatModel.findAll();
    return pdfs;
  } catch (error) {
    throw new Error('Failed to get all PDFs');
  }
};

const getPdfByIdService = async (pdfId) => {
  try {
    const pdf = await PortableDocumentFormatModel.findByPk(pdfId);
    if (!pdf) {
      throw new Error('PDF not found');
    }
    return pdf;
  } catch (error) {
    throw new Error(`Failed to get PDF by ID, Error: ${getErrorMessage(error)}`);
  }
};

const updatePdfService = async (pdfId, pdfData) => {
  try {
    console.log(pdfId, "pdfId")
    const pdf = await PortableDocumentFormatModel.findByPk(pdfId);
    if (!pdf) {
      throw new Error('PDF not found');
    }
    await pdf.update(pdfData);
    return pdf;
  } catch (error) {
    throw new Error(`Failed to update PDF record, Error: ${getErrorMessage(error)}`);
  }
};

const deletePdfService = async (pdfId) => {
  try {
    const pdf = await PortableDocumentFormatModel.findByPk(pdfId);
    if (!pdf) {
      throw new Error('PDF not found');
    }
    await pdf.destroy();
  } catch (error) {
    throw new Error(`Failed to delete PDF record, Error: ${getErrorMessage(error)}`);
  }
};


module.exports = {
  createPdfService,
  getPdfByIdService,
  updatePdfService,
  deletePdfService,
  getAllPdfsService
};
