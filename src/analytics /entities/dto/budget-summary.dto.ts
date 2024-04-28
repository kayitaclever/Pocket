import { IsNotEmpty } from 'class-validator';

export class ExtendedBudgetSummaryDTO {
  @IsNotEmpty()
  budgetId: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  remaining: number;

  @IsNotEmpty()
  spent: number;

  @IsNotEmpty()
  percentageSpent: number;

  @IsNotEmpty()
  startBalance?: number;
}
