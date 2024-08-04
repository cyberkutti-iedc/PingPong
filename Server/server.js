import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = 8080;

// GitHub API base URL
const GITHUB_API_URL = 'https://api.github.com';

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // For parsing application/json

// Helper function to fetch GitHub data
const fetchGitHubData = async (endpoint) => {
    const url = `${GITHUB_API_URL}${endpoint}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `token ${process.env.GITHUB_API_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json'
        }
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`GitHub API request failed: ${response.status} ${response.statusText} ${errorText}`);
    }

    return response.json();
};

// Route to get a static list of topics
app.get('/topics', (req, res) => {
    const topics = [
        'react', 'node', 'javascript', 'typescript', 'vue', 'angular',
        'python', 'java', 'ruby', 'php', 'csharp', 'swift', 'go', 'rust',
        'scikit-learn', 'rails', 'firebase', 'express', 'graphql', 'docker',
        'tensorflow', 'kubernetes', 'machine learning', 'data visualization',
        'mongodb', 'mysql', 'postgresql', 'jenkins', 'rust', 'swift', 'sass',
        'typescript', 'nextjs', 'tailwindcss', 'github', 'studio', 'vagrant'
    ];
    res.json(topics);
});

// Route to get trending repositories
app.get('/trending', async (req, res) => {
    try {
        const data = await fetchGitHubData('/search/repositories?q=stars:>1&sort=stars');
        res.json(data.items);
    } catch (error) {
        console.error('Error fetching trending repositories:', error.message);
        res.status(500).json({ error: 'Unable to fetch trending repositories' });
    }
});

app.get('/custom-trending', async (req, res) => {
    const topics = req.query.topics ? req.query.topics.split(',') : [];
    const query = topics.length > 0 ? `topic:${topics.join(' topic:')}` : 'stars:>1';

    try {
        const data = await fetchGitHubData(`/search/repositories?q=${query}&sort=stars`);
        res.json(data.items);
    } catch (error) {
        console.error('Error fetching customized trending repositories:', error.message);
        res.status(500).json({ error: 'Unable to fetch customized trending repositories' });
    }
});

// Route to get combined GitHub data
app.get('/github-notifications', async (req, res) => {
    try {
        // Fetch data from multiple GitHub endpoints
        const [invitations, repos, starred, notifications, receivedEvents] = await Promise.all([
            fetchGitHubData('/user/repository_invitations'),
            fetchGitHubData('/user/repos'),
            fetchGitHubData('/user/starred'),
            fetchGitHubData('/notifications'),
            fetchGitHubData(`/users/${process.env.GITHUB_USERNAME}/received_events`)
        ]);

        // Combine all data into a single object
        const combinedData = {
            invitations,
            repos,
            starred,
            notifications,
            received_events: receivedEvents
        };

        res.json(combinedData);
    } catch (error) {
        console.error('Error fetching GitHub data:', error.message);
        res.status(500).json({ error: 'Unable to fetch GitHub data' });
    }
});

// Route to get GitHub user information
app.get('/user-info', async (req, res) => {
    try {
        const userData = await fetchGitHubData(`/users/${process.env.GITHUB_USERNAME}`);
        
        // Extract and return relevant user information
        const userInfo = {
            id: userData.id,
            name: userData.name,
            following: userData.following,
            followers: userData.followers,
            avatar_url: userData.avatar_url,
            public_repos:userData.public_repos,
            user:userData.login,
            html_url:userData.html_url
        };

        res.json(userInfo);
    } catch (error) {
        console.error('Error fetching user information:', error.message);
        res.status(500).json({ error: 'Unable to fetch user information' });
    }
});

// Route to get a list of users you are following
app.get('/user-following', async (req, res) => {
    try {
      const data = await fetchGitHubData(`/users/${process.env.GITHUB_USERNAME}/following`);
      res.json(data);
    } catch (error) {
      console.error('Error fetching following list:', error.message);
      res.status(500).json({ error: 'Unable to fetch following list' });
    }
  });

  app.get('/user-followers', async (req, res) => {
    try {
      const data = await fetchGitHubData(`/users/${process.env.GITHUB_USERNAME}/followers`);
      res.json(data);
    } catch (error) {
      console.error('Error fetching followers list:', error.message);
      res.status(500).json({ error: 'Unable to fetch followers list' });
    }
  });

  
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
