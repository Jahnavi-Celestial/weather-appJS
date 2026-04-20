export default async function forecastData(req, res) {
  const { city } = req.query;
  const apiKey = process.env.WEATHER_API_KEY;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
  );

  const data = await response.json();

  // Forward real error status
  if (!response.ok) {
    return res.status(response.status).json(data);
  }

  res.status(200).json(data);
}

