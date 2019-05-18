import React, {Component} from 'react';
import './App.css';
import pic from './Capture.JPG';
import TestResume from './components/TestResume'



class App extends Component {
  constructor() {
    super();
    this.state = {
        data: [],
    };
}

componentDidMount() {

    fetch('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes')
        .then(results => {
            return results.json();
        }).then(data => {
            let carList = data.results.mgap((item) => {
                return (
                    <div key={item.results}>
                    </div>

                )
            })
            this.setState({ data: carList });
            console.log("state", this.state.data);
        })
}

  render(){
    return (
      <TestResume  pic={pic}/>
    )
  }
}

export default App;
