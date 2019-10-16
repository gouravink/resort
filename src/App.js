import React, { Fragment, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/authentication/login';
import Signup from './pages/authentication/signup';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/navbar';
import ToastContext from './Context/toastContext'
import Toast from './components/Toast/toast'

function App() {
  const [message, showMessage] = useState(false)
  return (
    <Router>
      <ToastContext.Provider value={{ message, setMessage: showMessage }}>
        <Fragment>
          <Navbar />
          {message && <Toast />}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/rooms" component={Rooms} />
            <Route path="/single-room" component={SingleRoom} />
            <Route component={PageNotFound} />
          </Switch>
        </Fragment>
      </ToastContext.Provider>
    </Router>

  );
}

export default App;
