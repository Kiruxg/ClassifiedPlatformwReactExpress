import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,
       Route,
       Link} from 'react-router-dom'

export default class Newpost3 extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render () {
    return (<div className='newpost'>
            <section className='newpost3'>
            <h3>New Post</h3>
                {console.log(33)}
           <div className='blackbox'><div>Upload Images</div></div>
            
            <Link to={'/'}>
            <div className='continue'>
                <p>Post this Ad</p>
                </div>
                </Link>
            </section>
            
            </div>)
  }
}

