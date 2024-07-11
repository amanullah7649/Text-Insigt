import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AnalyzerDto } from 'src/modules/analyzer/dto/analyzer.dto';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';




const mockAnalysis = {
    wordCount: 9,
    characterCount: 32,
    sentenceCount: 2,
    paragraphCount: 1,
    longestWord: 'longest',
};
const mockPayload: AnalyzerDto = { text: 'This is a test. This is a longest words.' };
describe('AnalyzerModule (e2e)', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        // app.useGlobalFilters(new HttpExceptionFilter());
        await app.init();
    });

    afterAll(async () => {
        await app.close();
    });

    it('/analyzer (POST) should return full analysis', async () => {
        const response = await request(app.getHttpServer())
            .post('/analyzer')
            .send(mockPayload)
            .expect(201);

        expect(response.body).toEqual(mockAnalysis);
    });

    it('/analyzer/word-count (POST) should return word count', async () => {
        const response = await request(app.getHttpServer())
            .post('/analyzer/word-count')
            .send(mockPayload)
            .expect(201);

        expect(response.body.count).toBe(mockAnalysis.wordCount);
    });

    it('/analyzer/characters-count (POST) should return character count', async () => {
        const response = await request(app.getHttpServer())
            .post('/analyzer/characters-count')
            .send(mockPayload)
            .expect(201);

        expect(response.body.count).toBe(mockAnalysis.characterCount);
    });

    it('/analyzer/sentences-count (POST) should return sentence count', async () => {
        const response = await request(app.getHttpServer())
            .post('/analyzer/sentences-count')
            .send(mockPayload)
            .expect(201);

        expect(response.body.count).toBe(mockAnalysis.sentenceCount);
    });

    it('/analyzer/paragraphs-count (POST) should return paragraph count', async () => {
        const response = await request(app.getHttpServer())
            .post('/analyzer/paragraphs-count')
            .send(mockPayload)
            .expect(201);

        expect(response.body.count).toBe(mockAnalysis.paragraphCount);
    });

    it('/analyzer/longest-word (POST) should return longest word', async () => {
        const response = await request(app.getHttpServer())
            .post('/analyzer/longest-word')
            .send(mockPayload)
            .expect(201);

        expect(['longest']).toContain(response.body.longestWord);
    });

    it('/analyzer (POST) should return BadRequestException for empty text', async () => {
        const payload: AnalyzerDto = { text: '' };
        const response = await request(app.getHttpServer())
            .post('/analyzer')
            .send(payload)
            .expect(400);

        expect(response.body).toEqual({
            statusCode: 400,
            message: ['text_empty'],
            error: 'Bad Request',
        });
    });

    it('/analyzer/word-count (POST) should return BadRequestException for empty text', async () => {
        const payload: AnalyzerDto = { text: '' };
        const response = await request(app.getHttpServer())
            .post('/analyzer/word-count')
            .send(payload)
            .expect(400);

        expect(response.body).toEqual({
            statusCode: 400,
            message: ['text_empty'],
            error: 'Bad Request',
        });
    });

    it('/analyzer/characters-count (POST) should return BadRequestException for empty text', async () => {
        const payload: AnalyzerDto = { text: '' };
        const response = await request(app.getHttpServer())
            .post('/analyzer/characters-count')
            .send(payload)
            .expect(400);

        expect(response.body).toEqual({
            statusCode: 400,
            message: ['text_empty'],
            error: 'Bad Request',
        });
    });

    it('/analyzer/sentences-count (POST) should return BadRequestException for empty text', async () => {
        const payload: AnalyzerDto = { text: '' };
        const response = await request(app.getHttpServer())
            .post('/analyzer/sentences-count')
            .send(payload)
            .expect(400);

        expect(response.body).toEqual({
            statusCode: 400,
            message: ['text_empty'],
            error: 'Bad Request',
        });
    });

    it('/analyzer/paragraphs-count (POST) should return BadRequestException for empty text', async () => {
        const payload: AnalyzerDto = { text: '' };
        const response = await request(app.getHttpServer())
            .post('/analyzer/paragraphs-count')
            .send(payload)
            .expect(400);

        expect(response.body).toEqual({
            statusCode: 400,
            message: ['text_empty'],
            error: 'Bad Request',
        });
    });

    it('/analyzer/longest-word (POST) should return BadRequestException for empty text', async () => {
        const payload: AnalyzerDto = { text: '' };
        const response = await request(app.getHttpServer())
            .post('/analyzer/longest-word')
            .send(payload)
            .expect(400);

        expect(response.body).toEqual({
            statusCode: 400,
            message: ['text_empty'],
            error: 'Bad Request',
        });
    });
});
