const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

const DEFAULT_USERNAME = 'EllisIl'; // Default GitHub username

// Homepage Route
app.get('/', async (req, res) => {
  const username = req.query.username || DEFAULT_USERNAME; // Use query parameter or default
  const GITHUB_API_URL = `https://api.github.com/users/${username}/repos`;

  try {
    const response = await axios.get(GITHUB_API_URL);
    const projects = response.data.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || 'No description available',
      url: repo.html_url
    }));

    const searchQuery = req.query.search || '';
    const filteredProjects = projects.filter(project =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    res.render('index', { projects: filteredProjects, searchQuery, username });
  } catch (error) {
    console.error('Error fetching data from GitHub:', error.message);
    res.status(500).send(`Error fetching projects for user: ${username}.`);
  }
});

// Project Details Route
app.get('/project/:id', async (req, res) => {
    const username = req.query.username || DEFAULT_USERNAME;  // Ensure the username is passed
    const GITHUB_API_URL = `https://api.github.com/users/${username}/repos`;
  
    try {
      const projectId = parseInt(req.params.id);
      const response = await axios.get(GITHUB_API_URL);
      const project = response.data.find(repo => repo.id === projectId);
  
      if (project) {
        res.render('project', {
          project: {
            name: project.name,
            description: project.description || 'No description available',
            url: project.html_url
          },
          username: username  // Pass the username to the view
        });
      } else {
        res.status(404).send('Project not found');
      }
    } catch (error) {
      console.error('Error fetching project details:', error);
      res.status(500).send('Error fetching project details.');
    }
  });
  

// Contact Page Route
app.get('/contact', (req, res) => {
  res.render('contact');
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  res.send(`Thank you, ${name}. We have received your message: "${message}"`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
