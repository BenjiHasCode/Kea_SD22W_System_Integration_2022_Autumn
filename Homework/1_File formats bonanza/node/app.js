// yaml, json, csv
import parseJson from 'parse-json';
import { parse } from 'csv-parse';
import YAML from 'yaml';

import fs from 'fs';

//yaml example
console.log('Parsing YAML');
const yaml = fs.readFileSync('./../files/car.yaml', 'utf8');
const yamlCar = YAML.parse(yaml);
console.log(yamlCar);

//json example
console.log('Parsing JSON');
const json = fs.readFileSync('./../files/car.json');
const jsonCar = parseJson(json);
console.log(jsonCar);


//csv example
const cars = [];
console.log('Parsing CSV');
const csv = fs.readFileSync('./../files/car.csv');
parse(csv, {
    columns: true
}).on('readable', () => {
    let car;
    while ((car = this.read()) !== null) {
        cars.push(car);
    }
});;

console.log(cars);