import { Body, Controller, Post } from '@nestjs/common';
import { StringCalculatorService } from './string-calculator.service';

@Controller('string-calculator')
export class StringCalculatorController {
  constructor(private readonly service: StringCalculatorService) {}

  @Post()
  getCalculator(@Body() DTO: calculatorInputDTO) {
    return this.service.add(DTO.numbers);
  }
}

export interface calculatorInputDTO {
  numbers: string;
}
