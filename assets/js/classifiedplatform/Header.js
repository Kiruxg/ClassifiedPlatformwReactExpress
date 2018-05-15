import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,
       Route,
       Link} from 'react-router-dom'
import Newpost1 from './Newpost1.js'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
    }
  }
     componentDidMount(){
$('.navicon').click(function(){
    $('#menu li').on('click', function(){
   $('body').removeClass('menu-active');
    $('.navicon i').removeClass('fa-times')
    $('.navicon i').addClass('fa-bars')
})
     if ($('.navicon i').hasClass('fa-bars')){
        $('.navicon i').removeClass('fa-bars')
        $('.navicon i').addClass('fa-times')
        }
    if($('body').hasClass('menu-active')){
          $('body').removeClass('menu-active');
        $('.navicon i').removeClass('fa-times')
        $('.navicon i').addClass('fa-bars')
    }
    else{
            $('body').addClass('menu-active');
    }
    
})
     }
  render () {
    return (<div className='mainheader'>
        <header>
                <section className='leftmenu'>
                   <div>
                    <Link to={'/'}><div className='logo'><p>LOGO</p></div></Link>
                   <Link to={'/Newpost1'}><div className='post'><p>Post To Classifieds</p></div></Link>
                       </div>
                </section>
                <section className='rightmenu'>
                    <div className='userimg'>
                         OAUTH!
                        </div>
                    <section>
                        
                        <div className='navicon'>
                        <i className="fas fa-bars"></i>
                        </div>
                        
                    </section>
                </section>
             <section id='menu'>
                            <ul>
                                <li><a>Sign in</a></li>
                                <li><a>Post to Classifieds</a></li>
                                <li><a>About Us</a></li>
                                <li><a>Contact Us</a></li>
                            </ul>    
                            
                        </section>
            </header>
           
            </div>
            )
  }
}

