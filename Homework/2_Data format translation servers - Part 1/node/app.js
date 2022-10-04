import express from 'express';
import { yamlParse } from './service/yamlService.js';
import { jsonParse } from './service/jsonService.js';
import { csvParse } from './service/csvService.js';
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const app = express();


const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'File Format API',
        version: '0.0.1',
      },
    },
    apis: ['./*.js'], 
};
  
const openapiSpecification = swaggerJsDoc(options);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(openapiSpecification));


/**
 * @openapi
 * /yaml:
 *   get:
 *     summary: Returns content of parsed yaml file
 *     description: Get yaml
 *     responses:
 *       200:
 *         description: Returns object of parsed yaml contents.
 */
app.get("/yaml", (req, res) => {
    const parsedYaml = yamlParse('./../files/car.yaml');
    res.send(parsedYaml);
});


/**
 * @openapi
 * /json:
 *   get:
 *     summary: Returns content of parsed json file
 *     description: Get json
 *     responses:
 *       200:
 *         description: Returns object of parsed json contents.
 */
app.get("/json", (req, res) => {
    const parsedJson = jsonParse('./../files/car.json');
    res.send(parsedJson);
});

/**
 * @openapi
 * /csv:
 *   get:
 *     summary: Returns content of parsed csv file
 *     description: Get csv
 *     responses:
 *       200:
 *         description: Returns array of objects contained in csv file.
 */
app.get("/csv", (req, res) => {
    const parsedCsv = csvParse('./../files/car.csv');
    res.send(parsedCsv);
});


app.listen(3000, () => {
    console.log("Server is running on", 3000);
});