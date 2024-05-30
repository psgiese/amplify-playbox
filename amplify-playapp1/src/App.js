import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';

// Custom imports
import i18n from './i18n';
import awsconfig from './aws-exports';
import App from './App';
import './App.css';
import logo from './logo.svg';
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";
import { ExampleComponent, LanguageSwitcher } from './ui-components';

// Configure Amplify
Amplify.configure(awsconfig);

function LangApp() {
  return (
    <div className="LangApp">
      <LanguageSwitcher />
      <ExampleComponent />
    </div>
  );
}

const Root = () => (
  <I18nextProvider i18n={i18n}>
    <ThemeProvider theme={studioTheme}>
      <App />
    </ThemeProvider>
  </I18nextProvider>
);

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
