import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "@aws-amplify/ui-react/styles.css";
import reportWebVitals from './reportWebVitals';
//import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
//import { ThemeProvider } from "@aws-amplify/ui-react";
import { ThemeProvider, createTheme } from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
//import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";
//the following was a missing line...
import amplifyconfig from './amplifyconfiguration.json';
//import studioTheme from './ui-components/studioTheme';

Amplify.configure(awsconfig);

//Amplify.configure(amplifyconfig);

const updatedTheme = createTheme(
  {
    // Extend the theme to update the button color
    name: "my-theme-updates",
    tokens: {
      components: {
        button: {
          primary: {
            backgroundColor: {
              value: "#b71c1c",
            },
          },
        },
        formContainer: {
          backgroundColor: {
            value: "#f0f0f0", // Update this color as per your requirement
          },
        },
      },
    },
  },
  studioTheme
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={updatedTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
