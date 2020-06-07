export interface HomeJSON {
    you: string,
    question: string,
    answer: string,
    caption: string,
    reasons: string[],
    contentQuestion: string,
    contentIntro: string,
    column1: {title: string, details: string, iconSource: string}[];
    column2: {title: string, details: string, iconSource: string}[];
}