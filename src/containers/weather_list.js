import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_maps';

class WeatherList extends Component {


renderWeather(cityData){                    //renders a single row of city data

const name = cityData.city.name;

const temp=_.map(cityData.list.map(listData => listData.main.temp),(temp)=>temp-273.15);
const humidity=cityData.list.map(listData => listData.main.humidity);
const pressure=cityData.list.map(listData => listData.main.pressure);

const lat=cityData.city.coord.lat;
const lon=cityData.city.coord.lon;


return(

 <tr key ={name}>
   <td ><GoogleMap lat={lat} lon={lon}/></td>
   <td ><Chart data={temp} units="C" color ="red"/>
   </td>
   <td ><Chart data={pressure} units="hPa" color ="blue"/>
   </td>
   <td ><Chart data={humidity} units="%" color ="green"/>
   </td>
 </tr>
);
}

  render (){
    return(
      <table className="table table-hover">
        <thead>
           <tr>
              <td>City </td>
              <td>Temperature(C)</td>
              <td>Pressure(hPa)</td>
              <td>Humidity(%)</td>
           </tr>
        </thead>
        <tbody>


        {this.props.weather.map(this.renderWeather)}


        </tbody>
      </table>

    );
  }
}
// function mapStateToProps(state){
//   return { weather: state.weather };
// }
function mapStateToProps({weather}){
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
