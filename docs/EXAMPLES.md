- [Including In Your Project](#including-in-your-project)
  - [Browser/Javascript Version](#browserjavascript-version)
    - [Bundle](#bundle)
    - [Module](#module)
  - [Typescript Version](#typescript-version)
- [Examples](#examples)
  - [Importing](#importing)
  - [Default \& Basic Passwords](#default--basic-passwords)
  - [Complex Passwords](#complex-passwords)
  - [Strength Checker Styling With Entropy Score](#strength-checker-styling-with-entropy-score)

simplePass is currently only available through its GitHub at [GitHub | staticBanter | simplePass](https://github.com/staticBanter/simplePass), there you can download the entire project repo.

simplePass is built using *ESNext* modules so you will need deployed it in a server environment.

## Including In Your Project

### Browser/Javascript Version

#### Bundle

For usage inside of a Web Browser it is recommend that you grab the bundled version of the project located at ```simplePass/javascript/bundle/simplePass.bundle.js```. Once you have the file you may include it in you project like so:

Directory structure after downloading the *simplePass.bundle.js* file.

```text
.
+-- yourProjectsMainDir
| +-- index.html
| +-- css
| +-- js
| | +-- yourProjectScript.js
| | +-- simplePass.bundle.js
```

You may then import simplePass into your project like so.

```javascript
// yourProjectScript.js

// Import simplePass
import simplePass from "./simplePass/simplePass.bundle.js";

// Generate the default password.
console.log(simplePass());
```

#### Module

If you would like to use the unbundled version (usually for personal development) you should take the entire ```simplePass/javascript/module``` directory, and rename it to something more unique (ie: *simplePass*). Once you have the directory you may include it in your project like so:

Directory structure after downloading and renaming the ```module``` directory (for this example we renamed ```module``` to ```simplePass```).

```text
.
+-- yourProjectsMainDir/
| +-- index.html
| +-- css/
| +-- js/
| | +-- simplePass/
| | | +-- data/
| | | +-- functions/
| | | +-- simplePass.config.js
| | | +-- simplePass.js
| | +-- yourProjectScript.js
```

You may then import simplePass into your project like so.

This version will also let import specific modules from the project as well.

```javascript
// yourProjectScript.js

// Import modules
import simplePass from "./simplePass/simplePass.js";
import spConfig from './simplePass/simplePass.config.js'

// Generate the default password.
console.log(simplePass());
```

### Typescript Version

Installing the TypeScript version of the project is similar to installing the Browser/JavaScript versions only we need to grab a different directory.

If you would like to use the TypeScript versions of simplePass (usually for personal development) you should take the entire ```simplePass/typescript``` directory, and rename it to something more unique (ie: *simplePass*). Once you have the directory you may include it in your project like so:

Directory structure after downloading and renaming the ```typescript``` directory (for this example we renamed ```typescript``` to ```simplePass```).

```text
.
+-- yourProjectsMainDir/
| +-- index.html
| +-- css/
| +-- ts/
| | +-- simplePass/
| | | +-- data/
| | | +-- functions/
| | | +-- config.simplePass.ts
| | | +-- simplePass.ts
| | +-- yourProjectScript.ts
```

You may then import simplePass into your project like so.

> **Note**: Depending on your development pipeline you may need to change the file extension too ```.ts``

```javascript
// yourProjectScript.js

// Import simplePass
import simplePass from "./simplePass/simplePass.bundle.js";

// Generate the default password.
console.log(simplePass());
```

## Examples

For these examples we will be using the bundled version of simplePass.

### Importing

```javascript
// yourProjectScript.js

// Import simplePass
import simplePass from "simplePass.bundle.js";
```

### Default & Basic Passwords

```javascript
// Generate the default password.
const defaultPass = simplePass();

console.log(defaultPass)
// outputs: jl6x03/%1A&CnM-(uIY47>
```

```javascript
// Generate password using only Basic Latin Uppercase Alpha Characters.
const uppercasePass = simplePass({
  length:16,
  lowercase:true
});

console.log(uppercasePass)
// outputs: UZYQRLLFKHLFASQV
```

### Complex Passwords

```javascript
// Generate more random password.
const randomPass = simplePass({
  length:20,
  lowercase:true,
  uppercase:true,
  numbers:true,
  punctuation:true,
});

console.log(randomPass)
// outputs: ;4]TOV`10sB8>m0nf;OP
```

```javascript
// Generate a more complex random password.
const complexPass  = simplePass({
    length: 26,
    lowercase: true,
    uppercase: true,
    numbers: true,
    punctuation: true,
    lowercase_supplement:true
    excludeCharacters: 'abc'
});

console.log(complexPass)
// outputs: tsøû}BpWe:o]M6õ1þJ4D$þ/84ù
```

### Strength Checker Styling With Entropy Score

```javascript
// Get an element to display our password
const displayPassword = document.body.querySelector("#displayPassword");
// Get an element to display our entropy score.
const passwordEntropy = document.body.querySelector('#passwordEntropy');

// Create our password
const initialPassword = simplePass(
    {
        length:22,
        lowercase:true,
        uppercase:true,
        numbers:true,
        punctuation:true
    },
    {
        // We are going to style the 'display password' element using inline styling.
        styleTarget:displayPassword,
        styleType:"inline"
    }
);

// Set our 'display element' text to the password.
displayPassword.innerText = initialPassword.password;
// Set the 'password entropy' elements inner text to our passwords entropy.
passwordEntropy.innerText = Math.round(initialPassword.entropy);

// You should also note that simplePass has styled the targeted element according to the passwords score.
```

---

<sub>Thank you for taking the time to read this document. If you have any questions comments or concerns regarding this report open an issue on the <a href="https://github.com/staticBanter/simplePass/issues">simplePass GitHub Issue Tracker</a></sub>