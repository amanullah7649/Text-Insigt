import { IsNotEmpty } from "class-validator";

export class AnalyzerDto {
    @IsNotEmpty({ message: "text_empty" })
    text: string;
}