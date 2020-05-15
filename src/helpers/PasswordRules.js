'use strict';

class PasswordRules {
  constructor() {
    this.rules = [
      "validateString",
      "verifyMinLength",
      "verifyMinLength",
      "verifyUpperCaseLetter",
      "verifyLowerCaseLetter",
      "verifySpecialCharacter",
      "verifyRepeatedCharacter",
    ]
  }

  validateString(string) { return typeof string === "string" && string.length > 0 };

  verifyMinLength(string) { return string.length >= 9 };

  verifyUpperCaseLetter(string) { return string.split("").map(s => s.toUpperCase() === s).some(c => c) };

  verifyLowerCaseLetter(string) { return string.split("").map(s => s.toLowerCase() === s).some(c => c) };

  verifySpecialCharacter(string) {
    const specialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialCharacters.test(string);
  }

  verifyRepeatedCharacter(string) {
    const isRepeated = string.split("").some((v, i, a) => {
      return a.lastIndexOf(v) != i;
    });

    return !isRepeated;
  }

  getRules() {
    return this.rules;
  }

}

module.exports = PasswordRules;