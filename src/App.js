import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import './App.css';
import Header from './Header';
import EmailList from './EmailList';
import SendMail from './SendMail';
import Mail from './Mail'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { selectSendMessageIsOpen } from './features/mailSlice'
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        }))
      }
    })
  }, [dispatch])
  return (
    <Router>
      {!user ?
        (<Login />) :
        (
          <div className="App">
            <Header />
            <div className='app__body'>
              <Sidebar />
              <Routes>
                <Route path='/mail' element={<Mail />} />
                <Route path='/' element={<EmailList />} />
              </Routes>
            </div>

            {sendMessageIsOpen && <SendMail />}
          </div>
        )
      }

    </Router>
  );
}

export default App;
