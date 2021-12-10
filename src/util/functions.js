const capitalizeOneWord = (str) => {
  return str[0].toUpperCase() + str.substring(1).toLowerCase();
};

const capitalizeText = (text) => {
  const words = text.split(' ');
  return words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1).toLowerCase();
    })
    .join(' ');
};

module.exports = {
  capitalizeOneWord,
  capitalizeText,
};
