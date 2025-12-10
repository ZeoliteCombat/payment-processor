const fs = require('fs');
const path = require('path');

class Parser {
  constructor(filePath) {
    this.filePath = filePath;
    this.fileContent = null;
  }

  async readFile() {
    try {
      this.fileContent = await fs.promises.readFile(this.filePath, 'utf8');
    } catch (error) {
      throw new Error(`Failed to read file: ${error.message}`);
    }
  }

  parseTransactions() {
    if (!this.fileContent) {
      throw new Error('File content is not loaded');
    }

    const transactions = [];
    const lines = this.fileContent.split('\n');

    lines.forEach((line) => {
      const [date, type, amount] = line.split(',');
      if (date && type && amount) {
        transactions.push({
          date: new Date(date),
          type,
          amount: parseFloat(amount),
        });
      }
    });

    return transactions;
  }
}

module.exports = Parser;