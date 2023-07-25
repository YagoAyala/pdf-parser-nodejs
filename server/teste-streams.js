const fs = require('fs');
const { Readable, Writable, Transform } = require('stream');
const csv = require('csv-parser');
const csvtojson = require("csvtojson");


const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// const routes = require("./src/routes/index")

const app = express();
const port = 3007;

const router = express.Router();
router.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(routes);

app.listen(port, () => {
	console.log(`Server port: ${port}`);
});

app.get("/rudolf", async (req, res) => {

const transformThisShitInSomeBeautiful = (jsonArray) => {
    const keyWords = ["Nº DO CLIENTE", "Nº DA INSTALAÇÃO", "Referente a", "Vencimento", "Total a pagar", "Itens da Fatura", "Unid.", "Quant.", "Preço Unit", "Valor (R$)", "Código de Débito Automático"]
    const clean = jsonArray.map(shit => {
        shit["Valores Faturados"]
    })
}

// Convert a csv file with csvtojson
const csvFilePath = './file.csv';
csvtojson()
  .fromFile(csvFilePath)
  .then(function(jsonArrayObj){ //when parse finished, result will be emitted here.
     console.log(jsonArrayObj); 
   })

   const jsonArray=await csvtojson().fromFile(csvFilePath);
   res.json(jsonArray)
})