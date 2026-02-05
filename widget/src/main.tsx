import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styles from './index.css?inline';

const WIDGET_ID = 'chatbot-widget';

function mountWidget() {
  if (document.getElementById(WIDGET_ID)) return;

  const host = document.createElement('div');
  host.id = WIDGET_ID;
  document.body.appendChild(host);

  const shadow = host.attachShadow({ mode: 'open' });

  const styleTag = document.createElement('style');
  styleTag.innerHTML = styles;
  shadow.appendChild(styleTag);

  const rootDiv = document.createElement('div');
  rootDiv.id = 'root';
  shadow.appendChild(rootDiv);

  ReactDOM.createRoot(rootDiv).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

mountWidget();