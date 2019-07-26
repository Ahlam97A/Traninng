import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Topic from './topic'
import './App.css'
import App2 from './App2.js'
import Admin from './component/Admin/Admin'
import TabContainer from './component/Admin/adminPage'
import Address from './address'
import Login from './component/Admin/login'
import Meat from './component/Gridlist/Meat'
import SearchAppBar from './static/navBar/navbar'
import SimpleBottomNavigation from './static/navButton'
import Massege from './component/tabs/sendMassage'
import Feedback from './component/tabs/massage'
import SearchExample from './static/navBar/searchexample'
window.Token=localStorage.getItem('Token')
class App extends React.Component {

  componentDidMount() {
    window.$ = this.props.history;
    console.log(this.props);
  }
  render() {
    return (
      <Router>
        <SearchAppBar />
        {/* <Route exact path="/" component={NavBar} /> */}
        <Route exact path="/" component={App2} />
        <Route excat path="/address" component={Address} />
        <Route path="/meat" component={Meat} />
        <Route  excat path="/admin" component={Login} />
        <Route excat path="/tab" component={TabContainer} />
        <Route excat path="/search" component={SearchExample}  />

        <Route  excat path="/Home" component={Login} />

        <Route excat path="/Massege" component={Massege} />
        <Route excat path="/Feedback" component={Feedback}  />
        <Route  path="/item/:id" component={Topic} />
        <SimpleBottomNavigation />
      </Router>
    );
  }
}
export default App;
