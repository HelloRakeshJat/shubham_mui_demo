import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'; // Import the CSS variables here

const getCssVariableValue = (variableName) =>
  getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: getCssVariableValue('--blue-500'),
      light: getCssVariableValue('--blue-400'),
      dark: getCssVariableValue('--blue-600'),
    },
    secondary: {
      main: getCssVariableValue('--green-500'),
      light: getCssVariableValue('--green-400'),
      dark: getCssVariableValue('--green-600'),
    },
    background: {
      default: getCssVariableValue('--grey-50'),
      paper: getCssVariableValue('--grey-100'),
    },
    text: {
      primary: getCssVariableValue('--grey-900'),
      secondary: getCssVariableValue('--grey-600'),
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: getCssVariableValue('--blue-300'),
      light: getCssVariableValue('--blue-200'),
      dark: getCssVariableValue('--blue-400'),
    },
    secondary: {
      main: getCssVariableValue('--green-300'),
      light: getCssVariableValue('--green-200'),
      dark: getCssVariableValue('--green-400'),
    },
    background: {
      default: getCssVariableValue('--grey-950'),
      paper: getCssVariableValue('--grey-900'),
    },
    text: {
      primary: getCssVariableValue('--grey-50'),
      secondary: getCssVariableValue('--grey-300'),
    },
  },
});

function ThemedApp() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <App toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </ThemeProvider>
  );
}

ReactDOM.render(
  <ThemedApp />,
  document.getElementById('root')
);
