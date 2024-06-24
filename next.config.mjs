// next.config.mjs

import dotenv from 'dotenv';
dotenv.config();

export default {
  env: {
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
};
