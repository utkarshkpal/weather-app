//it is container as it will initiate an call to action
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'

 class SearchBar extends Component{

constructor(props){

  super(props);

  this.state = {searchterm:''};

  this.onInputChange=this.onInputChange.bind(this);   //in callback 'this' would be undifined
                                                      //so we bind this with the function.here 'this' refers to Searchbar
  this.onSubmitEvent=this.onSubmitEvent.bind(this);

}

onInputChange(event){                     //vanilla js event
this.setState({searchterm:event.target.value });

}

onSubmitEvent(event){
  event.preventDefault();
  this.props.fetchWeather(this.state.searchterm)
  this.setState({searchterm:''});
}


 render(){
   return(
     <form onSubmit={this.onSubmitEvent} className="input-group">
       <input
         placeholder="Type to get the forecast of your favourite cities"
         className="form-control"
          value={this.state.searchterm}
          onChange={this.onInputChange}
       />
         <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Search</button>
       </span>
     </form>
   );
 }

}

function mapDispatchToProps(dispatch){                 //now we can use fetchWeather inside SearchBar
  return bindActionCreators({fetchWeather},dispatch);
  }

  export default connect(null,mapDispatchToProps)(SearchBar);//null as we need no state
