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

> v:2.1.0-Development

simplePass is a JavaScript password generator.

# Installation

To include simplePass in your project follow these steps:

1. Download the ```simplePass``` directory.
2. simplePass is built using *ESNext* Modules imports so in your project you will have to import simplePass like so:
```javascript
import * as simplePass from 'yourLocalPathing/simplePass/simplePass.js'
```
1. Call simplePass like so 
```javascript
const password = simplePass(modifier)
```

# Modifier(Options)

simplePass may be called a variety of modifiers to change the desired passwords outcome. These modifiers are passed as an object to simplePass.

* length:*number* - The length of the password (default: 8)
* min: 1
* max 256
* lowercase:*boolean* - Allow lowercase characters (default: true)
* uppercase:*boolean* - Allow uppercase characters (default: false)
* numbers:*boolean* - Allow numbers (default: false)
* punctuation:*boolean* - Allow punctuation (default: false)
* special:*boolean* - Allow special characters (default: false)
* memorable: *boolean* - Create a password using a series of regular words (ie HorseRulerBatteryStapler) (default: false).
> [!NOTE]
> White-space characters are under the *special* modification.

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
| | +-- simplePass.js
| | +-- yourProjectScript.js
```

```javascript
// yourProjectScript.js

// Import simplePass
import simplePass from "yourLocalPathing/simplePass/simplePass.js";

// Generate password using only lowercase.
const lowercasePass = simplePass({
  length:8,
  lowercase:true,
  uppercase:false,
  numbers:false,
  punctuation:false,
  special:false,
  memorable:false
});
// outputs: esbcxvsr

// Generate more 'random' password.
const randomPass = simplePass({
  length:20,
  lowercase:true,
  uppercase:true,
  numbers:true,
  punctuation:true,
  special:false,
  memorable:false
});
// outputs: "R\ucJ4/EG8oZVrH+uyQ

```

# Development

## Requirements

Due to simplePass being module based you will need a local server to host files (See: [Mozilla Developer | Reason: CORS request not HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp)). We recommend the following:
* [Browser-Sync](https://browsersync.io/)

simplePass is also built using [Typescript](https://www.typescriptlang.org/) and you will need some form of installation to compile typescript files into Javascript. We recommend using:
* [NodeJS](https://nodejs.org/en/)
* and its package manager [NPM](https://www.npmjs.com/)

## Download/Clone

Currently this repo is only available through GitHub. You can find the repo at:
* GitHub
* [View Repo](https://github.com/staticBanter/simplePass)
* [HTTPS](https://github.com/staticBanter/simplePass.git)
* [SSH](git@github.com:staticBanter/simplePass.git)

## Install Packages

### Via NPM

If you do not have typescript installed on your machine you may install a local project version via NPM

```javascript
npm install
```
## Testing

Testing is currently done inside of a browser using [MochaJS](https://mochajs.org/#running-mocha-in-the-browser) and [ChaiJS](https://www.chaijs.com/).

Again, due to the this project being module based you will need to be running a local server hosting the files to view the test page.

simplePass includes local versions of MochaJS and ChaiJs found in the ```test/lib``` directory so there is no need to install them.
