import { validParenthesis } from './validParanthesis'
describe('valid parenthesis', function () {
    it('should return true for valid parenthesis else otherwise', function () {
         const testCases = {
             "()": true,
             "()[]{}": true,
             "(]": false,
             "([)]": false,
             "{[()]}": true,
             "": true
         };
        Object.keys(testCases).forEach(test => {
            expect(validParenthesis(test)).toBe(testCases[test]);
        })
    });
});
