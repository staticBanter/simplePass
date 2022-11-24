- [Browser/Javascript](#browserjavascript)
- [Typescript](#typescript)

simplePass is currently only available through its GitHub at [](), there you can download the entire project repo.

## Browser/Javascript

For usage inside of a Web Browser it is recommend that you grab the bundled version of the project located at ```simplePass/simplePass/browser/simplePass.js```. Once you have the file you may include it in you project like so:

Directory structure after downloading the *simplePass.js* file.
```
.
+-- yourProjectsMainDir
| +-- index.html
| +-- css
| +-- js
| | +-- yourProjectScript.js
| | +-- simplePass.js
```

Including *simplePass.js* in *yourProjectScript.js*
```javascript
// yourProjectScript.js

// Import simplePass
import simplePass from "simplePass.js";

// Generate the default password.
const defaultPass = simplePass();

console.log(defaultPass)
// outputs: mrxkfera

// Generate password using only lowercase.
const uppercasePass = simplePass({
  length:16,
  lowercase:true
});

console.log(uppercasePass)
// outputs: UZYQRLLFKHLFASQV

// Generate more 'random' password.
const randomPass = simplePass({
  length:20,
  lowercase:true,
  uppercase:true,
  numbers:true,
  punctuation:true,
});

console.log(randomPass)
// outputs: ;4]TOV`10sB8>m0nf;OP

// Generate a more complex 'random' password.
const complexPass  = simplePass({
    length: 20,
    lowercase: true,
    uppercase: true,
    numbers: true,
    punctuation: true,
    w_beginning: true,
    w_beginning_required: true,
    w_end: true,
    w_end_required: true,
    w_between: true,
    w_between_limit: 4,
    excludeCharacters: 'abc'
});

console.log(complexPass)
// outputs (double quotes are being used to represent the password boundaries): " Im>e >9   g1R{1AD8 "
```

If you would like to use the unbundled version (usually for personal development) you should take the entire ```simplePass/simplePass/src``` directory, and rename it to something more unique (ie: *simplePass*). Once you have the directory you may include it in your project like so:

Directory structure after downloading and renaming the ```src``` directory (for this example we renamed ```src``` to ```simplePass```).
```
.
+-- yourProjectsMainDir/
| +-- index.html
| +-- css/
| +-- js/
| | +-- simplePass/
| | | +-- data/
| | | +-- helpers/
| | | +-- config.simplePass.js
| | | +-- simplePass.js
| | +-- yourProjectScript.js
```

Including *simplePass.js* in *yourProjectScript.js*
```javascript
// yourProjectScript.js

// Import simplePass
import simplePass from "./simplePass/simplePass.js";

// Generate the default password.
const defaultPass = simplePass();

console.log(defaultPass)
// outputs: mrxkfera

// Generate password using only lowercase.
const uppercasePass = simplePass({
  length:16,
  lowercase:true
});

console.log(uppercasePass)
// outputs: UZYQRLLFKHLFASQV

// Generate more 'random' password.
const randomPass = simplePass({
  length:20,
  lowercase:true,
  uppercase:true,
  numbers:true,
  punctuation:true,
});

console.log(randomPass)
// outputs: ;4]TOV`10sB8>m0nf;OP

// Generate a more complex 'random' password.
const complexPass  = simplePass({
    length: 20,
    lowercase: true,
    uppercase: true,
    numbers: true,
    punctuation: true,
    w_beginning: true,
    w_beginning_required: true,
    w_end: true,
    w_end_required: true,
    w_between: true,
    w_between_limit: 4,
    excludeCharacters: 'abc'
});

console.log(complexPass)
// outputs (double quotes are being used to represent the password boundaries): " Im>e >9   g1R{1AD8 "
```

This version also allows you to include individual simplePass modules
```javascript
import config from "./simplePass/config.simplePass.js";

console.log(config.passwordLengthMin)

```

## Typescript

Installing the TypeScript version of the project is similar to installing the Browser/JavaScript versions only we need to grab a different directory.

If you would like to use the TypeScript versions of simplePass (usually for personal development) you should take the entire ```simplePass/src``` directory, and rename it to something more unique (ie: *simplePass*). Once you have the directory you may include it in your project like so:

Directory structure after downloading and renaming the ```src``` directory (for this example we renamed ```src``` to ```simplePass```).
```
.
+-- yourProjectsMainDir/
| +-- index.html
| +-- css/
| +-- js/
| | +-- simplePass/
| | | +-- data/
| | | +-- helpers/
| | | +-- config.simplePass.js
| | | +-- simplePass.js
| | +-- yourProjectScript.js
```

Including *simplePass.js* in *yourProjectScript.js*
```javascript
// yourProjectScript.js

// Import simplePass
import simplePass from "./simplePass/simplePass.ts";

// Generate the default password.
const defaultPass = simplePass();

console.log(defaultPass)
// outputs: mrxkfera

// Generate password using only lowercase.
const uppercasePass = simplePass({
  length:16,
  lowercase:true
});

console.log(uppercasePass)
// outputs: UZYQRLLFKHLFASQV

// Generate more 'random' password.
const randomPass = simplePass({
  length:20,
  lowercase:true,
  uppercase:true,
  numbers:true,
  punctuation:true,
});

console.log(randomPass)
// outputs: ;4]TOV`10sB8>m0nf;OP

// Generate a more complex 'random' password.
const complexPass  = simplePass({
    length: 20,
    lowercase: true,
    uppercase: true,
    numbers: true,
    punctuation: true,
    w_beginning: true,
    w_beginning_required: true,
    w_end: true,
    w_end_required: true,
    w_between: true,
    w_between_limit: 4,
    excludeCharacters: 'abc'
});

console.log(complexPass)
// outputs (double quotes are being used to represent the password boundaries): " Im>e >9   g1R{1AD8 "
```

This version also allows you to include individual simplePass modules
```javascript
import config from "./simplePass/config.simplePass.ts";

console.log(config.passwordLengthMin)

```
