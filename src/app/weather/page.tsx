'use client'
import { useEffect, useState } from 'react'

type Weather = {
  temp: string
  desc: string
  icon: string
}

export default function WeatherPage() {
  const [weather, setWeather] = useState<Weather>({
    temp: '',
    desc: '',
    icon: '',
  })

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Almaty&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`,
    )
      .then((res) => res.json())
      .then((data) =>
        setWeather({
          temp: data.main.temp,
          desc: data.weather[0].description,
          icon: data.weather[0].icon,
        }),
      )
      .catch((e) => console.error(e))
  }, [])

  if (!weather.icon) return <p>Loading...</p>

  return (
    <main className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Weather in Almaty</h1>
      <p>Temperature: {weather.temp} °C</p>
      <p>Description: {weather.desc}</p>

      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt="Weather icon"
        className="mx-auto"
      />
    </main>
  )
}
