import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/layouts/navbar';
import Banner from './components/layouts/banner';

ReactDOM.render(
  <React.StrictMode>
      <Navbar />
      {/* <Banner /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
