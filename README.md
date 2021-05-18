<h1 align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/JosueFS/gobarber-web/0fc74a381575090d9dbbc745f0e805b751263f74/src/assets/logo.svg" width="200px">
</h1>

<h3 align="center">
  React Native Application for GoBarber project
</h3>

<p align="center">The best way to schedule your service!</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/JosueFS/gobarber-mobile?color=%23FF9000">

  <a href="https://www.linkedin.com/in/JosueFS/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-josue%20ferreira-%23FF9000">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/JosueFS/gobarber-mobile?color=%23FF9000">

  <a href="https://github.com/JosueFS/gobarber-mobile/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/JosueFS/gobarber-mobile?color=%23FF9000">
  </a>

  <a href="https://github.com/JosueFS/gobarber-mobile/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/JosueFS/gobarber-mobile?color=%23FF9000">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/JosueFS/gobarber-mobile?color=%23FF9000">
</p>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<img alt="Mockup" src="https://camo.githubusercontent.com/5f85c194b91a4c4bd7e8ea1ac4655f5a01f95feb2763814d5d0acbfd94cc72d1/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f656c6961736763662f696d6167652f75706c6f61642f76313538373530393539362f476f4261726265722f6d6f636b75705f6f63676769742e706e67">

## 💇🏻‍♂️ About the project

To see the **api**, click here: [GoBarber Rest API](https://github.com/JosueFS/gobarber-backend-ts)</br>
To see the **web client**, click here: [GoBarber Web](https://github.com/JosueFS/gobarber-web)

## 🚀 Technologies

Technologies that I used to develop this mobile client

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [UnForm](https://unform.dev/) [💜](https://rocketseat.com.br/)
- [Yup](https://github.com/jquense/yup)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Husky](https://github.com/typicode/husky)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Commitizen](https://github.com/commitizen/cz-cli)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

### Requirements

- Have this application's [API](https://github.com/JosueFS/gobarber-backend-ts) running

**Clone the project and access the folder**

```bash
$ git clone https://github.com/JosueFS/gobarber-mobile.git && cd gobarber-mobile
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Be sure the file 'src/services/api.ts' have the IP to your API

# If you are going to emulate with android, run this command
# Be sure to have the emulator open
$ yarn android

# If you are going to emulate with ios, run this command
$ yarn ios
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork JosueFS/gobarber-mobile
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd gobarber-mobile

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
