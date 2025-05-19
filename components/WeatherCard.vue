<template>
  <div :class="['weather-container', theme]">
    <div class="weather-grid">
      <div class="weather-header">
        <h1>Weather</h1>
        <div class="search-bar">
          <input v-model="city" type="text" placeholder="Enter city..." />
          <button @click="fetchWeather">
            <Icon name="mdi-magnify" />
          </button>
        </div>
        <button class="theme-toggle" @click="toggleTheme">
          <Icon :name="theme === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night'" />
        </button>
      </div>
      <div class="separator"></div>
      <div v-if="weather" class="weather-content">
        <div class="weather-main">
          <img :src="iconUrl" :alt="weather.weather[0].description" />
          <div>
            <h2>{{ celsius(weather.main.temp) }}°C</h2>
            <p>{{ weather.weather[0].main }}</p>
          </div>
        </div>
        <div class="weather-details-card">
          <div class="detail-card">
            <Icon name="mdi-water-percent" />
            <div class="separator"></div>
            <label>Humidity: {{ weather.main.humidity }}%</label>
          </div>
          <div class="detail-card">
            <Icon name="mdi-weather-windy" />
            <div class="separator"></div>
            <label>Wind Speed: {{ weather.wind.speed }} m/s</label>
          </div>
          <div class="detail-card">
            <Icon name="mdi-cloud-outline" />
            <div class="separator"></div>
            <label>Cloudiness: {{ weather.clouds.all }}%</label>
          </div>
          <div class="detail-card">
            <Icon name="mdi-gauge" />
            <div class="separator"></div>
            <label>Pressure: {{ weather.main.pressure }} hPa</label>
          </div>
        </div>
      </div>
      <div v-else class="loading">
        <p>Loading weather...</p>
      </div>
    </div>
  </div>
</template>

<script setup>

const config = useRuntimeConfig()
const WEATHER_API = config.public.weatherApi

const weather = ref(null)
const city = ref('')
const theme = ref('light')

const fetchWeather = async () => {
  if (!city.value) return
  const res = await fetch(`${WEATHER_API}&q=${city.value}`)
  weather.value = await res.json()
}

const celsius = (k) => (k - 273.15).toFixed(1)
const iconUrl = computed(() =>
  weather.value
    ? `https://openweathermap.org/img/wn/${weather.value.weather[0].icon}@2x.png`
    : '',
)

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
</script>