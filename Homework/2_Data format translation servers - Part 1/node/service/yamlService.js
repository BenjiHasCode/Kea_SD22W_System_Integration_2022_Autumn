import YAML from 'yaml';
import fs from 'fs';

export function yamlParse(filename) {
    const yaml = fs.readFileSync(filename, 'utf8');
    const parsedYaml = YAML.parse(yaml);
    return parsedYaml;
}