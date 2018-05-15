import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,
       Route,
       Link} from 'react-router-dom'

export default class Newpost2 extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render () {
    return (<div className='newpost'>
            <section className='newpost2'>
            <h3>New Post</h3>
            <div>
            <div className='formbox'>
                <label className='bold'>Post Info</label>
            <section>
                <label>Title:</label>
                <input type='text' name='title'></input>
            </section>    
            <section>
                <label>Description:</label>
            <textarea id='desc' rows="6" cols="36">
                </textarea>    
            </section>    
            </div>
            <div className='formbox'>
            <label className='bold'>Contact Info</label>
            <section className='contactbox'>
                <label>Name:</label> 
                <input></input> <br />
                <label>Phone Number:</label> 
                <input></input>  <br />
                <label>Note (optional)</label>
                <input></input>    <br />
            </section>
            </div>
                </div>
                <Link to={'/Newpost3'}>
                 <div className='continue'>
                <p>Continue</p>
                </div>
                </Link>
            </section>
            
            </div>)
  }
}

