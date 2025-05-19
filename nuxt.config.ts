// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'vercel',
  },
  compatibilityDate: '2024-11-01',
  runtimeConfig: {
    public: {
      weatherApi: process.env.WEATHER_API_URL,
    },
  },
  app: {
    head: {
      title: 'Weather App',
      titleTemplate: '%s - by Jerold',
      meta: [
        { name: 'description', content: 'A simple weather app using Nuxt 3' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
        },
      ],
    },
  },
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/content', '@nuxt/icon', '@nuxt/image'],
})
