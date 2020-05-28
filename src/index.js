import React from 'react'
import loadable from '@loadable/component'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import {store, persistor} from './redux/store'
import GAListener from './_includes/templates/ga/index'
import ProtectedRoute from './pages/login/protected.route'

import './index.css'

const HomeIndex = loadable(() => import('./pages/home/index'))
const LoginIndex = loadable(() => import('./pages/login/index'))
const SearchIndex = loadable(() => import('./pages/search/index'))
const DetailIndex = loadable(() => import('./pages/detail/index'))
const HistoryIndex = loadable(() => import('./pages/history/index'))

const Root = props => {  
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/'} >
        <PersistGate persistor={persistor}>
          <GAListener>
            <Switch>
              <Route path={`${process.env.PUBLIC_URL}/login`} component={LoginIndex}/>
              <ProtectedRoute path={`${process.env.PUBLIC_URL}/search`} component={SearchIndex}/>
              <ProtectedRoute path={`${process.env.PUBLIC_URL}/detail`} component={DetailIndex}/>
              <ProtectedRoute path={`${process.env.PUBLIC_URL}/history`} component={HistoryIndex}/>
              <ProtectedRoute path={`${process.env.PUBLIC_URL}`} component={HomeIndex}/>
            </Switch>
          </GAListener>
        </PersistGate>
      </BrowserRouter>
    </Provider>
    
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
