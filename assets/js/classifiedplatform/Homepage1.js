import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Homepage1 extends Component {
  constructor () {
    super()
    this.state = {
      schoolData: ''
    }
  }
 componentWillMount(){
    var self = this;
	axios.get('/api/schools')
  .then(function (response) {
    self.setState({
        schoolData: response.data
    }, ()=> console.log(self.state.schoolData))
  })
  .catch(function (error) {
    console.log(error);
  });
}
 loopSchools = () => {
     if(this.state.schoolData != ''){
     return this.state.schoolData.map((school, index) => {
         return(
                <a href={`${school.name}`} key={index} className='button'>
                    <p>{school.name}</p>
                </a>
         
         
            )
     })
     } 
 }
  render () {
    return (<div className='home'>
            <section className='mainpage'> 
                 <h3>The Classified Ad Platform for University Students</h3>
                <section className='schoollist'>
                <h5>UC</h5>
                    {this.loopSchools()}
   
                </section>
            </section>
            
            </div>)
  }
}

