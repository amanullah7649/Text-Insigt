import { Injectable } from '@nestjs/common';
import { AnalyzerDto } from './dto/analyzer.dto';
import { TextAnalyzerHelper } from './helper/textAnalyzer.helper';
import { IAnalyzer } from './interfaces/analyzer.interface';

@Injectable()
export class AnalyzerService {


    async wordCount(payload: AnalyzerDto): Promise<{ count: number }> {
        const count = await TextAnalyzerHelper.getInstance().getWordCount(payload?.text);
        return { count };
    }
    async charactersCount(payload: AnalyzerDto): Promise<{ count: number }> {
        const count = await TextAnalyzerHelper.getInstance().getCharacterCount(payload?.text);
        return { count };
    }
    async sentencesCount(payload: AnalyzerDto): Promise<{ count: number }> {
        const count = await TextAnalyzerHelper.getInstance().getSentenceCount(payload?.text);
        return { count };
    }
    async paragraphsCount(payload: AnalyzerDto): Promise<{ count: number }> {
        const count = await TextAnalyzerHelper.getInstance().getParagraphCount(payload?.text);
        return { count };
    }
    async longestWord(payload: AnalyzerDto): Promise<{ longestWord:string }> {
        const longestWord = await TextAnalyzerHelper.getInstance().getLongestWord(payload?.text);
        return { longestWord };
    }
    async analyze(payload: AnalyzerDto): Promise<IAnalyzer> {
        const count = await TextAnalyzerHelper.getInstance().analyze(payload?.text);
        return count;
    }
}
