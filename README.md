# Description

SkyPulse is a simple weather app built with React. It allows you to easily retrieve weather parameters such as temperature, feels-like temperature, pressure, etc., by providing the location name from anywhere in the world. All the data is sourced from the OpenWeather API, which is utilized under the hood.

![image](https://github.com/BartoszSzm/SkyPulse/assets/65613527/15a02a3f-2d60-4f8e-8ee6-c80a601aedcc)

![image](https://github.com/BartoszSzm/SkyPulse/assets/65613527/3d84f61f-7c78-4077-afd0-2f43ea04ac9d)

# Running 
As mentioned, the app uses the OpenWeather API, so you need to obtain your API key by creating an account on https://openweathermap.org. Also make sure that you have Node.js installed (tested on v18.18.0). With that, to quickly preview the app on your local machine, just run the Vite development server.

Instructions for linux:

1. Clone the repository and `cd` into it.
2. Run `npm install`.
3. Create a .env file with the following line:
   `VITE_OPENWEATHER_API_KEY=your_api_key`
4. Run `npm run dev` and open the provided URL in your browser.
