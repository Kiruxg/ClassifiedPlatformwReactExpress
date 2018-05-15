import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class  Homepage2 extends Component {
  constructor () {
    super()
    this.state = {
      categoriesData: ''
    }
  }
 loopCategories = () => {
      console.log(this.props.match.params)
     const {match, history} = this.props;
     //if promise gave back our data...
     console.log(this.state.categoriesData)
     if(this.state.categoriesData != ''){
         
    //index every category title 
    return this.state.categoriesData.map((category, i) => 
        { console.log(category)
        //method to index every category listing
         const loopListings = () => {
                return category.listings.map((listing, index) => {
                    return(
                 //link to listings page on click
                    <a href={`/${this.props.match.params.uc}/${category.title}/${listing.slug}`} className="link" key={index}>{listing.name} </a>
                 )
                    
                })
         }
         return(
                <div className="categories" key={i}>
                    <a href={`/${match.params.uc}/${category.title}`} className='title'>{category.title}</a>
                    <div className={`group-links 
                    ${(category.title == 'Sale') ? 'dbl-column' : ''}`}>
                    {loopListings()}
                    </div>
                </div>
            )
     })
     } 
 }
 componentWillMount(){
    var self = this;
	axios.get('/api/categories')
  .then(function (response) {
    self.setState({
        categoriesData: response.data
    }, ()=> console.log(' '))
  })
  .catch(function (error) {
    console.log(error);
  });
}
  render () {
    return (<div className='home'>
            <section className='category'> 
                 <div>{this.loopCategories()}</div>
            </section>
            
            <section className='searchsection'> 
                <div className='search'>
                    <input type='text' placeholder='What are you looking for?' />
                </div>
                <div className='searchbtn'><p>Search</p></div>
            </section>
            
            </div>)
  }
}

