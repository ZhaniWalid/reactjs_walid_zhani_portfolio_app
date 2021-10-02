/* eslint-disable prettier/prettier */
import { render } from 'react-dom';
import App from './App';
import { ThemeProvider } from './contexts/theme';
import './index.css';

// Disable all types of log(s) on 'production' Mode
if (process.env.NODE_ENV === 'production') {
  console.log = () => ({})
  console.error = () => ({})
  console.debug = () => ({})
  console.info = () => ({})
  console.warn = () => ({})
}

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);