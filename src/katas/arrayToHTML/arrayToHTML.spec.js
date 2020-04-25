import { formatTableContent } from "./arrayToHTML";

describe('array to html ', function () {

    it('should return an actual constructed html template ', function () {

        expect(formatTableContent([["lorem", "ipsum"], ["dolor", "sit amet"]], true, true))
            .toEqual(`<table><thead><tr><th></th><th>lorem</th><th>ipsum</th></tr></thead><tbody><tr><td>1</td><td>dolor</td><td>sit amet</td></tr></tbody></table>`);
    });
});