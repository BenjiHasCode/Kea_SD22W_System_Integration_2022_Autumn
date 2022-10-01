// yaml, json, csv
import { yamlParse } from './service/yamlService.js';
import { jsonParse } from './service/jsonService.js';
import { csvParse } from './service/csvService.js';

//yaml example
console.log('Parsing YAML');
const parsedYaml = yamlParse('./../files/car.yaml');
console.log(parsedYaml);

//json example
console.log('Parsing JSON');
const parsedJson = jsonParse('./../files/car.json');
console.log(parsedJson);

//csv example
console.log('Parsing CSV');
const parsedCsv = csvParse('./../files/car.csv');
console.log(parsedCsv);