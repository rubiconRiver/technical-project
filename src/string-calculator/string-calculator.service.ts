import { Injectable } from '@nestjs/common';

@Injectable()
export class StringCalculatorService {


  //this function can take either a list of number separated
  add(input: string): number {
    if (!input) return 0;

    // default case for inputs like '1,2,5'
    let delimiters = [','];

    if (input.substring(0, 2) === '//') {
      const newLineIndex = input.indexOf('\n');
      const delimiterSubstring = input.substring(2, newLineIndex);

      // check for multiple delimiters
      if (delimiterSubstring.indexOf(',') !== -1) {
        delimiters = delimiterSubstring.split(',');
      } else {
        delimiters = [delimiterSubstring];
      }
      // drop the delimiters subscript and leave the raw numbers
      input = input.substring(newLineIndex + 1);
    }

    let commaSeparatedNumbers = input;
    delimiters.forEach((delimiter) => {
      commaSeparatedNumbers = commaSeparatedNumbers.split(delimiter).join(',');
    });

    const individualNumbers = commaSeparatedNumbers
      .split(',')
      .map((numberAsString) => parseInt(numberAsString))
      .filter((number) => number <= 1000);

    const negativeNumbers = individualNumbers.filter((number) => number < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negatives not allowed: ${negativeNumbers}`);
    }

    return individualNumbers.reduce((total, number) => total + number);
  }

  // To call this, change the number variable and go to http://localhost:3000/string-calculator in your browser
  hardCodedAdd(): number {
    const numbers = `//;;,@,%%\n1;;4@7%%14`;
    return this.add(numbers);
  }
}
