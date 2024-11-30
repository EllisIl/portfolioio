# Overview

As a software engineer, my goal is to continue expanding my skills in web development, particularly with server-side programming and dynamic content generation. In this project, I developed a web app to showcase my portfolio and GitHub projects using Node.js, Express, and EJS. The app pulls project information from my GitHub profile and dynamically generates web pages to display my work. 

To start the app locally, clone this repository and run the following commands:

1. Install dependencies:  
```bash
npm install
```

2. Start the server:  
```bash
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:3000` to view the homepage of the app.

This software was created to demonstrate how I can integrate dynamic content into a simple web app, and to provide a platform for presenting my coding projects and skills to others.

[Software Demo Video](https://youtu.be/VdZAtaMU2TE)

# Web Pages

The web app consists of two main pages:

1. **Homepage**  
   The homepage displays a form where users can input a GitHub username to pull project information from GitHub dynamically. If no username is entered, the app defaults to using my GitHub username, "EllisIl." The page lists several of my projects with basic details (name, description, link to the project) dynamically populated from the GitHub API.

2. **Project Page**  
   When a user clicks on a project from the homepage, they are directed to a separate page showing detailed information about that specific project. The project page contains a description, the tech stack used, and a link to the project on GitHub. This page is dynamically generated using the data fetched from GitHub.

The transition between pages occurs as the user submits the form on the homepage to either input a custom username or use the default. Clicking on any project will navigate to the corresponding project details page.

# Development Environment

For development, I used the following tools:

- **Node.js**: The server-side environment for running JavaScript outside the browser.
- **Express**: A web application framework for Node.js, used to handle routing and server-side logic.
- **EJS (Embedded JavaScript Templates)**: A templating engine used to dynamically generate HTML pages based on the data from the GitHub API.
- **GitHub API**: Used to fetch project data such as project names, descriptions, and links from my public GitHub repositories.

The app runs using Node.js, and the project data is fetched dynamically from GitHub using simple HTTP requests.

# Useful Websites

These websites were crucial in helping me develop this project:

* [Node.js Documentation](https://nodejs.org/en/docs/)
* [Express.js Documentation](https://expressjs.com/en/starter/installing.html)
* [EJS Documentation](https://ejs.co/)
* [GitHub API Documentation](https://docs.github.com/en/rest)

# Future Work

Although the app is functional, there are a few areas for improvement and features I plan to add:

* Add the ability to view the details of multiple projects on the homepage instead of just displaying a single GitHub repository.
* Implement a search feature to filter through projects based on tags or categories (e.g., Web Development, Machine Learning).
* Improve the styling and responsiveness of the project pages for mobile users.
* Integrate a database to store user data (for example, user-submitted project portfolios).
