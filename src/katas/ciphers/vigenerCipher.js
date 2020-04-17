const formatData = (data) => {
  let nText = data.toUpperCase();
  nText = nText.replace(/;/g,'');
  nText = nText.replace(/\./g,'');
  nText = nText.replace(/,/g,'');
  nText = nText.replace(/ /g,'');
  nText = nText.replace(new RegExp("[0-9]", "g"), '');
  return nText;
};

const encryptText = (text, alphabets, key) => {
  const nText =  formatData(text);
  let encrypted = [];
  const keyWord = [];
  for(let i=0; i < nText.length; i++){
      for(let j=0; j < key.length; j++){
          keyWord.push(key[j])
      }
  }
  const generatedKey = keyWord.splice(0, nText.length);
  for(let i=0; i < nText.length; i++) {
    for(let j=0; j < generatedKey.length; j++){
        if( i === j ){
          let a  = alphabets.indexOf(nText[i]);
          let b  = alphabets.indexOf(generatedKey[j]);
          const cipher = alphabets[(a + b) % 26];
          encrypted.push(cipher);
        }
    }
  }
  const cipherText = encrypted.join('');
  decryptCipher(cipherText, generatedKey)
};

const decryptCipher = ( cipherText, key ) => {
  const decrypted = [];
  for(let i=0; i < cipherText.length; i++){
    for(let j=0; j < key.length; j++) {
      if( i === j){
        let a = alphabets.indexOf(cipherText[i]);
        let b = alphabets.indexOf(key[j]);
        let difference = a - b;
        if (difference < 0) {
          difference = difference + 26
        }
        const text = alphabets[difference];
       decrypted.push(text)
      }
    }
  }
  console.log(decrypted.join('').toLowerCase())
};

const alphabets = 'ABCDEFJHIJKLMNOPQRSTUVWXYZ';

encryptText('denno mash', alphabets, 'KEY' );
