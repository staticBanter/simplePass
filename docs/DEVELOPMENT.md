- [Contributing](#contributing)
  - [Tool-set](#tool-set)
- [Obtaining The Files](#obtaining-the-files)
  - [Cloning \& Download](#cloning--download)
    - [HTTPS](#https)
    - [SSH](#ssh)
    - [ZIP (Download)](#zip-download)
  - [Forking](#forking)
  - [The Repository Structure](#the-repository-structure)
- [Development](#development)
  - [Modifications For JavaScript](#modifications-for-javascript)
  - [Optional Modifications](#optional-modifications)
    - [Removing HTML-Minifier](#removing-html-minifier)
    - [Removing JSDoc](#removing-jsdoc)
    - [Removing Webpack \& Its Plugins](#removing-webpack--its-plugins)
  - [Installing The Packages](#installing-the-packages)
  - [The Development Pipeline](#the-development-pipeline)
    - [Command List](#command-list)
  - [Running The Demo](#running-the-demo)

## Contributing

Please note that if you are planning to contribute to the project you will be required to use the following tools for development:

### Tool-set

- [Git-SCM(Git)](https://git-scm.com/)
- [GitHub](https://github.com/)
- [Node & NPM](https://nodejs.org/)(LTS Version)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Webpack & Webpack-CLI](https://webpack.js.org/) as well as the following Webpack plugins:
    - [Copy Webpack Plugin](https://github.com/webpack-contrib/copy-webpack-plugin)
    - [Terser Webpack Plugin](https://www.npmjs.com/package/terser-webpack-plugin)
    - [Webpack Dev Server](https://www.npmjs.com/package/webpack-dev-server)
  - [JSDoc](https://jsdoc.app/)
  - [Terser HTML-Minifier](https://github.com/terser/html-minifier-terser)
  - [SASS](https://sass-lang.com/)
  - [Pug](https://pugjs.org/)
  - [Pug-CLI (By: Anduh)](https://www.npmjs.com/package/@anduh/pug-cli)
- A Web Browser (Preferably):
  - [FireFox](https://www.mozilla.org/en-CA/firefox/new/)
  - [Chrome](https://www.google.com/intl/en_ca/chrome/)
  - [Edge](https://www.microsoft.com/en-us/edge)
  - [GNome Web](https://wiki.gnome.org/Apps/Web)
  - [Opera](https://www.opera.com/)
- A Text Editor

You may use other tools that you are comfortable with also, as long as these tools do not:

- Add extra files to the project.
- Add extra packages or dependencies.

If you feel like a new tool should be included in the tool-set feel free to open a *Refactoring Issue* and we will begin looking into it.

Please note that if you are planning to contribute to the project you will be required to use the included files, configurations and tool-sets.

## Obtaining The Files

Before you can begin working on the program you will need to get a copy of the files. Currently, simplePass is begin collaborated and distributed through GitHub, please navigate to [the simplePass repository](https://github.com/staticBanter/simplePass). Once there please follow one of the options below to obtain a copy of the repository.

### Cloning & Download

*Cloning* is done through the Git program and allows us to create copies of repositories on our systems.

> Clones a repository into a newly created directory, creates remote-tracking branches for each branch in the cloned repository (visible using git branch --remotes), and creates and checks out an initial branch that is forked from the cloned repository’s currently active branch.

GitHub offers us various ways to clone the project.

#### HTTPS

To clone the project via *HTTPS* open a Terminal in your system and run the following command:

```bash
git clone https://github.com/staticBanter/simplePass.git
```

You may be prompted to enter your GitHub credentials.

#### SSH

Before you can clone via *SSH* you will need to share an *SSH* key with GitHub. You can read how to connect with GitHub via SSH at [GitHub | Connecting To GitHub With SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

To clone the project via *SSH* open a Terminal in your system and run the following command:

```bash
git clone git@github.com:[YOUR-GITHUB-USERNAME]/simplePass.git
```

You may be prompted to enter your GitHub credentials.

#### ZIP (Download)

To clone the project as a *ZIP* archive you may click [here](https://github.com/staticBanter/simplePass/archive/refs/heads/main.zip) or:

1. Visit the [simplePass GitHub Repository](https://github.com/staticBanter/simplePass)
2. Locate the "Code" button and click it. This will activate a drop-down-menu.
3. Click the "Download Zip" link to begin the download.

### Forking

> **Note**: You are required to have a GitHub account before you can *Fork* the repository.

*Forking* is where we make a copy of a project on our own GitHub account it is similar to *Cloning* but forking will give us different options when working with GitHub such as:

1. You can use a 'Pull Request' to suggest changes from your user-owned fork to the original repository in its GitHub instance, also known as the upstream repository.
2. You can bring changes from the upstream repository to your local fork by synchronizing your fork with the upstream repository.

If you are planing to contribute to the project you will need to have a *Forked* copy on your GitHub account.

To begin ensure that you are signed into you GitHub account.

To fork the project:

1. Navigate to the [simplePass GitHub Repository](https://github.com/staticBanter/simplePass).
2. Locate the "Fork" button and click it. You will be directed to the "Create New Fork" page. Review the page form.
3. Locate the "Create Fork" button and click it. You will be directed to your newly Forked repository of the project under your GitHub account.

For more information about *Forking* please review the GitHub documentation located at [GitHub | Working With Forks | About Forks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)

### The Repository Structure

We will outline some key files and directories here. For more information please study the repository code and files itself.

```text
.
+-- .github/ - Contains files related to GitHub (configs, workflows).
+-- docs/ - Contains the projects documentation files.
| +-- site_template/ - The JSDoc template files used to generate the site.
+-- javascript/ - Contains the JavaScript version of the project.
| +-- bundle/ - Contains the bundled version of the project.
| +-- module/ - Contains the module version of the project.
+-- site/ - Contains the files that make up the programs PWA
+-- site_src/ - Contains source files for the PWA
+-- typescript/ - Contains the TypeScript source files for the program.
+-- test/ - Contains the Test files for the program.
+-- html-minifier.config.json - Config for 'HTML-Minifier`.
+-- jsdoc.config.json - Config for 'JSDoc'
+-- tsconfig.json - Config for 'TypeScript'
+-- webpack.config.js - Config for 'Webpack'.

```

## Development

### Modifications For JavaScript

If you do not wish to develop for simplePass in TypeScript that is fine. We will show you some modifications you can make, as you will not need all of the files and functionality that the repository comes with.

To begin you will only need the following files and directories:

- ```/.github```
- ```/docs```
- ```/javascript```
- ```/site```
- ```/site_src```
- ```/test```
- ```/.gitignore```
- ```/.npmignore```
- ```/html-minifier.config.json```
- ```/jsdoc.config.json```
- ```/LICENSE```
- ```/package.json```
- ```/package-lock.json```
- ```/README.md```
- ```/webpack.config.js```

You may make the following modifications to these files and directories:

- ```package.json```
  1. Remove and modify the following lines:

```json
"devDependencies":{
  "typescript": "X.X.X" // Remove This Line.
}

"scripts":{
  "tsc": "tsc --project .", // Remove This Line.
  "tsc-watch": "tsc --watch --project .", // Remove This Line.
  "watch": "npm run tsc-watch && npm run webpack-dev-build-watch", // Remove The ```npm run tsc-watch``` Command From This Line.
  "production": "npm run tsc && npm run docs-build && npm run webpack-build && npm run html-min" // Remove The ```npm run tsc``` Command From This Line.
}
```

### Optional Modifications

simplePass comes bundled with a few development tools to try to ease the development of the program. If you wish you can remove these tools from your personal development before you start.

#### Removing HTML-Minifier

This tool is used to minify the HTML documentation files. To remove this tool please do the following:

1. Remove the ```html-minifier.config.json``` file.
2. Remove or modify the following lines in the ```package.json```

```json
"devDependencies":{
  "html-minifier": "X.X.X", // Remove This Line.
}

"scripts":{
  "html-min": "html-minifier --config-file html-minifier.config.json --input-dir ./site/docs --output-dir ./site/docs --file-ext html", // Remove This Line.
  "production": "npm run tsc && npm run docs-build && npm run webpack-build && npm run html-min" // Remove The ```npm run html-min``` Command From This Line.
}
```

#### Removing JSDoc

This tool is used to generate documentation files from Markdown and JavaScript doc-comments. To remove this tool please do the following:

> **Note**: Removal of this tool may prohibit you from developing the PWA functionality of this program. This is because JSDocs generates the documentation pages that are included with the PWA.

1. Remove the ```/docs``` directory.
2. Remove the ```/site/docs``` directory.
3. Remove the ```jsdoc.config.json``` file.
4. Remove or modify the following lines from the ```package.json``` file.

```json
"devDependencies":{
  "jsdoc": "X.X.X", // Remove This Line.
}

"scripts":{
  "docs-build": "jsdoc ./javascript/module/ --tutorials ./docs --configure ./jsdoc.config.json", // Remove This Line.
  "production": "npm run tsc && npm run docs-build && npm run webpack-build && npm run html-min" // Remove The ```npm run docs-build``` Command From This Line.
}
```

#### Removing Webpack & Its Plugins

This tool is used to bundle the JavaScript modules into one single file as-well-as minify the bundled code. To remove this tool please do the following:

1. Remove the ```webpack.config.js``` file
2. Remove or modify the following lines from the ```package.json``` file.

```json
"devDependencies":{
  "webpack-cli": "X.X.X", // Remove This Line.
  "webpack-cli": "X.X.X" // Remove This Line.
}

"scripts":{

  // Remove The Following Lines
  "webpack-build": "webpack build --config webpack.config.js",
  "webpack-watch": "webpack build --config webpack.config.js --watch",
  "webpack-dev-build": "webpack build --config webpack.config.js --env development",
  "webpack-dev-build-watch": "webpack build --config webpack.config.js --env development --watch",
  //....

  "watch": "npm run tsc-watch && npm run webpack-dev-build-watch", // Remove the ```npm run webpack-dev-build-watch``` Command From This Line.
  "production": "npm run tsc && npm run docs-build && npm run webpack-build && npm run html-min" // Remove The ```npm run webpack-build``` Command From This Line.
}
```

### Installing The Packages

Once you have made your necessary modifications, if there are any tools that you are using you may now install them using the ```npm install``` command.

### The Development Pipeline

We will briefly outline the development pipeline used to create the program.

1. Code is written and commented in TypeScript. This code is saved in the ```/typescript``` directory.
2. The TypeScript code  is transpiled to JavaScript and saved to the ```/javascript/module``` directory.
3. JSDoc inspects the JavaScript code comments in the ```/javascript/module``` directory and various Markdown files (specified in the ```jsdoc.config.json```). It then generates the PWA documentation pages from this and saves these files to ```/site/docs```.
4. WebPack bundles two things:
   1. It bundles and minimizes the modular JavaScript files from the ```/javascript/module``` and saves the bundle to ```/javascript/bundle```.
   2. It bundles and minimizes a version of the program for the PWA. It takes the ```/site_src/main.js``` and bundles the ```/javascript/bundle``` version with it and saves this bundle to ```/site```
5. HTML-Minifier minifies the PWA HTML files located in ```/site/docs```.
6. SASS takes the SASS fils from ```site_src/``` and transpiles them into the ```site/main.css``` file.

#### Command List

This is a description of the following commands that can be used with the ```npm run``` command.

- ```webpack-build``` - Run the WebPack ```build``` command.
- ```webpack-watch``` - Run the WebPack ```build``` command in watch mode.
- ```webpack-dev-build``` - Run the WebPack ```build``` command in development mode.
- ```webpack-dev-watch``` - Run the WebPack ```build``` command in development mode and watch.
- ```tsc``` - Run the TypeScript transpiler.
- ```tsc-watch``` - Run the TypeScript transpiler in watch mode.
- ```docs-build``` - Run JSDoc to generate the documentation.
- ```sass-build``` - Run the SASS *build* command.
- ```sass-watch``` - Run the SASS *build* command in watch mode.
- ```html-min``` - Run HTML-Minifier to minify the PWA HTML files.
- ```production``` | ```prod``` - Runs the following commands:
  1. ```tsc```
  2. ```docs-build```
  3. ```webpack-build```
  4. ```html-min```
  5. ```sass-build```
  6 ```pug```

### Running The Demo

Because simplePass is developed using JavaScript modules, you will need a local server to host the demo before you will be able to run it. Currently we have no specific preference on what local server method you should be using, but we can make some recommendations.

> **Note**: The setup and configuration of these tools is out of the scope of this documentation.

We highly recommend you use the pre-bundled Webpack development server when developing for this project as it is already configured for the development pipeline. However if you would like to use a different local server, or you are unable to use webpack, we recommend the following other options:

- [Browser-Sync](https://browsersync.io/) (NPM-Tool)
- [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) (VS-Code Extension)
- [Mozilla Developer | Set Up A Local Testing Server](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server) (Python Local Server)
- [PHP Built In Web Server](https://www.php.net/manual/en/features.commandline.webserver.php)
- [Brackets IDE](https://brackets.io/)

Once you have chosen your tool you may point you server to server files from the projects ```/site``` directory. Most servers will by default know that the ```/site/index.html``` is the root of the site but some tools you may have to specify.

---

<sub>Thank you for taking the time to read this document. If you have any questions comments or concerns regarding this report open an issue on the <a href="https://github.com/staticBanter/simplePass/issues">simplePass GitHub Issue Tracker</a></sub>
