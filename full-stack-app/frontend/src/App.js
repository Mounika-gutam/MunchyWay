import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/contact" exact component={ContactPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;