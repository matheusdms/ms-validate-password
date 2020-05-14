'use strict';

const validateString = (string) => { return typeof string === "string" && string.length > 0 };

const verifyMinLength = (string) => { return string.length >= 9 };

const verifyUpperCaseLetter = (string) => { return string.split("").map(s => s.toUpperCase() === s).some(c => c) };

const verifyLowerCaseLetter = (string) => { return string.split("").map(s => s.toLowerCase() === s).some(c => c) };

const verifyEspecialCharacter = (string) => {
  const especialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return especialCharacters.test(string);
}

const verifyRepeatedCharacter = (string) => {
  const isRepeated = string.split("").some((v, i, a) => {
    return a.lastIndexOf(v) != i;
  });

  return !isRepeated;
}

module.exports = {
  validateString,
  verifyMinLength,
  verifyUpperCaseLetter,
  verifyLowerCaseLetter,
  verifyEspecialCharacter,
  verifyRepeatedCharacter,
}