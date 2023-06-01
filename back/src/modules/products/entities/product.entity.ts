import { Decimal } from '@prisma/client/runtime';

export class Product {
  readonly cod: number;
  description: string;
  bar_code: string;
  value: Decimal;
  gross_weight: Decimal;
  net_weight: Decimal;
}
