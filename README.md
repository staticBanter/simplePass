simplePass
=

> [!CAUTION]
> This project is still in development. Certain features are incomplete or may not function entirely. **Use At Your Own Risk**

- [simplePass](#simplepass)
- [About](#about)
- [Installation](#installation)
- [Modifier(Options)](#modifieroptions)
- [Examples](#examples)
- [Development](#development)
  - [Requirements](#requirements)
  - [Download/Clone](#downloadclone)
  - [Install Packages](#install-packages)
    - [Via NPM](#via-npm)
  - [Testing](#testing)

# About

> v:2.2.1-Development

simplePass is a JavaScript password generator.

# Installation

To include simplePass in your project follow these steps:

1. Download the ```simplePass``` directory.
2. simplePass is built using *ESNext* Modules imports so in your project you will have to import simplePass like so:
```javascript
import * as simplePass from 'yourLocalPathing/simplePass/simplePass.js';
```
1. Call simplePass like so 
```javascript
const password = simplePass(modifier);
```

# Modifier(Options)

simplePass may be called a variety of modifiers to change the desired passwords outcome. These modifiers are passed as an object to simplePass.

* length:*number* - The length of the password (default: 8)
  * min: 3
  * max 256
* lowercase:*boolean* - Ensure lowercase characters (default: true)
* uppercase:*boolean* - Ensure uppercase characters (default: false)
* numbers:*boolean* - Ensure numbers (default: false)
* punctuation:*boolean* - Ensure punctuation (default: false)
* special:*boolean* - Ensure special characters (default: false) **disabled**
* memorable: *boolean* - Create a password using a series of regular words (ie HorseRulerBatteryStapler) (default: false). **disabled**
* **Whitespace Options**
* w_beginning: *boolean* - Allow whitespace at the beginning of a password.
* w_end: *boolean* - Allow whitespace at the end of a password.
* w_between: *boolean* - Ensure a whitespace character between the beginning and end of a password.

> [!CAUTION]
> The *special* option currently does not work and will be silently ignored.

> [!CAUTION]
> The *memorable* option currently does not work and will be silently ignored.

# Examples

Directory structure after downloading ```build/simplePass.js```

```
.
+-- yourProjectsMainDir
| +-- index.html
| +-- css
| +-- js
| | +-- simplePass
| | | +-- simplePass.js
| | +-- yourProjectScript.js
```

```javascript
// yourProjectScript.js

// Import simplePass
import simplePass from "./simplePass/simplePass.js";

// Generate password using only lowercase.
const lowercasePass = simplePass({
  length:8,
  lowercase:true
});
// outputs: esbcxvsr

// Generate more 'random' password.
const randomPass = simplePass({
  length:20,
  lowercase:true,
  uppercase:true,
  numbers:true,
  punctuation:true,
});
// outputs: "R\ucJ4/EG8oZVrH+uyQ

```

# Development

## Requirements

Due to simplePass being module based you will need a local server to host files (See: [Mozilla Developer | Reason: CORS request not HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp)). We recommend the following:
* [Browser-Sync](https://browsersync.io/)

simplePass is also built using [Typescript](https://www.typescriptlang.org/) and you will need some form of installation to compile typescript files into Javascript. We recommend using the NPM distribution of Typescript, this means you will need:
* [NodeJS](https://nodejs.org/en/)
* and its package manager [NPM](https://www.npmjs.com/)

Then you will be able to [install Typescript through NPM globally](https://www.npmjs.com/package/typescript#installing) or install the package locally scoped to the project; see [Install Packages | Via NPM](#via-npm).

## Download/Clone

Currently this repo is only available through GitHub. You can find the repo at:
* [Github | staticBanter | simplePass](https://github.com/staticBanter/simplePass)

## Install Packages

Ensure you have navigated to the project directory, then proceed to install the packages.

### Via NPM

If you do not have Typescript installed on your machine you may install a local project version via NPM

```javascript
npm install
```
## Testing

Testing is currently done inside of a browser using [MochaJS](https://mochajs.org/#running-mocha-in-the-browser) and [ChaiJS](https://www.chaijs.com/).

Again, due to the this project being module based you will need to be running a local server hosting the files to view the test page.

simplePass includes local versions of MochaJS and ChaiJs found in the ```test/lib``` directory so there is no need to install them.
