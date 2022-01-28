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
});
