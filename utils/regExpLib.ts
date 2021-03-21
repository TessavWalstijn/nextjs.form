class RegExpLib {
  // #region check
  /**
   * Matches if it as first an @ and then a dot with text around those tokens.
   * Match has to be from the beginning of the string to the end.
   * @param   {string}  value The value you want to check against.
   * @returns {boolean}       Returns true if a match has been found.
   */
  public static checkEmail(email: string) {
      // NOTE: Simple RegEx test to check if it as first an @ and then a dot
      return /(^\S+([@])\S+([.])\w+$)/g.test(email);
  }

  /**
   * Matches any characters in the range "A" to "Z" and "a" to "z"
   * (char code 65 to 90 and 97 to 122).
   * Match has to be from the beginning of the string to the end.
   * NOTE: Case sensitive.
   * @param   {string}  value The value you want to check against.
   * @returns {boolean}       Returns true if a match has been found.
   */
  public static checkCharsOnly(value: string) {
      return /(^[A-Za-z]+$)/g.test(value);
  }

  /**
   * Matches any characters in the range "A" to "Z" and "a" to "z" and space
   * (char code 32, 65 to 90 and 97 to 122).
   * Match has to be from the beginning of the string to the end.
   * NOTE: Case sensitive.
   * @param   {string}  value The value you want to check against.
   * @returns {boolean}       Returns true if a match has been found.
   */
  public static checkName(value: string) {
      return /(^[A-Za-z ]+$)/g.test(value);
  }

  /**
   * Matches numbers ranging from 01 and 1 to 31.
   * Match has to be from the beginning of the string to the end.
   * @param   {string}  value The value you want to check against.
   * @returns {boolean}       Returns true if a match has been found.
   */
  public static checkDay(value: string) {
      return /^(0?[1-9]|[12][0-9]|3[01])$/g.test(value);
  }

  /**
   * Matches numbers ranging from 01 and 1 to 12.
   * Match has to be from the beginning of the string to the end.
   * @param   {string}  value The value you want to check against.
   * @returns {boolean}       Returns true if a match has been found.
   */
  public static checkMonth(value: string) {
      return /^(0?[1-9]|1[0-2])$/g.test(value);
  }
  // #endregion

  // #region contains
  /**
   * Matches any character in the range "A" to "Z"(char code 65 to 90).
   * NOTE: Case sensitive.
   * @param   {string}  value The value you want to check against.
   * @returns {boolean}       Returns true if a match has been found.
   */
  public static containsUpperCase(value: string) {
      return /([A-Z]+)/g.test(value);
  }

  /**
   * Matches any character in the range "a" to "z" (char code 97 to 122).
   * NOTE: Case sensitive.
   * @param   {string}  value The value you want to check against.
   * @returns {boolean}       Returns true if a match has been found.
   */
  public static containsLowerCase(value: string) {
      return /([a-z]+)/g.test(value);
  }

  /**
   * Matches any characters in the range "A" to "Z" and "a" to "z"
   * (char code 65 to 90 and 97 to 122).
   * NOTE: Case sensitive.
   * @param   {string}  value The value you want to check against.
   * @returns {boolean}       Returns true if a match has been found.
   */
  public static containsChars(value: string) {
      return /([A-Za-z])/g.test(value);
  }

  /**
   * Matches any character in the range "0" to "9" (char code 48 to 57).
   * NOTE: Case sensitive.
   * @param   {string}  value The value you want to check against.
   * @returns {boolean}       Returns true if a match has been found.
   */
  public static containsNumbers(value: string) {
      return /(\d+)/g.test(value);
  }

  /**
   * Matches any character that is not a word character
   * (alphanumeric & underscore).
   * @param   {string}  value The value you want to check against.
   * @returns {boolean}       Returns true if a match has been found.
   */
  public static containsOtherChars(value: string) {
      return /(\W+)/g.test(value);
  }
  // #endregion
}

export default RegExpLib;
