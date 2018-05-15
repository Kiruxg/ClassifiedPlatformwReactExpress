import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'


export default class My404Component extends Component {
  constructor () {
    super()
    this.state = {

    }
  }
 
  render () {
    return (
        <div className='errorpage'>
         <a href={'/'}>
        <section><h2>OOPS!</h2></section>
             <p>The page you were looking for was not found. <br></br>
                Click this white box to go back home.</p>
        </a>
        </div>
            )
  }
}