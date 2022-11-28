simplePass is a free and open source piece of software anyone is able to use it and modify it (within limitations), likewise anyone is able to contribute as-well (with limitations). There are certain rules and etiquettes that must be followed before you are able to contribute to the project, this is to ensure that everyone is committed to building the same thing and that everyone is able to up-to-date with the changes to the project.

- [Git \& GitHub](#git--github)
  - [Requesting A Feature And Opening An Issue](#requesting-a-feature-and-opening-an-issue)
    - [Process](#process)
    - [Participation](#participation)
      - [Opening An Issue](#opening-an-issue)
      - [Creating A Pull Request](#creating-a-pull-request)


## Git & GitHub

simplePass is currently being collaborated on in the GitHub ecosystem using Git-SCM.
Therefore you will need an understanding of Git and have it installed and configured; you can find the download at []().
Furthermore it is *highly* recommended that you have at least a basic understanding of Git and its commands. A full list of commands can be found at [Git | Reference Document](https://git-scm.com/docs).

You will also need a GitHub Account which you can register for at [GitHub | Sign-Up](https://github.com/signup).
We also ask that you have a basic understanding of GitHub, particularly [Issues](https://docs.github.com/issues) and [Pull Requests](https://docs.github.com/pull-requests)

### Requesting A Feature And Opening An Issue

#### Process

This is brief outline of how Feature Requests and Issue Resolutions happen.

1. A new Feature or Issue is opened on the [Issue Tracker](https://github.com/staticBanter/simplePass/issues) following the [steps outlined below](#participation). From here the issue may be discussed and collaborated on by the entire community. If the issue is accepted by the core development team it will be labeled and added to the list of working projects.
2. When the issue is accepted it will be marked as *Available For PR*, a Pull Request to resolve the issue may be opened.
3. The Pull request will be tested and vetted by the Core Development team to ensure it resolves the issue and preform quality assurance.
4. If team approves the PR it will be merged into the *Hot* branch (an ever changing branch where all new features are added) of the project where others can test, develop and use the feature.
5. If there are no new bugs found in the feature it will eventually be moved down the stream into *Development* (a more robust development environment) and finally the *Main* branch (contains core project code) of the project. Once the Pull Request feature has been merged into the main branch, possible with other features as well, it will be closed and marked as completed.

#### Participation

We ask that you only open one issue at a time please, as it may become to complicated to manage multiple people maintaining multiple issues.

##### Opening An Issue

If you would like to see a new feature added to the program or you have noticed a bug/issues then please follow these steps to open a *GitHub Issue*.

1. Log-In to your GitHub Account and navigate to the [simplePass repo issues section](https://github.com/staticBanter/simplePass/issues).
2. Click the *New Issue* button, this should bring you to a page where you can describe your issue or feature.
3. The title should contain either the words;
  * **Feature**: For requesting a new feature.
  * **Issue**: For requesting an issue be resolved.
  * **Refactor**: For requests that don't solve issues or introduce new features. These are things like changing coding styles, or coding practices.

For example: ```Feature: Option for every third character to be a '2'``` or ```Issue: Option that sets every third character to be a '2', is resulting in '4'``` or ```Refactor: All indentations should be equal to 12 spaces```

4. In the summary please provide as much information as you can. We also ask that you continue to participate in that issue channel as well as you may be required to help elaborate on a given topic. The Summary should be styled in the following, you may copy these examples and replace the parts that you need, and remove the comments:

**Functional Issues**: Issues related to the functionality of the program itself.

```md

Affected Version #: [VERSION NUMBER]

Affected Platforms:
[LIST OF PLATFORMS THAT HAVE THE ISSUE]

Steps to reproduce the issue:
[LIST OF STEPS TO REPLICATE ISSUE]

<!--
IF You know the files causing the issues.
-->
List Of Problematic Files:
* [FILENAME]:[LINE NUMBER]
* [FILENAME]:[STARTING LINE NUMBER] - [ENDING LINE NUMBER]
* [FILENAME]:
  * [STARTING LINE NUMBER] - [ENDING LINE NUMBER]
  * [STARTING LINE NUMBER] - [ENDING LINE NUMBER]
<!--
ELSE
-->
**Debugging Needed**

[SUMMARY OF HOW THE ISSUE WAS DISCOVERED]

<!--
Optional
-->
[SUMMARY DESCRIBING POSSIBLE SOLUTIONS]

```

**Syntactical And Documentation Issues**: Issues that a related to coding styles, coding practices or documentation.

```md

<!--
IF errors exist in files
-->
Affected Version #: [VERSION NUMBER]

List Of Problematic Files:
* [FILENAME]:[LINE NUMBER]
* [FILENAME]:[STARTING LINE NUMBER] - [ENDING LINE NUMBER]
* [FILENAME]:
  * [STARTING LINE NUMBER] - [ENDING LINE NUMBER]
  * [STARTING LINE NUMBER] - [ENDING LINE NUMBER]

[SUMMARY OF THE SYNTACTICAL ISSUES OR CODE REFORMS]

<!--
ELSE IF A new coding styles, or coding practice suggestion
-->

[SUMMARY AS TO WHY NEW STYLES OR PRACTICES SHOULD BE ADOPTED]

```

5. If you issue is accepted by the Core Development Team, it will be labeled and continued with processing.

##### Creating A Pull Request

Before you decide to open a Pull Request we ask that you check the following:
1. Your Pull Request resolves an issue on the Issue Tracker.
2. The issue you are trying to resolve is labeled with *Available For PR*.
3. No other Pull Request is currently trying to solve the issue.

If your Pull Request passes this list you may continue.

If you need assistance setting up the development environment please review the [Development](./tutorial-development.md) section. You will be required to use the included repository files and required to build with the included tool-sets, you may also use any other tool-set you feel comfortable with as long as they do not include more files into the repo.

To create a Pull Request we ask that you follow these steps:
1. Create a Fork of the simplePass repository into your repository. Your Fork should stem from the *main* branch of the project.
2. Clone your Forked copy of the project to your development environment. From there you may work on your changes that you want to make. When 
3. Push the changes back up to your GitHub repository for the project.
4. Navigate back to the simplePass repository [Pull Request Tracker]() create a pull request with the title following this syntax ```Closes #[Issue-Number] - [Optionally The Title Of The Issue]``` where *Issue Number* is the number of the issue assigned on the issue tracker you are trying to close. For example: ```Closes #42 - Can Not Generate Passwords Longer Than 2```. 

The summary should contain:
* An overview of why this solution should be accepted.
* An overview of the solution and how it works.
* An overview of any files that had to be changed and the reasons for changing them.

The pull request should be targeting the *Hot* branch of the simplePass repository with changes coming from your Forked repository. At this stage we also kindly ask that you remain active on GitHub as you may be required to further elaborate and collaborate on your request.

5. The Pull Request will either be automatically linked to the issue by GitHub or a Core Development Team member.
6. From this point the rest of the process continues as outline in [Process](#process)



---

Thank you for wanting to help make this project better!
