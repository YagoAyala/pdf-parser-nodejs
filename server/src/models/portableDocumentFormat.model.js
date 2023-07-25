const { DataTypes } = require("sequelize");
const db = require("../../database");

const PortableDocumentFormatModel = db.define("portable_document_format", {
  customer_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  reference_month: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  due_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  electric_energy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  injected_energy_HFP: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  non_ICMS_component: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  total_amount: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
  
module.exports = PortableDocumentFormatModel;
