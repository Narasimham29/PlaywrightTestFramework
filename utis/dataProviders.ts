import fs from 'fs'
import { parse } from "csv-parse/sync"

export class DataProvider {

    static readDataFromJSON(filepath: string) {
        let data : any= JSON.parse(fs.readFileSync(filepath, 'utf8'))
        return data;
    }

    static readDataFromCSV(filepath: string) {
        let data :any = parse(fs.readFileSync(filepath), { columns: true, skip_empty_lines: true })
        return data;
    }
}