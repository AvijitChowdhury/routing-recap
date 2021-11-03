
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './NotFound/NotFound';
import FriendDetail from './components/FriendDetail/FriendDetail';


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          {/* for change in id dynamically we can use : */}
          <Route path="/friend/:friendId">
            <FriendDetail/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*"><NotFound/></Route>
        </Switch>

    </Router>
  );
}

export default App;
