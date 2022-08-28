import React from 'react';
import ReactDOM from 'react-dom';

// Importing the cosutme made components
import App from './components/App';

// Capturing the root div, where the App component will be displayed
const root = ReactDOM.createRoot(
    document.getElementById('root')
)

// Rendering the App component into the root div
root.render(<App />);