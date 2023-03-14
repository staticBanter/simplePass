> **CAUTION!**
>
> This project is in Beta Phase. Some features may still contain a few bugs.

- [About](#about)
- [Available Modifiers](#available-modifiers)
  - [General Modifiers](#general-modifiers)
  - [Basic Latin Modifiers](#basic-latin-modifiers)
  - [Latin(1) Supplement](#latin1-supplement)
  - [White-space Modifiers](#white-space-modifiers)
  - [Pre-Configs](#pre-configs)
- [Support](#support)
  - [Browser Support](#browser-support)
  - [OS Support](#os-support)
- [Resources](#resources)

## About

simplePass is a JavaScript password generator.

PWA Size: ~1.7MB

## Available Modifiers

Character Codes displayed as the decimal value(s) for the character(s). A helpful list of these resources can be found at:

- [W3Schools | HTML Character Sets](https://www.w3schools.com/charsets/)
- and [Unicode | Code Charts](https://www.unicode.org/charts/)

### General Modifiers

- Length - Adjusts the length of the the password.
- Exclude Characters - Any characters the password should not contain.
- **Repeating Character Modifiers**
  - Repeating Character - Ensure the password contains at least one repeating character.
  - Repeating Character Limit - Ensure the password contains at least the set amount of repeating characters.
  - Custom Repeating Characters - Ensure the password contains at least the specified repeating characters. Can be formatted to specify how many times each character can be repeated.

### Basic Latin Modifiers

- Lowercase Alpha - Includes Basic Latin lowercase alpha characters. Ranges from character codes: 95-122.
- Uppercase Alpha - Includes Basic Latin uppercase characters. Ranges from character codes: 65-90.
- Numbers - Includes Basic Latin numerals. Ranges from character codes: 48-57.
- Punctuation - Includes Basic Latin punctuation. Ranges from character codes: 33-47, 58-64, 91-96, 123-126.

### Latin(1) Supplement

- Lowercase Characters - Includes Latin(1) Supplement lowercase characters. Ranges from character codes: 223-246, 248-255.
- Uppercase Characters - Includes Latin(1) Supplement uppercase characters. Ranges from character codes: 192-214, 216-222.
- Symbols - Includes Latin(1) Supplement symbols. Ranges from character codes: 161-191, 215, 247.

### White-space Modifiers

Uses character code: 32. For whitespace.

- Whitespace Between - Include whitespace in the middle of the password
  - Whitespace Between Limit - Set the number of whitespace characters to include in the middle of the password.
- Whitespace Beginning - Chance for password to contain whitespace in the beginning.
  - White Beginning Required - Require whitespace characters at the beginning of the password.
- Whitespace End - Chance for password to contain whitespace at the end.
  - White End Required - Require whitespace characters in the end of the password.

### Pre-Configs

Quickly generate passwords of a given type or requirement with pre-configured modifiers.

- Default - Contains:
  - A Length Of: 22 Characters,
  - Basic Latin Lowercase,
  - Basic Latin Uppercase,
  - Basic Latin Numbers,
  - Basic Latin Punctuation.
- Four Digit Pin.
- Default (Latin 1 Supplement) - Contains:
  - A Length Of: 22 Characters,
  - Basic Latin Supplement Lowercase,
  - Basic Latin Supplement Uppercase,
  - Basic Latin Numbers,
  - Basic Latin Supplement Punctuation.
- Extreme - Contains:
  - Length: 256,
  - Basic Latin Lowercase,
  - Basic Latin Uppercase,
  - Basic Latin Numbers,
  - Basic Latin Punctuation,
  - 5 - 13 Repeating Characters,
  - 2 - 10 Whitespace Characters,
  - Basic Latin Supplement Lowercase,
  - Basic Latin Supplement Uppercase,
  - Basic Latin Supplement Punctuation.

## Support

### Browser Support

| Feature | [Firefox](https://www.mozilla.org/en-CA/firefox/)* | [Google Chrome](https://www.google.com/intl/en_ca/chrome/) | [GNome Web](https://wiki.gnome.org/Apps/Web) | [Falkon](https://www.falkon.org/) | [Edge](https://www.microsoft.com/en-us/edge) | [Opera](https://www.opera.com/)
| --- | --- | --- | --- | --- | --- | --- |
| [JavaScript Web.crypto.getRandomValues()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues) | + | + | + | + | * | * |
| PWA Installation  | ~ | + | - | - | * | * |

\* Firefox currently only supports PWA installation on mobile.

### OS Support

| Feature | Linux ** | Windows | MacOS | ChromeOS | Android |
| --- | --- | --- | --- | --- | --- |
| PWA Installation | +  | * | * | * | + |

Positions filled with a * (asterisk) have not be personally tested.

** Tested on:

- [Fedora](https://getfedora.org/en/)

## Resources

- [Visit The GitHub Repository](https://github.com/staticBanter/simplePass)
- [Use The Program](https://staticbanter.github.io/simplePass/)

---

<sub>Have an issue? Want to see a new feature added? Open an issue on the <a href="https://github.com/staticBanter/simplePass/issues">simplePass GitHub Issue Tracker</a> and we will take a look into it!</sub>
