import logging
import datetime
from typing import Dict, List

logger = logging.getLogger(__name__)

def calculate_fees(amount: float, fee_rate: float) -> float:
    # calculate fees based on amount and fee rate
    fee = amount * fee_rate / 100
    return fee

def validate_payment_data(data: Dict) -> bool:
    required_fields = ['amount', 'payer_id', 'payee_id']
    for field in required_fields:
        if field not in data:
            logger.error(f"Missing required field: {field}")
            return False
    return True

def generate_payment_id() -> str:
    # generate unique payment id
    return f"PAY-{datetime.datetime.now().strftime('%Y%m%d%H%M%S')}-{id(object())}"

def process_payments(payments: List[Dict]) -> List[Dict]:
    processed_payments = []
    for payment in payments:
        if validate_payment_data(payment):
            fee = calculate_fees(payment['amount'], 2.5)
            payment_id = generate_payment_id()
            payment['fee'] = fee
            payment['payment_id'] = payment_id
            processed_payments.append(payment)
    return processed_payments

def main():
    payments = [
        {'amount': 100, 'payer_id': 1, 'payee_id': 2},
        {'amount': 200, 'payer_id': 3, 'payee_id': 4},
    ]
    processed_payments = process_payments(payments)
    for payment in processed_payments:
        logger.info(f"Processed payment: {payment}")

if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    main()