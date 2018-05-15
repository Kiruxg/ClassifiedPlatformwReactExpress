import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,
       Route,
       Link} from 'react-router-dom'

export default class Newpost1 extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render () {
    return (<div className='newpost'>
            <section className='newpost1'>
            <h3>New Post</h3>
            <p>Choose the community that fits best for your post:</p>
            <div id='mainselection'>
            <select className='category1 custom-select'>
                <option>UCSD</option>
                
                </select>  
                <select className='category2 custom-select'>
                <option>Select a category</option>
                
                </select>   
                <select className='category3 custom-select'>
                <option>UCSD</option>
                
                </select>
                <Link to={'/Newpost2'}>
                <div className='continue'>
                <p>Continue</p>
                </div>
                </Link>
            </div>
            </section>
            
            </div>)
  }
}

