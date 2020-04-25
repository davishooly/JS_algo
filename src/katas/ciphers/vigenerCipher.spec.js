import { encryptText } from "./vigenerCipher";


describe('vigenerCipher ', function () {

    const alphabets = 'ABCDEFJHIJKLMNOPQRSTUVWXYZ';

    it('should ecnrypt  decrypt  a text ', function () {
        expect(encryptText('denno mash', alphabets, 'KEY' )).toEqual('dennomash');
    });

});