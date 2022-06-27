function Encryptor() {
  var obj = {};

  var N_ALPHABET = 26; //알파벳 문자 개수
  var extraCharactors = [
    ' ',
    '.',
    '?',
    '!',
    '%',
    '#',
    "'",
    '&',
    '$',
    '@',
    ':',
    '/',
  ]; //특수문자 배열

  obj.chars = []; //알파벳을 담을 배열

  // chars 배열에 알파벳 소문자 추가
  for (var c = 'a'.charCodeAt(0); c <= 'z'.charCodeAt(0); c++) {
    obj.chars.push(String.fromCharCode(c));
  }

  console.log(obj.chars);
  // ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  // chars 배열에 알파벳 대문자 추가
  for (var c = 'A'.charCodeAt(0); c <= 'Z'.charCodeAt(0); c++) {
    obj.chars.push(String.fromCharCode(c));
  }

  // chars 배열에 알파벳 숫자추가
  for (var d = 0; d <= 9; d++) {
    obj.chars.push(d.toString());
  }

  // chars 배열에 알파벳 특수문자 추가
  for (var j = 0; j < extraCharactors.length; j++) {
    obj.chars.push(extraCharactors[j]);
  }

  // nchars 프로퍼티에 배열 chars에 저장된 문자 개수를 저장
  obj.nchars = obj.chars.length;

  // chars배열에서의 문자 ch의 요소 번호를 구하는 메서드 ( ch를 chars배열에서 찾을 수 없을 때에는 null을 반환함)
  obj.numberOf = function (ch) {
    var code = ch.charCodeAt(0);
    if (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) {
      return code - 'a'.charCodeAt(0);
    } else if (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) {
      return N_ALPHABET + code - 'A'.charCodeAt(0);
    } else if (code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0)) {
      return 2 * N_ALPHABET + code - '0'.charCodeAt(0);
    } else {
      for (var k = 0; k < extraCharactors.length; k++) {
        if (ch == extraCharactors[k]) {
          return 2 * N_ALPHABET + 10 + k;
        }
      }
      return null;
    }
  };

  // 문자ch를 n만큼 이동시킨 문자를 반환하는 메서드 ( ch를 chars배열에서 찾을 수 없을 때에는 null을 반환함)
  obj.shift = function (ch, n) {
    var num = this.numberOf(ch);

    if (num == null) return ch;
    num = (num + n + this.nchars) % this.nchars;

    return this.chars[num];
  };

  // 원판 암호기로 암호화를 하는 메서드
  //   text: 암호화 / 복호화를 할 문자열
  //   keyword: 키워드
  //   encription: true 면 암호화, false면 복호화

  obj.encrypt = function (text, keyword, encription) {
    var cipherText = '';
    var nkey = keyword.length;

    for (var i = 0, ikey = 0; i < text.length; i++, ikey++) {
      ikey %= nkey;
      var nshift = this.numberOf(keyword[ikey]);

      if (!encription) nshift *= -1;
      cipherText += this.shift(text[i], nshift);
    }

    return cipherText;
  };

  return obj;
}

Encryptor();
