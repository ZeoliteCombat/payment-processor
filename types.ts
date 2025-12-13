// types.ts
export interface Payment {
  id: string;
  amount: number;
  currency: string;
  paymentMethod: PaymentMethod;
  status: PaymentStatus;
  createdAt: Date;
  updatedAt: Date;
}

export enum PaymentMethod {
  CREDIT_CARD = 'credit_card',
  PAYPAL = 'paypal',
  BANK_TRANSFER = 'bank_transfer',
}

export enum PaymentStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAILED = 'failed',
}

export interface PaymentGateway {
  name: string;
  fees: {
    percentage: number;
    fixed: number;
  };
}

export interface PaymentProcessorConfig {
  paymentGateway: PaymentGateway;
  apiKey: string;
  apiSecret: string;
}