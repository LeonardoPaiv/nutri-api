import { Test, TestingModule } from '@nestjs/testing';
import { UtensiliosService } from './utensilios.service';

describe('UtensiliosService', () => {
  let service: UtensiliosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UtensiliosService],
    }).compile();

    service = module.get<UtensiliosService>(UtensiliosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
