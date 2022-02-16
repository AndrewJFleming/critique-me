<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://critique-me.netlify.app/posts">
    <img src="src\images\maestro, green.png" alt="Logo" height="200">
  </a>

  <h3 align="center">CritiqueMe</h3>

  <p align="center">
    An art sharing app where users can post their latest work and receive comments on how to improve their skills.
    <br />
    <br />
    <a href="https://critique-me.netlify.app/posts">CritiqueMe (Netlify)</a>
    ·
    <a href="https://www.linkedin.com/in/andrew-j-fleming-web-dev">My LinkedIn</a>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#related-projects">Related Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

  <a href="https://critique-me.netlify.app/posts">
    <img src="src\images\screenshot.png" alt="screenshot">
  </a>

CritiqueMe is an art sharing app where users can post their images to be critiqued by other registered users.

The app features image upload functionality and posts can be searched by keywords in the title or by tags.

The project uses the Material Ui library for pagination and users can authenticate using OAuth in addition to the standard Json Web Token method of authentification.

_A version of <a href="https://critique-me.netlify.app/posts">CritiqueMe</a> is hosted on Netlify._

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [MongoDB](https://www.mongodb.com/)
* [Express.js](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/)
* [Material UI](https://mui.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Below you'll find some instructions on what you'll need to run the project locally on your machine, how to install the app and how to get the app running.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

Before you run app locally, you'll need to install both the frontend and backend dependencies. 


1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```

2. Navigate to the desired directory.
   ```sh
   cd frontend
   ```
   or
   ```sh
   cd backend
   ```

3. Install NPM packages
   ```sh
   npm install
   ```

4. Rename the .env.example files in the frontend and backend directories to .env and replace the MongoDB URL string to the one provided by you MongoDB database.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
The frontend uses the backend to interact with this project's MongoDB database. 

1. Start the backend locally.
   ```sh
   npm start
   ```

2. Navigate to the the backend directory and start the server with the same command.
   ```sh
   npm start
   ```

3. You'll need to register/signin before you can post or comment. 

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- RELATED PROJECTS -->
## Related Projects
Checkout my other MERN stack projects. 

1. <a href="https://github.com/AndrewJFleming/purgation-react-blog">Purgation React Blog App</a>

2. <a href="https://github.com/AndrewJFleming/embossed-react-ecommerce">Embossed React Ecommerce App</a>

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Andrew Fleming - [My LinkedIn](https://www.linkedin.com/in/andrew-j-fleming-web-dev) - aflemi1@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>



[project-screenshot]: src\images\screenshot.png