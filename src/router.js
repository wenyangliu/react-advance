import React from 'react'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from './App'
import Admin from './Admin'
import Home from './pages/home'
import Clock from './pages/clock'
import {TabSelectorSample} from './pages/TabSelector'
import LocalSample from './pages/LocalSample'


export default class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path='/' render={() =>
              <Admin>
                <Switch>
                  <Route path='/home' component={Home}/>
                  <Route path='/clock' component={Clock}/>
                  <Route path='/tabSelector' component={TabSelectorSample}/>
                  <Route path='/localSample' component={LocalSample}/>
                  <Redirect to='/home'/>
                </Switch>
              </Admin>
            }/>
          </Switch>
        </App>
      </HashRouter>
    )
  }
}