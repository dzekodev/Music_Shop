import '../styles/App.css';
import Nav from './Navbar'
import BuyCart from './BuyCart';
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom'
import Music from './Music';
import Home from './Home';
import Contact from './Contact';
import AddSongs from './AddSongs';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <BuyCart/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Music" component={Music}/>
          <Route path="/AddSongs" component={AddSongs}/>
          <Route path="/Contact" component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
