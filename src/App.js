import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
          <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
