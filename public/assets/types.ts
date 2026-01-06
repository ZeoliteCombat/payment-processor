// types.ts
export interface PaymentMethod {
  id: string;
  type: 'credit-card' | 'bank-transfer' | 'paypal';
  details: {
    cardNumber?: string;
    expirationDate?: string;
    cvv?: string;
    bankAccountNumber?: string;
    bankRoutingNumber?: string;
    paypalEmail?: string;
  };
}

export interface Transaction {
  id: string;
  amount: number;
  currency: string;
  paymentMethod: PaymentMethod;
  status: 'pending' | 'success' | 'failed';
  createdAt: Date;
  updatedAt: Date;
}

export interface PaymentProcessorConfig {
  apiKey: string;
  apiSecret: string;
  baseUrl: string;
}

export enum PaymentStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAILED = 'failed',
}

export type PaymentCallback = (transaction: Transaction) => void;