import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Characters from '../pages/characters'

const Routes = () => {
  return(
    <Switch>
       <Route exact path='/characters/:list'>
          <Characters />
      </Route>
      
      <Route path='/chart'>
        
      </Route>

      <Route  path='/'>
        
      </Route>
    </Switch>
  )
}

export default Routes