const express = require('express');
const axios = require('axios');
const cors = require('cors');


const app = express();
const port = 3000;

app.use(cors());


app.get('/', (req, res) => {
  // Define the table using HTML markup
  const table = `
    <style>
      table {
        border-collapse: collapse;
        width: 50%;
        margin: 20px auto;
      }
      th, td {
        border: 1px solid black;
        padding: 8px;
        text-align: center;
      }
    </style>
    <table border="1">
      <tr>
        <th>Get data from postgres</th>
        <th>Get data from mongodb</th>
	<th>Get data from Elasticsearchdb</th>
      </tr>
      <tr>
        <td>/proxy-get-data/postgres</td>
        <td>/proxy-mongodb/mongodb</td>
	<td>/add</td>
      </tr>
    </table>
  `;

  // Send the table as the response
  res.send(table);
});







app.get('/proxy-mongodb/mongodb', (req, res) => {
  // Make an HTTP GET request to your MongoDB endpoint
  axios
    .get('http://10.152.183.66:3001/proxy-mongodb/mongodb') // Replace with your MongoDB server URL
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Error fetching data from MongoDB' });
    });
});

app.get('/proxy-get-data/postgres', (req, res) => {
  // Make an HTTP GET request to your Postgres endpoint
  axios
    .get('http://10.152.183.66:3001/proxy-get-data/postgres') // Replace with your Postgres server URL
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data from Postgres:', error);
      res.status(500).json({ error: 'Error fetching data from Postgres' });
    });
});

app.get('/add', (req, res) => {
  // Make an HTTP GET request to your Role 3 endpoint
  axios
    .get('http://10.152.183.114:3004/add') // Replace with your Role 3 server URL
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data for Role 3:', error);
      res.status(500).json({ error: 'Error fetching data for Role 3' });
    });
});

app.listen(port, () => {
  console.log(`Node.js server is running on port ${port}`);
});
