import React from 'react';
/* import './App.css'; */
//import ReactDOM from'react-dom';

import  { DenseAppBar,FullWidthGrid } from  './Components/DenseAppBar'

import Home from './Components/Home';
import Student from './Components/Student';
import Teacher from './Components/Teacher';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


class App extends React.Component{

  // constructor(){
  //   super();
  // }

 
render() {
  return(
    <Router>
      <div className="com">
      <DenseAppBar />
      <FullWidthGrid />
        
      </div>

      <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/Student"><Student /></Route>
          <Route path="/Teacher"><Teacher /></Route>
      </Switch>

    </Router>
  )
}
}


export default App;