import React from 'react';
const axios = require('axios').default;

export const app_name = 'CoviDoc';
export const default_theme = 'light';

 export const API_URL = 'http://05ee-35-245-137-252.ngrok.io';

export const API = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {'x-application': 'crx'},
});
export const API_URL1 = 'https://cxray.herokuapp.com/';

export const API1 = axios.create({
  baseURL: API_URL1,
  timeout: 10000,
  headers: {'x-application': 'crx'},
});
export const API_URL2 = 'https://www.hpb.health.gov.lk/';

export const API2 = axios.create({
  baseURL: API_URL2,
  timeout: 10000,
  headers: {'x-application': 'crx'},
});
export const API_VERSION = 'v3';

export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});
