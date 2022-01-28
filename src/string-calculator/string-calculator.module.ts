import { Module } from '@nestjs/common';
import { StringCalculatorService } from './string-calculator.service';
import { StringCalculatorController } from './string-calculator.controller';

@Module({
  providers: [StringCalculatorService],
  controllers: [StringCalculatorController],
})
export class StringCalculatorModule {}
