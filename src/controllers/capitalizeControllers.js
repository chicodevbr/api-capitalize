const { capitalizeOneWord, capitalizeText } = require('../util/functions');

exports.index = async (req, res) => {
  console.log('API Capitalize My Text - version 1.0.0');

  res.status(200).json({ message: "Welcome to 'Capitalize My Text API'" });
};

exports.capitalizeWord = async (req, res) => {
  const { word } = req.body;
  if (typeof word !== 'string') {
    res.status(500).json({ error: 'Feed me a string' });
  }

  const response = capitalizeOneWord(word);

  console.log(response);

  console.log(word);
  res.status(200).json({ word: response });
};

exports.capitalizeText = async (req, res) => {
  const { text } = req.body;
  if (typeof text !== 'string') {
    res.status(500).json({ error: 'Feed me a string' });
  }

  const response = capitalizeText(text);

  res.status(200).json({ text: response });
};
