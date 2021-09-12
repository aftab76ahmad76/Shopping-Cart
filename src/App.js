import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import BillingInformation from './components/BillingInformation'
import NoPageFound from './components/NoPageFound'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/billing-information' component={BillingInformation} />
        <Redirect from='/' to='/home' />
        <Route component={NoPageFound} />
      </Switch>
    </Router>
  );
}

export default App;
