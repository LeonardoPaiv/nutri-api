import { Test, TestingModule } from '@nestjs/testing';
import { UtensiliosController } from './utensilios.controller';

describe('UtensiliosController', () => {
  let controller: UtensiliosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UtensiliosController],
    }).compile();

    controller = module.get<UtensiliosController>(UtensiliosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
