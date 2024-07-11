import { Test, TestingModule } from '@nestjs/testing';
import { AnalyzerController } from './analyzer.controller';
import { AnalyzerService } from './analyzer.service';

describe('AnalyzerController', () => {
  let controller: AnalyzerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalyzerService],
      controllers: [AnalyzerController],
    }).compile();

    controller = module.get<AnalyzerController>(AnalyzerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
