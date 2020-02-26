const creditNumberRegex = /(?:\d[ -]*?){13,16}/g;

const maskedString = string => {
  if (creditNumberRegex.test(string)) {
    return string.replace(
      creditNumberRegex,
      match =>
        match.substring(0, match.length - 4).replace(/\d/g, "*") +
        match.substring(match.length - 4, match.length)
    );
  } else return string;
};

const maskedCreditCardnumber = data => {
  let string = data;
  let isObject = false;
  if (data instanceof Object) {
    string = JSON.stringify(data);
    isObject = true;
  }

  const masked = maskedString(string);
  if (isObject) return JSON.parse(masked);
  else return masked;
};

module.exports = maskedCreditCardnumber;
