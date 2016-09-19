declare module showdown
{
    export class Converter
    {
        constructor();

        /**
         * @param text The input text (markdown)
         * @return The output HTML
         */
        makeHtml(text: string): string;
    }
}
