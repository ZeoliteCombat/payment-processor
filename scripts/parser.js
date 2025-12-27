const fs = require('fs');
const csv = require('csv-parser');

class PaymentParser {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async parse() {
    const payments = [];
    return new Promise((resolve, reject) => {
      fs.createReadStream(this.filePath)
        .pipe(csv())
        .on('data', (data) => {
          const payment = {
            id: data.id,
            amount: parseFloat(data.amount),
            currency: data.currency,
            date: new Date(data.date)
          };
          payments.push(payment);
        })
        .on('end', () => {
          resolve(payments);
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }
}

module.exports = PaymentParser;