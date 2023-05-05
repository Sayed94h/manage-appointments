import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from "./components/Home"
import './custom.css';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>);
