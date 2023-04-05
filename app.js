const { Pool } = require('pg');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'neguta',
  host: 'localhost',
  database: 'uniserv',
  password: 'postgres',
  port: 5432,
});

app.use(express.static('public'));
app.use('/pages/form', express.static('public/pages/forms.html'))
app.use('/pages/table', express.static('public/pages/table.html'))

app.use(bodyParser.json());


app.post('/', (req, res) => {
  const { fname, lname, dbirth, username, pass, prev, email, phnum } = req.body;
  //console.log(pass);

  pool.query(
    'INSERT INTO userServ (fname, lname, dbirth, username, pass, prev, email, phnum) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
    [fname, lname, dbirth, username, pass, prev, email, phnum],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error inserting user information');
      } else {
        console.log('User information inserted successfully');
        res.sendStatus(200);
      }
    }
  );
});


app.post('/pages/form', (req, res) => {
    const { ucity, num1, num2, num3 } = req.body;
  
    pool.query(
      'INSERT INTO stats (ucity, num1, num2, num3) VALUES ($1, $2, $3, $4)',
      [ucity, num1, num2, num3],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error inserting stats information');
        } else {
          console.log('Stats information inserted successfully');
          res.sendStatus(200);
        }
      }
    );
  });


  app.get('/getStats', (req, res) => {
    pool.query('SELECT * FROM stats', (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error retrieving stats information');
      } else {
        res.send(results.rows);
      }
    });
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
