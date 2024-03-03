export interface Body {
  live: string;
  notificationItems: NotificationItem[];
}
export interface NotificationItem {
  NotificationRequestItem: NotificationRequestItem;
}
export interface NotificationRequestItem {
  additionalData: AdditionalData;
  amount: Amount;
  eventCode: string;
  eventDate: string;
  merchantAccountCode: string;
  merchantReference: string;
  operations: string[];
  paymentMethod: string;
  pspReference: string;
  reason: string;
  success: string;
}
export interface Amount {
  currency: string;
  value: number;
}
export interface AdditionalData {
  expiryDate: string;
  authCode: string;
  cardSummary: string;
  totalFraudScore: string;
  NAME2: string;
  NAME1: string;
  "fraudCheck-6-ShopperIpUsage": string;
}
