import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'
import qs from 'query-string'

export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      itemsData: '',
       view: 'box'
    }
  }
 loopItems = () => {
     const {match} = this.props
      if(this.state.itemsData != ''){
         return this.state.itemsData.map((item, i) => {
         return(
                <section className='listloop' key={i}>
                    <Link to={`/${match.params.uc}/${match.params.category}/${match.params.listings}/${match.params.item}`}>
                    <div className='item'>
                            <div className='image' style= 
                                {{backgroundImage: `url('${item.images[0]}')`}}>
                                <p className='price'>${item.price}</p>
                                <div className='item-desc'>
                                    <h4>{item.title}</h4>
                                    <h6>{item.date}</h6>
                                </div>
                            </div>
                        </div> 
                        </Link>
                </section>
         
         
            )
     })
      }
 }
 componentWillMount(){
     const {match, history, location} = this.props
    var self = this;
     
     console.log(qs.parse(location.search), 'QS')
     const queryParams =  qs.parse(this.props.location.search)
     if(queryParams.min_price != undefined){
    axios.get(`/api/${match.params.uc}/${match.params.category}/${match.params.listings}?min_price=${queryParams.min_price}&max_price=${queryParams.max_price}&sort=${queryParams.sort}`)
  .then(function (response) {
        //console.log('ItemsData1',self.state.itemsData)
        //console.log(response)
    self.setState({
        itemsData: response.data
    }, ()=> console.log('ItemsData2',self.state.itemsData))
  })
  .catch(function (error) {
    console.log(error);
  });
     } else {
    axios.get(`/api/${match.params.uc}/${match.params.category}/${match.params.listings}`)
  .then(function (response) {
        //console.log('ItemsData1',self.state.itemsData)
        //console.log(response)
    self.setState({
        itemsData: response.data
    }, ()=> console.log('ItemsData2',self.state.itemsData))
  })
  .catch(function (error) {
    console.log(error);
  });
     }
     
}


handleChange = (event) => {
    //event.target is a reference to object that dispatched the event
    const name = event.target.name
    const value = (event.target.type == 'checkbox') ? event.target.checked : event.target.value
    this.setState({
        [name]: value
    }, () => {
        console.log(this.state, 'handleChange')
    })
}
changeView = (viewName) =>{
     this.setState({
        view: viewName
    }, () => console.log(this.state.view))
}
handleView = () => {
   
    if(this.state.view == 'box'){
        return(
            <section className='all-items box'>
                    {this.loopItems()}
            </section>
        )
    } else if (this.state.view == 'list') {
        return(
            <section className='all-items list'>
                <div>
                    {this.loopItems()}
                </div>
            </section>
        )
    }
    
}
submitForm = () => {
    const self = this;
    const {match, history, location} = this.props
    const {min_price, max_price, sort} = this.state
    history.push(`/${match.params.uc}/${match.params.category}?min_price=${min_price}&max_price=${max_price}&sort=${sort}`)
    document.location.href = 
        `/${match.params.uc}/${match.params.category}?min_price=${min_price}&max_price=${max_price}&sort=${sort}`
    
    const queryParams =  qs.parse(this.props.location.search)
   
}

toggleFilter = () => {
   $('.filter').toggleClass('filter-active');
   $('.wrapper').toggleClass('wrapper-active');
}
  render () {
    return (<div className='listings-page'>
            <div className='container'>
                
                <section className='list-view'>
                    <section className='listing-setting'>
                        <section className='filter' >
                    <label className='filterlabel'>FILTER</label>
                    <div className='form-group price'>
                    <label>Price</label>
                            <div>
                            <input type='text' name='min_price' className='min_price' placeholder='0' onChange={this.handleChange}/>
                            <input type='text' name='max_price' className='max_price' placeholder='1000' onChange={this.handleChange}/>
                            </div>
                    </div>
                    {/*
                    <div className='form-group condition'>
                    <label>Condition</label>
                    <select name='condition' className='condition' onChange={this.handleChange}> 
                            <option value='new'>New</option>
                            <option value='verygood'>Very Good</option>
                            <option value='satisfactory'>Satisfactory</option>
                        </select>
                    </div>
                    <div className='form-group dateposted'>
                    <label>Date Posted</label>
                    <select name='dateposted' className='dateposted' onChange={this.handleChange}> 
                            <option value='today'>Today</option>
                            <option value='lastweek'>Last Week</option>
                            <option value='onemonthago'>1 Month ago</option>
                            <option value='threemonthsago'>3 Months ago</option>
                        </select>
                    </div>
*/}
                    <div className='form-group sort'>
                    <label>Sort By</label>
                        <select name='sort' className='sortBy' onChange={this.handleChange}>
                        <option value='Highest'>Price (Highest)</option>    
                        <option value='Lowest'>Price (Lowest)</option>    
                        <option value='Newest'>Date (Newest)</option>    
                        <option value='Oldest'>Date (Oldest)</option>    
                        </select>
                        </div>
                    <div className='button'>
                        <div className='primary-btn' onClick={this.submitForm}>Update</div>
                        <div className='reset-btn'>Reset</div>
                    </div>
                </section>
                        <div className='wrapper'>
                        <div className='view' onClick={this.toggleFilter}><i className="fas fa-filter"></i></div>
                        <input className='search' type='text' placeholder='Search for Ads..'/>
                        <div className='view'>
                            <i className="fas fa-th" onClick={this.changeView.bind(null,'box')}></i>
                            <i className="fas fa-th-list" onClick={this.changeView.bind(null,'list')}></i>
                        </div>
                        </div>
                        
                    </section>
                    <section className='handleView'>
                           {this.handleView()}
                    </section>
                </section>
            </div>
            
            </div>)
  }
}

