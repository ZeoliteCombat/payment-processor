// parser.js
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

class PaymentParser {
  constructor(config = {}) {
    this.config = {
      delimiter: ',',
      columns: true,
      skip_empty_lines: true,
      ...config
    };
  }

  parseFile(filePath) {
    try {
      const absolutePath = path.resolve(filePath);
      if (!fs.existsSync(absolutePath)) {
        throw new Error(`File not found: ${absolutePath}`);
      }

      const fileContent = fs.readFileSync(absolutePath, 'utf8');
      return parse(fileContent, this.config);
    } catch (error) {
      console.error(`Error parsing file: ${error.message}`);
      throw error;
    }
  }

  validateData(data) {
    if (!Array.isArray(data)) {
      throw new Error('Invalid data format: expected an array');
    }

    const requiredFields = ['transaction_id', 'amount', 'currency', 'date'];
    return data.every(record => {
      return requiredFields.every(field => field in record);
    });
  }
}

module.exports = PaymentParser;