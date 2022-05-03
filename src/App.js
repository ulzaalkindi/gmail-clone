import React from 'react';
import Sidebar from './Sidebar';
import './App.css';
import Header from './Header';
import EmailList from './EmailList';
import SendMail from './SendMail';
// import Mail from './Mail';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app__body'>
        <Sidebar />

        {/* <Mail /> */}
        <EmailList />
      </div>

      <SendMail />
    </div>
  );
}

export default App;
