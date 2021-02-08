import './App.css';

import NavBar from './components/navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import TestPage from './pages/TestPage/TestPage';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/blog">
          <TestPage />
        </Route>
        <Route exact path="/teaching">
          <TestPage />
        </Route>
        <Route exact path="/contact">
          <TestPage />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
