import React, { Component } from 'react';
import '../App.css';
import axios from 'axios'

class TestAPI extends Component {
  state = {
    data: ''
  }

  componentDidMount() {
    this.fetchData()
  }
  fetchData = async () => {
    var config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    };
    const res = await axios.get('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes', config)
    let data = JSON.parse(res.data.slice(2, -2))
    this.setState({ data: data })
  }

  getCarList = (allData) => {
    let carList = {}
    allData.forEach(function (e) {
      if (!carList[e.make_country]) {
        carList[e.make_country] = []
        carList[e.make_country].push(e.make_display)
      } else {
        carList[e.make_country].push(e.make_display)
      }
    });
    let expectedData = Object.keys(carList).map(function (key, index) {
      return <li key={index}>{key} : {carList[key].map(key => key + " : ")}</li>
    });
    return expectedData;
  }

  getNumberofCar = (allData) => {
    let carList = {}
    allData.forEach(function (e) {
      carList[e.make_country] = (carList[e.make_country] || 0) + 1
    })
    let expectedData = Object.keys(carList).map(function (key, index) {
      return <li key={index}>{key} : {carList[key]}</li>
    });
    return expectedData;
  }

  render() {
    let usaId = 0
    let usaLength = 0
    let carList = []
    let numberCarOfEachCountry = []
    if (this.state.data.Makes) {
      let allData = this.state.data.Makes
      carList = this.getCarList(allData)
      numberCarOfEachCountry = this.getNumberofCar(allData)
      const getUSAData = allData.filter((item) => {
        return item.make_country === 'USA'
      })
      usaId = getUSAData.map((item) => <li>{item.make_display}</li>)
      usaLength = getUSAData.length
    }
    return (
      <div>
        <div >
          <h2>a. แต่ละประเทศผลิตรถกี่ยี่ห้อ</h2>
        </div>
        <div>{numberCarOfEachCountry} </div>
        <div>
          <h2> b. แต่ละประเทศมีรถยี่ห้ออะไรบ้าง </h2>
        </div>
        <div >{carList}</div>
        <div >
          <h2> c. USA ผลิตรถกี่ยี่ห้อ ยี่ห้ออะไรบ้าง</h2>
        </div>
        <div ><h2>มี {usaLength} ยี่ห้อ {usaId} </h2></div>


      </div>);
  }
}

export default TestAPI;