import parseJson from 'parse-json';
import fs from 'fs';

export function jsonParse(filename) {
    const json = fs.readFileSync(filename);
    const parsedJson = parseJson(json);
    return parsedJson;
}