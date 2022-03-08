# STEPS TO CREATE A TDD PRJECT TEMPLATE

1. Create a project folder (mkdir [name]).
2. Open that folder (node [name]). If you cant use the node commant, install it by cmd+shift+P and typing "Shell command", the option should come up.
3. Check node version (node -v). I recommend not to go with the latest version.
4. Create a file to save the node version for the project (touch .nvmrc).
5. Add to that .nvmrc file the version of node that you want to use (16.13.0).
6. Run nvm install.
7. Now that the node version is installed, to confirm your local configuration to that version, run nvm use.
8. Run git init.
9. Run npm init to create the package.json.
10. Create a file and name it .gitignore
11. Go to https://github.com/github/gitignore/blob/master/Node.gitignore, copy the content and paste it in your .gitignore
12. Follow the installation and usage of eslint from https://www.npmjs.com/package/eslint. The last step is going to result in an error, it will work in step 21.
    ✔ How would you like to use ESLint? · style
    ✔ What type of modules does your project use? · commonjs
    ✔ Which framework does your project use? · none
    ✔ Does your project use TypeScript? · No / Yes
    ✔ Where does your code run? · browser
    ✔ How would you like to define a style for your project? · guide
    ✔ Which style guide do you want to follow? · airbnb
    ✔ What format do you want your config file to be in? · JS
13. Copy-paste the contents from the file in this repo to the .eslint.js file.
14. Copy-paste the contents from the file in this repo to the .eslintignore file.
15. Create a dummy source file.
16. Follow the installation and usage of prettier from https://prettier.io/docs/en/install.html.
17. Run echo {}> .prettierrc.json to create a .prettierrc file and copy-paste the contents from the file in this project.
18. Create a .prettierignore file and copy-paste the contents from the file in this project.
19. Follow the installation eslint-plugin-prettier from https://www.npmjs.com/package/eslint-plugin-prettier.
20. Follow the installation eslint-config-prettier from https://www.npmjs.com/package/eslint-config-prettier.
21. Back to the eslint, run ./node_modules/.bin/eslint src/dummy.js and fix the errors. You can try to fix some by adding the flag --fix to the command.
22. Create a dummy test file.
23. Follow the installation of jest from https://jestjs.io/docs/getting-started.
24. Check that the tests are working by running npm run test.
25. Create a jest.config.js file and copy-paste the contents from the file in this project.
26. Add the watch test option to the package.json scripts.
27. Follow the installation of husky from https://www.npmjs.com/package/husky. Repeat the pre-commit steps for pre-push.
28. Follow the installation of lint-staged from https://www.npmjs.com/package/lint-staged. After it is installed, if you remove part ot the "style" of your dummy file you will get errors. If you dont reload window by typing that in cmd+shift+cmd. Now if you git agg your changes those changes will be fixed before commiting.
29. Follow the installation of commitlint from https://github.com/conventional-changelog/commitlint.
30. Follow the installation of typesync from https://www.npmjs.com/package/typesync. Dont install it globally so ommit the -g flag.
31. Update your package.json lint-staged as it is in this repo. If any of your installations is stored as dependencies, run the installation command again but with the flag --save-dev.
32. Setup your github repo and push!

To create a project out of this template run:
`gh repo create projectName --public --confirm --template="github.ibm.com/Maria-Inigo/tdd-kata-template"´´ `ggpull´´

Update secres: detect-secrets scan --update .secrets.baseline
