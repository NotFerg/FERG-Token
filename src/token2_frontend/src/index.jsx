import ReactDOM from 'react-dom'
import React from 'react'
import App from "./components/App";

const init = async () => { 
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

init();


