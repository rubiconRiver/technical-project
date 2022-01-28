import { Body, Controller, Get, Post } from "@nestjs/common";
import { StringCalculatorService } from './string-calculator.service';

@Controller('string-calculator')
export class StringCalculatorController {
  constructor(private readonly service: StringCalculatorService) {}

  @Post()
  getCalculator(@Body() DTO: calculatorInputDTO) {
    return this.service.add(DTO.numbers);
  }

  @Get()
  getHardCoded(@Body() DTO: calculatorInputDTO) {
    return this.service.hardCodedAdd();
  }
}


export interface calculatorInputDTO {
  numbers: string;
}
