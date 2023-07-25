const fs = require('fs');
const pdfParser = require('pdf-parse');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Function to extract invoice details from the PDF text
function extractInvoiceDetails(pdfText) {
  const lines = pdfText.split('\n');
  const headerLine = lines.findIndex(line => line.includes('Valores Faturados'));
  const startLine = lines.findIndex(line => line.includes('Energia Elétrica'));

  if (headerLine === -1 || startLine === -1) {
    throw new Error('Invoice details not found in the PDF text.');
  }

  const dataLines = lines.slice(startLine + 1, lines.length - 1);
  const rows = dataLines.map(line => {
    const [item, unid, quant, precoUnit, valor, pisCofins, baseCalc, aliq, icms, tarifaUnit, icmsIcms] = line.trim().split(/\s+/);
    return {
      item,
      unid,
      quant,
      precoUnit,
      valor,
      pisCofins,
      baseCalc,
      aliq,
      icms,
      tarifaUnit,
      icmsIcms,
    };
  });

  return rows;
}

// Function to convert data to CSV and save it
async function convertToCsv(pdfPath, csvPath) {
  const pdfBuffer = fs.readFileSync(pdfPath);
  const pdfData = await pdfParser(pdfBuffer);
  const pdfText = pdfData.text;

  // Extract invoice details
  const invoiceDetails = extractInvoiceDetails(pdfText);

  // Set up the CSV writer
  const csvWriter = createCsvWriter({
    path: csvPath,
    header: [
      { id: 'item', title: 'Item' },
      { id: 'unid', title: 'Unid.' },
      { id: 'quant', title: 'Quant.' },
      { id: 'precoUnit', title: 'Preço Unit' },
      { id: 'valor', title: 'Valor (R$)' },
      { id: 'pisCofins', title: 'PIS/COFINS' },
      { id: 'baseCalc', title: 'Base Calc.' },
      { id: 'aliq', title: 'Aliq.' },
      { id: 'icms', title: 'ICMS' },
      { id: 'tarifaUnit', title: 'Tarifa Unit.' },
      { id: 'icmsIcms', title: 'ICMS ICMS' },
    ],
  });

  // Write the rows to the CSV file
  await csvWriter.writeRecords(invoiceDetails);

  console.log(`PDF converted and invoice details saved to ${csvPath}`);
}

// Call the function to convert the PDF to CSV
const pdfFilePath = './yago.pdf';
const csvFilePath = './ya.csv';

convertToCsv(pdfFilePath, csvFilePath)
  .catch(err => console.error('Error:', err));
