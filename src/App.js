import './App.css';

import NavBar from './components/navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import TestPage from './pages/TestPage/TestPage';
import TeachingPage from './pages/TeachingPage/TeachingPage';
import ReadingsPage from './pages/ReadingsPage/ReadingsPage';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/readings">
          <ReadingsPage />
        </Route>
        <Route exact path="/teaching">
          <TeachingPage />
        </Route>
        <Route exact path="/contact">
          <TestPage />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
