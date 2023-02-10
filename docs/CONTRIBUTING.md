- [Introduction](#introduction)
  - [Code Of Conduct](#code-of-conduct)
- [Git And GitHub](#git-and-github)
  - [Installing Git](#installing-git)
  - [GitHub](#github)
  - [Working With Git And GitHub](#working-with-git-and-github)
- [Creating An Issue](#creating-an-issue)
  - [How Issues Are Handled](#how-issues-are-handled)
- [Developing For The Project](#developing-for-the-project)
- [Resolving Issues](#resolving-issues)
  - [Offering Solution](#offering-solution)
  - [Creating A Pull Request](#creating-a-pull-request)
- [Commit Message Guidelines](#commit-message-guidelines)
  - [Issue Specific Commits](#issue-specific-commits)
  - [Non-Issue Commits](#non-issue-commits)
- [Code Style And Formatting Guide](#code-style-and-formatting-guide)
  - [Limiting Phrases](#limiting-phrases)
  - [Example](#example)

## Introduction

simplePass is a free and open source piece of software that anyone can use or modify (within limitations), likewise anyone is able to contribute as-well (with limitations). There are certain rules and etiquettes that must be followed before you are able to contribute to the project, this is to ensure that everyone is committed to building the same thing and that everyone is able to stay up-to-date with the changes to the project.

This guide is meant to help introduce you to how to contribute to this project. We strive to make this experience as easy and streamline as possible so if you have any issues or questions please reach out over on GitHub and we will get back to you as soon as we can.

### Code Of Conduct

Before you begin we ask that you please read and follow our projects [Code Of Conduct](./CODE_OF_CONDUCT). Thank you!

## Git And GitHub

simplePass is developed using [Git](https://git-scm.com/) as for its version control and [GitHub](https://github.com/) for various things such as a development platform, hosting provider and software distribution. In order to contribute to the project you will need to have a basic understanding of these tools. This guide will walk you through how to use these tools.

### Installing Git

To install and configure Git on your system please visit [Git | Download](https://git-scm.com/downloads) and follow the instructions outlined by the Git Team.

Once you have Git installed and configured, ensure you can run the following command:

```bash
# Checks for the version of the Git program.
git --version

# Outputs similar too:
git version 2.39.0
```

> **Note**: There are also various Git GUIs that aim to make your Git development experience easier a list can be found at [Git SCM | Git GUIs](https://git-scm.com/downloads/guis) (installation and configuration of these tools is out of scope of this guide).

### GitHub

You will need a GitHub account in order to create Issues and Pull-Requests for the project. You can sign-up for a GitHub account at [GitHub | Sign-Up](https://github.com/signup)

### Working With Git And GitHub

It is recommend you have an understanding of the following commands and concepts before contributing to the project:

- Git:
  - [git-clone Command Reference](https://git-scm.com/docs/git-clone)
  - Branches
    - [Git Book V2 | Branches In A Nut Shell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
    - [git-branch Command Reference](https://git-scm.com/docs/git-branch)
    - [git-checkout Command Reference](https://git-scm.com/docs/git-checkout)
  - Commits
    - [git-status Command Reference](https://git-scm.com/docs/git-status)
    - [git-add Command Reference](https://git-scm.com/docs/git-add)
    - [git-restore Command Reference](https://git-scm.com/docs/git-restore)
    - [git-commit Command Reference](https://git-scm.com/docs/git-commit)
  - [git-merge Command Reference](https://git-scm.com/docs/git-merge)
  - [git-fetch Command Reference](https://git-scm.com/docs/git-fetch)
  - [git-pull Command Reference](https://git-scm.com/docs/git-pull)
  - [git-push Command Reference](https://git-scm.com/docs/git-push)
- GitHub:
  - [GitHub Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)
  - [GitHub Clone Reference](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
  - [GitHub Fork Reference](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
  - [GitHub Branches](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
  - [GitHub Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)

These commands and concepts should be sufficient enough for you to begin working with the project. While we could provide you with a set of examples and explainers for each of these commands and concepts, we feel that the creators and maintainers will always explain their tools better than we can. With that said, if there is a specific way that we want something done we will outline it in our documentation.

## Creating An Issue

The easiest way to contribute is by opening Issues on GitHub. Issues don't have to just be problems that you are having with the project, they can also be Feature Requests or Security Reports (please review our [Security Guide](./SECURITY)). These Issues will allow the project maintainers to better understand what needs to be changed in the project.

Before creating a new Issue we as that you please review the [simplePass Issue Tracker](https://github.com/staticBanter/simplePass/issue) to ensure someone else already has not created an identical Issue.

To begin ensure that you are signed into you GitHub account.

Follow these steps to create an Issue:

1. Navigate to the [simplePass Issue Tracker](https://github.com/staticBanter/simplePass/issues)
2. Locate the "New Issue" button and click it. You will directed to the Issue Template Selection Menu, from here you can choose the type of Issue you would like to open ("Bug Report","Feature Request" etc...), or choose to open a blank Issue (though we recommend that you choose a template).
3. Enter a title the summarizes the Issue (For example: "Ability for every third character to be a 3", "Unable to generate a password of length (-1)")
4. If you have chosen an Issue Template fill out the necessary sections of the description, else please enter your own description of the Issue. Please be as detailed as possible and provide as much information as can such as examples and pictures if possible.
5. Submit your Issue.

We ask that you please remain an active member in the project until your Issue is closed as you may be called upon for further elaboration and collaboration.

That is it!

You can read more about GitHub Issues at [GitHub | Docs | About Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)

### How Issues Are Handled

Once you have submitted your Issue it will be available for the community to discus and debate how to proceed. If your Issue is accepted it will follow these this process to closer:

1. The Issue gets a label marking "Open For Pull Request" signaling to others that this Issue has been reviewed enough by the community to proceed onto development. It will also be assigned a member(s) to oversee the closer of the Issue.
2. The assigned members will create a possible solution to the Issue and open a Pull-Request.
3. The community will review the opened Pull-Request and discus and debate about how to proceed. If the solution does not meet the communities expectations it may be rejected and a new solution will have to be developed.
4. If the community accepts the pull request it will be reviewed by a Lead Maintainer who will approve the merge of the Issue into the 'hot'(development) branch of the project. This will allow the new solution to be more broadly tested.
5. If no new issues are found in the 'hot' branch a Lead Maintainer will merge it into the main project branch, adding the new solution (and possible other features as well) to the project.

## Developing For The Project

Please review the [Development](./DEVELOPMENT) documentation as it will outline how to:

- [Obtain The Project Files](./DEVELOPMENT#obtaining-the-files)
- [Development](./DEVELOPMENT#development)
- [Run The Demo](./DEVELOPMENT#running-the-demo)

> **Note**: that you will be required to develop in [TypeScript](typescriptlang.org/) with the tools included in [tool-set](./DEVELOPMENT/#tool-set).

## Resolving Issues

### Offering Solution

One of the simplest ways you can help solve (partially) solve an issue is by offering a solution. You can do this by commenting on Issues on GitHub.

Before you offer your solution we ask that you please read through the existing offered solutions to see if a matching solution has already been suggested.

We ask that you please provide as much detail as possible when offering your solution, code snippets and pictures are welcome.

### Creating A Pull Request

> **Note**: Before opening a Pull Request please check if any other Pull Requests already exist that match your solution.

If you have a working solution to an existing Issue, you may open a Pull Request to request your solution be submitted to close the issue.

Please follow these steps to open a Pull Request

1. Fork a copy of the project to your GitHub account (see [Forking](./DEVELOPMENT#forking)).
2. Clone a copy of the project (see [Cloning](./DEVELOPMENT#cloning--download)).
3. Create a new branch off of the ```hot``` branch. Please name this branch ```[YOUR-GITHUB-ACCOUNT-NAME]-[ISSUE-#]``` OR ```[YOUR-GITHUB-ACCOUNT-NAME]-[ISSUE-NAME]```.
4. Once you are comfortable with your solution commit your changes to the branch. Please review our [Commit Message Guidelines](#commit-message-guidelines)
5. Once you have committed your changes and there are no modifications on your current branch, checkout to the ```hot``` brach.
6. Make a ```git-pull``` for any new changes that may have happened to the branch.
7. Merge the ```hot``` branch into your solution branch. If there are merge conflicts please review the output carefully and ensure you are not editing parts of code that were not part of your solution.
8. Once you are happy with your merge, ```git-push``` your solution branch up to your GitHub account.
9. Navigate to the [simplePass Repository Issue Tracker](https://github.com/staticBanter/simplePass/pulls) and click "New Pull Request". You will be brought to a page were you can compare changes across various Forks.
10. Select the "Compare Across Forks" options and locate your Fork in the 'head repository' section. Once your Fork is selected please also select your solution branch. Your Pull Request comparison should look similar too: (*base repository*:[staticBanter/simplePass] *base*:hot <- *head repository*[YOUR_GITHUB_NAME]/simplePass *compare*: [SOLUTION_BRANCH])
11. You will be given another change to review the changes you have made before you create the Pull Request. Once you have done so you may click "Create Pull Request".
12. You should be brought to a form where you can enter information about your Pull-Request and (if you have the permissions) preform other actions like assigning labels.
13. The title should be automatically filled with your last commit message and the comments section should be filled with your last commit description. If these fields are not filled in please fill them in. Again, please ensure these two pieces of information are following our [Commit Message Guidelines](#commit-message-guidelines).
14. You may then click "Create Pull Request". You will be brought to the Issues Board for that pull request. If your Pull Request references an existing issue number it should be placed under that issues board. From here the community can discuss and inspect the changes you have made.
15. From here if a maintainer of the project inspects your code and finds it satisfies the problem then your Pull Request will be merged into the ```hot``` branch of the repository for wider testing. From their if no issues are found your Pull Request will makse its way into the ```main``` branch of the project.

As always we encourage you to read the source documentation on these topics. You may find links to these topics in our [Working With Git & GitHub](#working-with-git-and-github) section.

## Commit Message Guidelines

### Issue Specific Commits

If a commit is attempting to close a specific issue we use '*GitHub Keywords*' to instruct GitHub to close issues upon the merging of a Pull Request. For example: ```Closes #10: Adds New Feature To The Project```. You can read about using 'GitHub Keywords' at [GitHub Docs | Linking A Pull Request To An Issue](https://docs.github.com/en/enterprise-cloud@latest/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)

We prefer to use the *closes* keyword.

We prefer the commit message follows the ```[Closes] [Issue #]: [ISSUE TITLE]``` format.

If necessary please provide a detailed description with your commit message as well.

All commits must be signed.

### Non-Issue Commits

Not all new features are a result of an Issue on the board. These commits need to be categorized too so we can have a good understanding of what was changed.

We use the [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/) to describe commit messages that do not resolve a specific Issue. For example; ```feat: allow provided config object to extend other configs```.

We also allow the use of the [Angular Conventional Commit Types](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) to be used as well.

If necessary please provide a detailed description with your commit message as well.

All commits must be signed.

## Code Style And Formatting Guide

This Guide is meant to ensure the code looks as uniform as possible.

> **Note**: This portion of the documentation is still a work in progress and feedback will be greatly appreciated.

1. 1 TAB = 4 Spaces.
   1. We use TABs for indentation.
2. Variables, Classes and Function names are camelCased.
   1. *Limiting Phrases* should be prefixed with an ```_``` (underscore) (see [Limiting Phrases](#limiting-phrases)).
   2. Legacy names are prefixed with a ```__``` (double underscore).
3. Every scope must have its contents indented.
4. Line endings must have a terminating ";" (semicolon).
5. Functions, Conditional Statements, Loop Statements must have each of their parameters declared on a new line if they contain more than 2 parameters or 1 Logical Comparison.
6. Arrays(Lists) must have each item declared on a new line.
7. Objects
   1. Must have each attribute declared on a new line.
   2. If an objects attribute declares a new scope that scope must be indented.
8. Use appropriate TypeScript declarations where necessary.

### Limiting Phrases

- Min
- Max
- Require(s/ed)
- Ensure(s/ed)

### Example

```typescript
const foo:boolean = true;

let bar:number = 3;
let min_bar = 1;
let max_bar = 6;

const feeFi = "foFum";

const fizz:Array<string|number> = [
    "a",
    1,
    "b",
];

function ensure_exampleF1(required_var=undefined):boolean{
  if(!var){
    throw new Error('Wheres the foo?');
  }
  return true;
};

fizz.forEach((
    item:string|number,
    index:number,
    array:Array<string|number>
)){
    console.log(`${item} is in position ${index}`);
};

const buzz:object = {
    prop1: "a",
    prop2: 3,
    prop3: [
        1,
        2,
        3
    ],
    prop4:{
        sub1:"A",
        sub2:{
            inner:true
        }
    }
};

function exampleF1(param1:any):any{

    if(param1){
        console.log(param1);
    }

    return param1;

};

function exampleF2(param1:number,param2:boolean):string{

    if(
        param1
        && !param2
    ){
        throw new Error('Not Nice.');
    }

    return "Great Success!";
};

function exampleF3(
    param1:object,
    param2:Array<string|number>,
    param3:number
){

    if(
        param1
        && param2
        && param3
        && (
            // Allows for easy insertion of comments
            (
                param1.prop3
                // And the ability to visually see chunks of logic which is help for debugging.
                && (
                    param1.prop3.length
                    && param3.length
                )
                && param1.prop3.length === param2.length
            )
            || (
                param1.prop2
                && param1.prop2 === param3
            )
        )
    ){
      console.log("Complex Logic Achieved!");
    }

    throw new Error("This was bound to happen");

};


// (Bad)Old Legacy Function
function __ensure_exampleF1(required_var=undefined):any{
    return required_var;
}

```

---

<sub>
Thank you for wanting to help make this project better! If you have any questions comments or concerns regarding this document report open an issue on the <a href="https://github.com/staticBanter/simplePass/issues">simplePass GitHub Issue Tracker</a></sub>
