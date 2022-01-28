import { Injectable } from '@nestjs/common';

@Injectable()
export class StringCalculatorService {
  add(numbers: string): number {
    if (!numbers) return 0;

    const individualNumbers = numbers
      .split(',')
      .map((numberAsString) => parseInt(numberAsString));

    // I could just as easily add this to the above pipe - but IMO this is a separate logical step and makes
    // the code more readable this way
    return individualNumbers.reduce((total, number) => total + number);
  }

  // To call this, just go to http://localhost:3000/string-calculator in your browser
  hardCodedAdd(): number {
    const numbers = `1\n,2,3`;
    return this.add(numbers);
  }
}
