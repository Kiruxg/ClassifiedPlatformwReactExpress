import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

export default class Item extends Component {
  constructor () {
    super()
    this.state = {
       itemsData: '',
      allImgs: [
          'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=350',
          'https://www.cstatic-images.com/car-pictures/main/USC50FOC051B021001.png',
        'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=350',  
          'https://www.cstatic-images.com/car-pictures/main/USC50FOC051B021001.png',
          'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=350',
          'https://www.cstatic-images.com/car-pictures/main/USC50FOC051B021001.png'
      ],
    currentImg: '',
    currentIndex: 0
    }
  }
    componentWillMount(){
        const self = this;
        const {match} = this.props
        this.setState({
            currentImg: this.state.allImgs[this.state.currentIndex]
        })
        
        axios.get(`/api/${match.params.uc}/${match.params.category}/${match.params.listings}`)
  .then(function (response) {
    self.setState({
        itemsData: response.data
    }, ()=> console.log('Personalized listing',self.state.itemsData))
  })
  .catch(function (error) {
    console.log(error);
  });
        
    }
    allImgsLoop = () => {
        return this.state.allImgs.map((img,i) => {
            return(
            <div key={i} onClick={this.clickedThumb.bind(null, i)} className='thumb-img' style={{"background": `url('${img}')`}}></div>
            )
        })
    }
 prevBtn = () =>{
     if(this.state.currentIndex != 0){   
     this.setState({
                currentIndex: this.state.currentIndex - 1,
                })        
        } else{
            this.setState({
                currentIndex: this.state.allImgs.length-1,
                })   
        }
 }
 
nextBtn = () =>{
    if(this.state.currentIndex != (this.state.allImgs.length-1)){
        this.setState({
                currentIndex: this.state.currentIndex + 1,
                })
    } else {
        this.setState({
                currentIndex: 0,
                })
    }
                      
                }
clickedThumb = (index) => {
    this.setState({
                currentIndex: index,
                })   
}
toggleContact = () => {
    $('.contactdetails').toggleClass('contact-active')
}
  render () {
      const {match, location, history} = this.props
    return (<div className='itempage'>
            <div className='container'>
                <section className='submenu'>
                    <div className='direction'>
                        <a href='' className='prev'>Prev</a>
                        <a  href='' className='next'>Next</a>
                    </div>
                    <nav className='sub-link'>
                    <a href='#'>Share</a>
                    </nav>
                </section>
           <div className='wrapper'>
            <section className='details-column'>
                <div className='title'>
                    <p>Posted Feb 28th</p>
                    <h2>2014 BMW M6</h2>
                    <h3>$9000</h3>
                </div>    
                <div className='moredetails'>
                    <div className='contactbtn' onClick={this.toggleContact}>Contact Poster</div>
                    <section className='contactdetails' >
                        <div>
                            <label>Name</label>
                            <h6>Kirubel Girma</h6>
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <h6>000-000-0000</h6>
                        </div>
                        <div>
                            <label>Note</label>
                            <h6>Please text instead of call.</h6>
                        </div>
                    </section>
                </div>    
                
            </section>
            <section className='media-column'>
                
                <div className='gallery'>
                    <div className='slider'>
                        <div className='main-image' style={{
                                "backgroundImage": `url('${this.state.allImgs[this.state.currentIndex]}')`
                            }}>
                            <div className='left-arrow arrows' onClick={this.prevBtn}>
                                <i className="fas fa-chevron-left"></i>
                            </div>
                            <div className='right-arrow arrows' onClick={this.nextBtn}>
                                <i className="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className='thumbnails'>
                        {this.allImgsLoop()}
                    </div>
                </div>    
            </section>
            
                </div>
                <div className='description'>
                    <label>Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor magna. Duis quis velit sed mi sodales sodales. Fusce aliquam ipsum in eros aliquam convallis. Etiam maximus est a sodales pellentesque. Aliquam eleifend lacus ut dolor aliquam, non fermentum elit consequat. Vestibulum semper sapien vitae orci tristique condimentum. Maecenas vulputate nulla lorem, sit amet consequat risus sagittis non. Aliquam pretium tortor leo. Fusce dictum tortor et ex dignissim mattis. Cras vitae lectus augue. Quisque est ex, porta nec fermentum eget, euismod sed erat. Sed in nisi mauris. Ut non dui efficitur, auctor libero et, laoreet velit. Donec vel velit lacinia, vestibulum enim et, vulputate ex. Integer rhoncus purus vitae felis vestibulum, at sodales libero maximus. Curabitur at ullamcorper risus.</p>
                </div>    
            </div>
            
            </div>)
  }
}

