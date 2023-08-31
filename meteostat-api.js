const axios = require('axios');
const fs = require('fs');

const options = {
  method: 'GET',
  url: 'https://meteostat.p.rapidapi.com/stations/hourly',
  params: {
    station: '03534',       // Replace with the desired station ID
    start: '2023-07-24',
    end: '2023-08-20',
    tz: 'Europe/London'
  },
  headers: {
    'X-RapidAPI-Key': '94a0d87e62msh61db71d4613564bp184cdfjsnbd9f1c3f54ec',
    'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'
  }
};

async function fetchWeatherData() {
  try {
    const response = await axios.request(options);
    const weatherData = response.data.data;

    // Save weatherData to a JSON file
    fs.writeFileSync('weatherData.json', JSON.stringify(weatherData, null, 2));
    console.log('Data saved to weatherData.json');
  } catch (error) {
    console.error(error);
  }
}

// fetchWeatherData();



const stationOptions = {
  method: 'GET',
  url: 'https://meteostat.p.rapidapi.com/stations/nearby',
  params: {
    lat: 52.372458,
    lon: -1.991634,
    limit: 5,
  },
  headers: {
    'X-RapidAPI-Key': '94a0d87e62msh61db71d4613564bp184cdfjsnbd9f1c3f54ec',
    'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'
  }
};

async function fetchStationData() {
  try {
    const response = await axios.request(stationOptions);
    // console.log(response.data);
    console.log("here's the data", response.data.data);
  } catch (error) {
    console.error(error);
  }
}


fetchStationData();
