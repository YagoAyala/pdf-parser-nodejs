const portableDocumentFormatService = require("../services/portableDocumentFormat.service")

const createPdfController = async (req, res) => {
    try {
        const pdfData = req.body.newPdF
        await portableDocumentFormatService.createPdfService(pdfData)
        res.status(201).send({Success: "X"})
    } catch (error) {
        res.status(500).send({Error: "X", ErrorMessage: error.message})
    }
}

const getAllPdfsController = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const getPdfByIdController = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const updatePdfController = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const deletePdfController= async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    createPdfController,
    getAllPdfsController,
    getPdfByIdController,
    updatePdfController,
    deletePdfController
}