<a name="readme-top"></a>



<div align="center">
  
  <img src="./src/assets/images/logo.png" alt="logo" width="250" height="250" />
  <br/>

  <h3><b>TV Maze App</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)


<!-- PROJECT DESCRIPTION -->

# 📖 [TV AMAZE APP ] <a name="about-project"></a>

  **[TV Amaze App]**  TV Amaze App is a SPA app that leverages REST methods to provide users with an immersive experience in exploring and interacting with a vast collection of TV series. By incorporating likes, comments, and reservation functionalities, this app allows users to engage with their favorite shows and effectively manage their viewing schedule. Powered by ES6 modules, Webpack, babel and the utilization of async/await and Promises, TV Maze App delivers a seamless and efficient user experience. The app was built using plain javascript to hightlight the skills to construct SPA apps without frameworks.
  Moreover I used docker, docker compose and bash script to automate the deployment process in wherever the app is running. Just run the script to deploy the app in wherever cloud provider you are using and enjoy the app.
 

## 🛠 Built With <a name="built-with"></a>
<p> This project was built using:
    HTML, CSS and JAVASCRIPT, ES6 Modules, REST API, ASYNC/await, Promises, WEBPACK
</p>

### Tech Stack <a name="tech-stack"></a>

<li> HTML </li>
<li> CSS </li>
<li> Javascript </li>
<li> Webpack </li>
<li> Git </li>
<li> Github </li>
<li> Netlify</li>



<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.w3schools.com/html/">HTML</a></li>
  </ul>
</details>

<details>
  <summary>Styles</summary>
  <ul>
    <li><a href="https://www.w3.org/Style/CSS/Overview.en.html">CSS</a></li>
  </ul>
</details>

<details>
  <summary>Language</summary>
  <ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">CSS</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://github.com/">GIT</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **[HTML & CSS Best practices]**
- **[REST API]**
- **[USER LIKES]**
- **[USER COMMENTS]**
- **[USER RESERVATIONS]**
- **[ES6 Modules]**
- **[Webpack Bundling ]**
- **[CI and CD Deployment with Netlify]**

### Series List:
 TV Amaze App fetches data from the TV Maze API and displays an extensive list of TV series to users. The app employs REST methods to efficiently retrieve and present series information, including title, genre, summary, and rating. The well-organized series list provides users with a seamless browsing experience.

### Likes:
 Users can express their preferences and indicate their favorite series by utilizing the "Like" feature. This functionality is achieved through REST methods, enabling users to interact with the app and curate their personal collection of liked shows. By utilizing async/await and Promises, the app ensures smooth and responsive liking functionality.

### Comments Popup: 
 TV Amaze App enables users to engage in discussions and share their thoughts on specific TV series by leaving comments. Leveraging REST methods, users can interact with the app to post comments, fostering a community-driven environment. The implementation of ES6 modules and async/await allows for seamless handling of comment-related operations in a popup window.

### Reservations Popup:
 Users can effectively manage their TV viewing schedule by reserving series for specified periods. By leveraging REST methods, users can reserve a series for a specific timeframe, ensuring they do not miss their planned watch sessions. The app employs async/await and Promises to handle reservation operations smoothly and efficiently, this features is load in a popup window.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

### 🚀 Live Demo <a name="live-demo"></a>

> 

- [Live Demo Link](	https://google.com)



<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>


To get a local copy up and running, follow these steps.

### Prerequisites
To run this project  you need the following tools:
- [VS Code ]
- [Git and GitHub ]
- [Webpack Installation ]
- [CI CD Netlify Bot  Instalation]
- [Nodejs ]



### Setup

Clone this repository to your desired folder:
```sh
 cd TV-AMAZE-APP
 git clone git@github.com:alyconr/TV-AMAZE-APP.git
```


### Install

Install this project with:

Lighthouse run
```sh
    npm install -g @lhci/cli@0.7.x
```
Webhint:
```sh
     npm install --save-dev hint@7.x
```
Stylelint:
```sh
     npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
```

Eslint
```sh
     npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
```
Webpack
```sh
     npm init -y
     npm install webpack webpack-cli --save-dev
```

Webpack Css loader
```sh
     npm install --save-dev style-loader css-loader
```
Webpack html loader
```sh
     npm install --save-dev html-loader
```

Webpack html plugin
```sh
     npm install --save-dev html-webpack-plugin
```

Webpack dev server
```sh
     npm install --save-dev webpack-dev-server
```
Babel Dependency loader
```sh
     npm install --save-dev babel-loader
```
Minify CSS: To reduce the size of your CSS file by removing unnecessary characters such as whitespace and comments. 
```sh
     npm install --save-dev css-minimizer-webpack-plugin
```

Split CSS: If your CSS file is large, splitting it into smaller modular files can help improve the loading time. 
```sh
     npm install mini-css-extract-plugin --save-dev
```
Babel core
```sh
     npm install --save-dev @babel/core @babel/preset-env
```


### Usage

To run locally run the following command:

```sh
    npm run build
    npm run start
```


### Run tests

To run tests, run the following command:


To test the Stylelint linter:
```sh
    npx stylelint "**/*.{css,scss}"
```
To test the Webhint:
```sh
    npx hint .
```
To test the ESLint linter:
```sh
    npx eslint .
```


### Deployment

You can deploy this project using your local enviroment or use Netlify bot to deploy it online.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

JEYSSON CONTRERAS


👤 **Author1**

- GitHub: [@alyconr](https://github.com/alyconr)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/jeysson-aly-contreras/)




<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>


- [ ] **[Personalized Recommendations]**
- [ ] **[Advanced Search Filters]**
- [ ] **[Notifications and Reminders]**


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/alyconr/TV-AMAZE-APP.git/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

> Write a message to encourage readers to support your project

If you like this project please give  one start.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank  God for giving me the strength to carry out this project.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](LICENSE.md) licensed.



<p align="right">(<a href="#readme-top">back to top</a>)</p>
