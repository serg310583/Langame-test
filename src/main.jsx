import { ConfigProvider } from 'antd';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { customTheme } from './customTheme.js';

createRoot(document.getElementById('root')).render(
  <ConfigProvider theme={customTheme}>
    <App />
  </ConfigProvider>
);
