import { Injectable } from '@nestjs/common';

@Injectable()
export class StringCalculatorService {
  add(numbers: string): number {
    if (!numbers) return 0;

    const individualNumbers = numbers
      .split(',')
      .map((numberAsString) => parseInt(numberAsString));

    return individualNumbers.reduce((total, number) => total + number);
  }
}
