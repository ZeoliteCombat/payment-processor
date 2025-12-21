const fs = require('fs').promises;
const csv = require('csv-parser');

class PaymentParser {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async parse() {
    try {
      const csvStream = fs.createReadStream(this.filePath).pipe(csv());
      const payments = [];
      for await (const data of csvStream) {
        const payment = {
          id: data.id,
          amount: parseFloat(data.amount),
          currency: data.currency,
          date: new Date(data.date)
        };
        payments.push(payment);
      }
      return payments;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PaymentParser;