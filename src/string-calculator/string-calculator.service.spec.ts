import { Test, TestingModule } from '@nestjs/testing';
import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StringCalculatorService],
    }).compile();

    service = module.get<StringCalculatorService>(StringCalculatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return 0 when an empty string is passed', () => {
    expect(service.add('')).toBe(0);
  });
  it('should return proper values', () => {
    expect(service.add('1,2,5')).toBe(8);
  });
  it('should work properly with new lines in the input', () => {
    expect(service.add('1\n,2,5')).toBe(8);
  });
  it('should accept a custom delimiter', () => {
    expect(service.add('//;\n1;4;7')).toBe(12);
  });
  it('should accept a custom delimiter $', () => {
    expect(service.add('//$\n1$2$3')).toBe(6);
  });
  it('should accept a custom delimiter @', () => {
    expect(service.add('//@\n2@3@8')).toBe(13);
  });
  it('should accept a custom delimiter of other lengths', () => {
    expect(service.add('//@@@@@\n2@@@@@3@@@@@8')).toBe(13);
  });
  it('should throw errors with negative numbers', () => {
    expect(() => service.add('//@\n2@-3@-8')).toThrowError(
      'Negatives not allowed: -3,-8',
    );
  });
  it('should throw errors with one negative number', () => {
    expect(() => service.add('//@\n-2')).toThrowError(
      'Negatives not allowed: -2',
    );
  });
  it('should throw errors with one negative number less than 1000', () => {
    expect(() => service.add('//@\n-3000')).toThrowError(
      'Negatives not allowed: -3000',
    );
  });
  it('should accept a multiple custom delimiters of any length lengths', () => {
    expect(service.add('//@@@@@,;,,&&,#$\n1;2;3&&4#$5@@@@@6')).toBe(21);
  });
});
