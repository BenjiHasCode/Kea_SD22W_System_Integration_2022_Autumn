import fs from 'fs';
import { parse } from 'csv-parse/sync';

export function csvParse(filename) {
    const csvData = fs.readFileSync(filename);

    const records = parse(csvData, {
        columns: true,
        group_columns_by_name: true,
        cast: (value, context) => {
            if (context.header)
                return value;
            if (context.column === 'fast')
                return Boolean(value);
            else if (context.column === 'odometer') 
                return Number(value);
            
            return String(value);
        }
    });

    return records;
} 