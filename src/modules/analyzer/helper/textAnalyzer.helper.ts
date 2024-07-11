import { IAnalyzer } from "../interfaces/analyzer.interface";



export class TextAnalyzerHelper {

    private static instance: TextAnalyzerHelper;

    static getInstance(): TextAnalyzerHelper {
        TextAnalyzerHelper.instance = TextAnalyzerHelper.instance || new TextAnalyzerHelper();
        return TextAnalyzerHelper.instance;
    }
    async getWordCount(text: string): Promise<number> {
        const words = text?.trim()?.split(/\s+/); // split the text at one or more whitespace characters.
        return words.length;
    }

    /**
     * Get the character count of the text text, excluding spaces.
     * @param text - The text to analyze.
     * @returns The character count.
     */
    async getCharacterCount(text: string): Promise<number> {
        const characters = text?.replace(/\s+/g, ''); //find all whitespace characters (spaces, tabs, newlines) and replace them with an empty string ''.
        return characters?.length;
    }

    /**
     * Get the sentence count of the text text.
     * @param text - The text to analyze.
     * @returns The sentence count.
     */
    async getSentenceCount(text: string): Promise<number> {
        const sentences = text?.split(/[.!?]/)?.filter(Boolean); //split the text at periods (.), exclamation marks (!), or question marks (?).and remove any element thats are false, like null, 0, "", undefined, or NaN
        return sentences?.length;
    }

    /**
     * Get the paragraph count of the text text.
     * @param text - The text to analyze.
     * @returns The paragraph count.
     */
    async getParagraphCount(text: string): Promise<number> {
        const paragraphs = text?.split(/\n/)?.filter(Boolean);//split the text at newline characters. and remove any element thats are false, like null, 0, "", undefined, or NaN
        return paragraphs?.length;
    }

    /**
     * Get the longest word in the text text.
     * @param text - The text to analyze.
     * @returns The longest word.
     */
    async getLongestWord(text: string): Promise<string> {
        const words = text?.split(/\s+/); //one or more whitespace characters (spaces, tabs, newlines).
        const longestWord = words?.reduce((a, b) => (b?.length > a?.length ? b : a), '');
        return longestWord;
    }

    /**
     * Analyze the text text and return various statistics.
     * @param text - The text to analyze.
     * @returns An object containing various text statistics.
     */
    async analyze(text: string): Promise<IAnalyzer> {
        return {
            wordCount: await this.getWordCount(text),
            characterCount: await this.getCharacterCount(text),
            sentenceCount: await this.getSentenceCount(text),
            paragraphCount: await this.getParagraphCount(text),
            longestWord: await this.getLongestWord(text),
        };
    }
}