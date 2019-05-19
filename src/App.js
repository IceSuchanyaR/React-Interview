import React, {Component} from 'react';
import './App.css';
import pic from './Capture.JPG';
import TestResume from './components/TestResume'
import axios from 'axios';
import _ from 'lodash';

var request = axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    baseURL: 'https://www.carqueryapi.com/api/0.3' 
});
  


class App extends Component {
    state = {
        data: [],
        xhr: null,
      } 
      
      componentDidMount() {
        this.fetchData()
        this.groupby(this.data,'make_country')
      }
      
      fetchData = async () => {
        
          const res = await request.get('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes')
          const data = res.data
          console.log(data)
          const scanner = data.split(/[()]+/).filter(e=>e);
          console.log(scanner)
          const dataList = JSON.parse(scanner[1]).Makes
          console.log('objlst')
          console.log(dataList)
          this.setState({data: dataList})
    
    
          // แต่ละประเทศ 
          const countryGroup = this.groupby(dataList,'make_country')
          console.log(countryGroup)
    
          
          const numOfCountry = _.mapValues(countryGroup,(arr)=>{
            return _.map(arr,(object)=>{return object.make_id}).length
          })
          console.log(numOfCountry)  // จำนวนยี่ห้อรถแต่ละประเทศ
          const makeIdEachCountry = _.mapValues(countryGroup,(arr)=>{
            return _.map(arr,(ob)=>{return ob.make_id})
          })
          console.log(makeIdEachCountry)  // แต่ละยี่ห้อที่แต่ละประเทศผลิค
    
    
          var usa = countryGroup.USA
          var usaId = _.map(usa, (value)=>{return value.make_id}) // ยี่ห้อรถแต่ละยี่ห้อที่ผลิตใน USA
          console.log(usaId.length)  // จำนวนยี่ห้อที่ USA ผลิต
          console.log(usaId)         // แต่ละยี่ห้อที่ USA ผลิต
          
          var europe = ["Italy","Germany","France","Romania","Netherlands","Sweden","Switzerland","Spain","Czech Republic","Austria","Serbia","Ukraine","Denmark"]
          var filter = dataList.filter((item)=>{return europe.includes(item.make_country) })
          // console.log(filter)
          var europeId = _.map(filter, (value)=>{return value.make_id}) //d. ยี่ห้อรถแต่ละยี่ห้อที่ผลิตใน Europe
          console.log(europeId.length)  //d. จำนวนยี่ห้อที่ Europe ผลิต
          console.log(europeId)         //d. แต่ละยี่ห้อที่ Europe ผลิต
      }
      
      groupby = (data,id) => {
          const list = data
          return _.groupBy(list,id)
      }
      
    
     
      
  render(){
    return (
      <TestResume  pic={pic}/>
    )
  }
}

export default App;
