// types.ts
export enum PaymentMethod {
  CREDIT_CARD = 'credit-card',
  BANK_TRANSFER = 'bank-transfer',
  PAYPAL = 'paypal',
  APPLE_PAY = 'apple-pay',
  GOOGLE_PAY = 'google-pay',
}

export enum PaymentStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAILED = 'failed',
}

export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
  JPY = 'JPY',
  CNY = 'CNY',
}

export interface PaymentDetails {
  amount: number;
  currency: Currency;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  transactionId: string;
  paymentDate: Date;
}

export interface PaymentRequest {
  amount: number;
  currency: Currency;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  transactionId: string;
  paymentDate: Date;
  paymentGateway: string;
  paymentGatewayOrderId: string;
}

export interface PaymentResponse {
  amount: number;
  currency: Currency;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  transactionId: string;
  paymentDate: Date;
  paymentGateway: string;
  paymentGatewayOrderId: string;
  gatewayResponse: string;
}

export interface PaymentGatewayConfig {
  paymentGateway: string;
  apiKey: string;
  apiSecret: string;
  sandbox: boolean;
}