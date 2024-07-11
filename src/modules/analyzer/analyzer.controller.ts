import { Body, Controller, Post } from '@nestjs/common';
import { AnalyzerService } from './analyzer.service';
import { AnalyzerDto } from './dto/analyzer.dto';
import { IAnalyzer } from './interfaces/analyzer.interface';

@Controller('analyzer')
export class AnalyzerController {
    constructor(private readonly analyzerService: AnalyzerService) { }


    @Post("")
    async fullAnalyze(@Body() payload: AnalyzerDto): Promise<IAnalyzer> {
        return await this.analyzerService.analyze(payload);
    }

    @Post("/word-count")
    async getWordCount(@Body() payload: AnalyzerDto): Promise<{ count: number }> {
        return await this.analyzerService.wordCount(payload);
    }

    @Post("/characters-count")
    async getCharactersCount(@Body() payload: AnalyzerDto): Promise<{ count: number }> {
        return await this.analyzerService.charactersCount(payload);
    }
    @Post("/sentences-count")
    async getSentencesCount(@Body() payload: AnalyzerDto): Promise<{ count: number }> {
        return await this.analyzerService.sentencesCount(payload);
    }
    @Post("/paragraphs-count")
    async getParagraphsCount(@Body() payload: AnalyzerDto): Promise<{ count: number }> {
        return await this.analyzerService.paragraphsCount(payload);
    }
    @Post("/longest-word")
    async getLongestWord(@Body() payload: AnalyzerDto): Promise<{ longestWord: string }>{
        return await this.analyzerService.longestWord(payload);
    }
}
