const fs = require('fs');

// Read the JSON file
const rawData = fs.readFileSync('weatherData.json', 'utf8');
const jsonData = JSON.parse(rawData);

// Convert JSON to CSV format
const csvData = jsonData.map(entry => {
  return Object.values(entry).join(',');
}).join('\n');

// Write CSV data to a file
fs.writeFileSync('weatherData.csv', csvData);
