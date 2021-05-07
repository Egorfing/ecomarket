import Nav from '../Nav/Nav';
import List from '../List/List'
import Login from '../Login/Login';
import Edit from '../Edit/Edit';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../redux/store'


function App() {


  return (
    <Provider store={store}>
      <Router>
        <Nav/>
        <Switch>
          <Route exact path='/'>
            <List />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/edit'>
            <Edit />
          </Route>
        </Switch>
      </Router>
      </Provider>
  );
}

export default App;
