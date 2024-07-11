import { Test, TestingModule } from '@nestjs/testing';
import { AnalyzerService } from './analyzer.service';
import { AnalyzerDto } from './dto/analyzer.dto';
import { IAnalyzer } from './interfaces/analyzer.interface';

// Mock the TextAnalyzerHelper class
// jest.mock('./helper/textAnalyzer.helper');

describe('AnalyzerService', () => {
  let service: AnalyzerService;
  // let textAnalyzerHelper: jest.Mocked<TextAnalyzerHelper>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalyzerService],
    }).compile();

    service = module.get<AnalyzerService>(AnalyzerService);
    // textAnalyzerHelper = TextAnalyzerHelper.getInstance() as jest.Mocked<TextAnalyzerHelper>;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('wordCount', () => {
    it('should return word count', async () => {
      const payload: AnalyzerDto = { text: 'This is a test' };

      const result = await service.wordCount(payload);

      expect(result.count).toBe(4);
    });
  });

  describe('charactersCount', () => {
    it('should return character count', async () => {
      const payload: AnalyzerDto = { text: 'This is a test' };

      const result = await service.charactersCount(payload);

      expect(result.count).toBe(11);
    });
  });

  describe('sentencesCount', () => {
    it('should return sentence count', async () => {
      const payload: AnalyzerDto = { text: 'This is a test. This is only a test.' };

      const result = await service.sentencesCount(payload);

      expect(result.count).toBe(2);
    });
  });

  describe('paragraphsCount', () => {
    it('should return paragraph count', async () => {
      const payload: AnalyzerDto = { text: 'This is a test.\nThis is only a test.' };

      const result = await service.paragraphsCount(payload);

      expect(result.count).toBe(2);
    });
  });

  describe('longestWord', () => {
    it('should return one of the longest words', async () => {
      const payload: AnalyzerDto = { text: 'This is a test' };

      const result = await service.longestWord(payload);

      expect(['This', 'test']).toContain(result.longestWord);
    });
  });

  describe('analyze', () => {
    it('should return analysis result', async () => {
      const payload: AnalyzerDto = { text: 'This is a test. This is a longest words.' };
      const analysisResult: IAnalyzer = {
        wordCount: 9,
        characterCount: 32,
        sentenceCount: 2,
        paragraphCount: 1,
        longestWord: 'longest',
      };

      const result = await service.analyze(payload);

      expect(result).toEqual(analysisResult);
    });
  });
});
