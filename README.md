> **CAUTION**
>
> This project is in Beta Phase. Some features may still contain a few bugs.

- [About](#about)
- [Available Modifiers](#available-modifiers)

## About

simplePass is a JavaScript password generator.

## Available Modifiers

**General Modifiers**
* Length - Adjusts the length of the the password.
* Exclude Characters - Any characters the password should not contain.
* **Repeating Character Modifiers**
  * Repeating Character - Ensure the password contains at least one repeating character.
  * Repeating Character Limit - Ensure the password contains at least the set amount of repeating characters.
  * Custom Repeating Characters - Ensure the password contains at least the specified repeating characters. Can be formatted to specify how many times each character can be repeated.

**Basic Latin Modifiers**
* Lowercase - Includes Basic Latin lowercase characters [a-z].
* Uppercase - Includes Basic Latin uppercase characters [A-Z].
* Numbers - Includes Basic Latin numerals [0-9].
* Punctuation - Includes Basic Latin punctuation.

**White-space Modifiers**
* Whitespace Between - Include whitespace in the middle of the password
  * Whitespace Between Limit - Set the number of whitespace characters to include in the middle of the password.
* Whitespace Beginning - Chance for password to contain whitespace in the beginning.
  * White Beginning Required - Require whitespace characters at the beginning of the password.
* Whitespace End - Chance for password to contain whitespace at the end.
  * White End Required - Require whitespace characters in the end of the password.