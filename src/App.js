import React, {Component} from 'react';
import './App.css';
import pic from './Capture.JPG';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TestAPI from './components/TestAPI'
import TestResume from './components/TestResume'


class App extends Component {
   
    render() {
        return (
          <Router>
            <div>
              <Route path="/TestAPI" exact component={TestAPI} />
              <Route path='/' render={(props) => <TestResume pic={pic} isAuthed={true} />}/>

            </div>
          </Router>
        )
      }
    }



  

export default App;
