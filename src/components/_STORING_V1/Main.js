import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import BeerSelected from './BeerSelected'
import dashboard from '../containers/dashboard'
import page404 from './page404'



const MenuDriver = () => (

    <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/dashboard" component={dashboard}/>
          <Route path="/dashboard/search-beer" component={dashboard}/>
          <Route path="/dashboard/search-shop" component={dashboard}/>
          <Route path="/dashboard/mybeers" component={dashboard}/>
          <Route path="/:cat/:id"  component={dashboard}/>
          <Route path="/:cat/:id"  component={dashboard}/>
          <Route component={page404}/>
        </Switch>
    </Router>
    

)

export default MenuDriver
