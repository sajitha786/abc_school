import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import '../App.css';
// import {BrowserRouter as Router,Link} from 'react-router-dom';


class Home extends Component{

  render(){
    return(

      <div>
      <div className="container">
      <h1>Home Page</h1>
        <div className="home_tabs">
              <label> Students Details  </label>
              <Button variant="contained" color="primary" type="button" onClick={(e) => {
              e.preventDefault();
              window.location.href='http://localhost:3000/Student';
              }}> Go to Students Register</Button>
        </div>
        <div className="home_tabs">
            <label> Teachers Details  </label>
            <Button variant="contained" color="primary" type="button" onClick={(e) => {
            e.preventDefault();
            window.location.href='http://localhost:3000/Teacher';
            }}> Go to Teachers Register</Button>
        </div>
      </div>
      </div>
    )
  }
}
  
  
  export default Home;
