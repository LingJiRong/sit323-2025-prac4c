const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Welcome route
app.get('/', (req, res) => {
    res.send('Welcome to the Enhanced Calculator Microservice!');
  });  

// Exponentiation
app.get('/power', (req, res) => {
  const { base, exponent } = req.query;
  if (!isValidNumbers(base, exponent)) {
    return res.status(400).json({ error: 'Invalid input. base and exponent must be numbers.' });
  }
  res.json({ result: Math.pow(Number(base), Number(exponent)) });
});

// Square Root
app.get('/sqrt', (req, res) => {
  const { num } = req.query;
  if (num === undefined || isNaN(num)) {
    return res.status(400).json({ error: 'Invalid input. num must be a number.' });
  }
  if (Number(num) < 0) {
    return res.status(400).json({ error: 'Cannot calculate square root of a negative number.' });
  }
  res.json({ result: Math.sqrt(Number(num)) });
});

// Modulo
app.get('/modulo', (req, res) => {
  const { num1, num2 } = req.query;
  if (!isValidNumbers(num1, num2)) {
    return res.status(400).json({ error: 'Invalid input. num1 and num2 must be numbers.' });
  }
  res.json({ result: Number(num1) % Number(num2) });
});

// Helper function
function isValidNumbers(a, b) {
  return !isNaN(a) && !isNaN(b);
}

app.listen(port, () => {
  console.log(`Enhanced calculator microservice running at http://localhost:${port}`);
});
