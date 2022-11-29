simplePass is a free and open source piece of software anyone is able to use it and modify it (within limitations), likewise anyone is able to contribute as-well (with limitations). There are certain rules and etiquettes that must be followed before you are able to contribute to the project, this is to ensure that everyone is committed to building the same thing and that everyone is able to up-to-date with the changes to the project.

- [Git \& GitHub](#git--github)
  - [Requesting A Feature And Opening An Issue](#requesting-a-feature-and-opening-an-issue)
    - [Process](#process)
    - [Participation](#participation)
      - [Opening An Issue](#opening-an-issue)
      - [Creating A Pull Request](#creating-a-pull-request)


## Git & GitHub

simplePass is currently being collaborated on in the GitHub ecosystem using Git-SCM.
Therefore you will need an understanding of [Git SCM](https://git-scm.com/) and have it installed and configured; you can find the download at [Git SCM | Downloads](https://git-scm.com/downloads).
Furthermore it is *highly* recommended that you have at least a basic understanding of Git Commands. A full list of commands can be found at [Git | Reference Document](https://git-scm.com/docs).

You will also need a [GitHub](https://github.com/) Account which you can register for at [GitHub | Sign-Up](https://github.com/signup).
We also ask that you have a basic understanding of GitHub, particularly [Issues](https://docs.github.com/issues) and [Pull Requests](https://docs.github.com/pull-requests)

### Requesting A Feature And Opening An Issue

#### Process

This is brief outline of how Feature Requests and Issue Resolutions happen.

1. A new Feature or Issue is opened on the [Issue Tracker](https://github.com/staticBanter/simplePass/issues) following the [steps outlined below](#participation). From here the issue may be discussed and collaborated on by the entire community. If the issue is accepted by the core development team it will be labeled and added to the list of working projects.
2. When the issue is accepted it will be marked as *Available For PR*, a Pull Request may be opened by the anyone in the community to help resolve the issue.
3. The Pull request will be tested and vetted by the Core Development team to ensure it resolves the issue and preform quality assurance.
4. If team approves the PR it will be merged into the *Hot* branch (an ever changing branch where all new features are added) of the project where others can test, develop and use the feature.
5. If there are no new bugs found in the feature it will eventually be moved down the stream into the *Main* branch (contains core project code) of the project. Once the Pull Request feature has been merged into the main branch, possible with other features as well, it will be closed and marked as completed.

#### Participation

We ask that you only open one issue at a time please, as it may become to complicated to manage multiple people maintaining multiple issues.

##### Opening An Issue

If you would like to see a new feature added to the program or you have noticed a bug/issues then please follow these steps to open a *GitHub Issue*.

1. [Log-In to your GitHub Account](https://github.com/login) and navigate to the [simplePass repo issues section](https://github.com/staticBanter/simplePass/issues).
2. Click the *New Issue* button, this should bring you to a page where you can describe your issue or feature.
3. The title should contain either the words;
  * **Feature**: For requesting a new feature.
  * **Bug**: For requesting a bug to be fixed.
  * **Refactor**: For requests that don't solve issues or introduce new features. These are things like changing coding styles, or coding practices.

    For example: ```Feature: Option for every third character to be a '2'``` or ```Issue: Option that sets every third character to be a '2', is resulting in '4'``` or ```Refactor: All indentations should be equal to 12 spaces```

4. The summary should follow the titles respective issue template found at the [simplePass GitHub Issue Templates Directory](https://github.com/staticBanter/simplePass/tree/main/.github/ISSUE_TEMPLATE).
5. If you issue is accepted by the Core Development Team, it will be labeled and continued with processing.

##### Creating A Pull Request

Before you decide to open a Pull Request we ask that you check the following:
1. Your Pull Request resolves an issue on the [Issue Tracker](https://github.com/staticBanter/simplePass/issues).
2. The issue you are trying to resolve is labeled with *Available For PR*.
3. No other [Pull Request](https://github.com/staticBanter/simplePass/pulls) is currently trying to solve the issue.

If your Pull Request passes this list you may continue.

If you need assistance setting up the development environment please review the development documentation section. You will be required to use the included repository files and required to build with the included tool-sets, you may also use any other tool-set you feel comfortable with as long as they do not include more files into the repo or refactor the code without requesting a refactor.

To create a Pull Request we ask that you follow these steps:
1. [Create a Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) of the simplePass repository into your repository collections. Your Fork should stem from the *main* branch of the project.
2. Clone your Forked copy of the project to your development environment. From there you may work on your changes that you want to make.
3. Create a new branch on your local repo following this syntax style ```[YOUR_GITHUB_ACCOUNT_NAME]-[BRANCH_TITLE]```.
4. When you are satisfied with your changes push the changes from commit them following this syntax style ```Closes #[Issue-Number] - [Optionally The Title Of The Issue]```.
5. Push your new branch up to your Forked GitHub Repo of simplePass.
6. Navigate to the new branch you just pushed up to GitHub. GitHub will indicate that your new branch is ahead of simplePass and that you are able to contribute.
7. Continue by click the *Compare & Pull Request*. This should bring you to the simplePass Pull Request Board. From here please ensure the title is properly formatted as follows:

  * The title contains your commit message (e.g ```Closes #[Issue-Number] - [Optionally The Title Of The Issue]``).

  The summary should contain:
  * An overview of why this solution should be accepted.
  * An overview of the solution and how it works.
  * An overview of any files that had to be changed and the reasons for changing them.

  The pull request should be targeting the *Hot* branch of the simplePass repository with changes coming from your Forked repository (e.g ```base-repo:staticBanter/simplePass | base:hot <--- head-repo[YOUR_GITHUB_USER_NAME]/simplePass | compare:[YOUR_GITHUB_ACCOUNT_NAME]-[BRANCH_TITLE]```). At this stage we also kindly ask that you remain active on GitHub as you may be required to further elaborate and collaborate on your request.

8. The Pull Request will either be automatically linked to the issue by GitHub or manually by a Core Development Team member.
9. From this point the rest of the process continues as outline in [Process](#process)



---

Thank you for wanting to help make this project better!

---

<sub>Thank you for taking the time to read this document. If you have any questions comments or concerns regarding this report open an issue on the <a href="https://github.com/staticBanter/simplePass/issues">simplePass GitHub Issue Tracker</a></sub>