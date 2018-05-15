import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,
       Route,
       Link, Navlink, browserHistory, Switch, Redirect} from 'react-router-dom'
import Header from './Header.js'
import Homepage1 from './Homepage1.js'
import Homepage2 from './Homepage2.js'
import Listings from './Listings.js'
import Item from './Item.js'
import Newpost1 from './Newpost1.js'
import Newpost2 from './Newpost2.js'
import Newpost3 from './Newpost3.js'
import Errorpage from './My404Component.js'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return (
            <Router >
            <div>
            <Header />
            <Switch>
                <Route exact path='/Newpost1' component={Newpost1}></Route>
                <Route exact path='/Newpost2' component={Newpost2}></Route>
                <Route exact path='/Newpost3' component={Newpost3}></Route>
                <Route exact path='/:uc(Berkeley|Davis|Irvine|Los Angeles|Merced|Riverside|San Diego|Santa Barbara|Santa Cruz)/' component={Homepage2} />
                <Route exact path='/' component={Homepage1} />
                <Route exact path='/:uc/:category(Sale|Housing|Resources|Events)' component={Listings} />
                <Route exact path='/:uc/:category/:listings(General|Classroom-Items|Clothing|Electronics|Cars|Books|Household-Items|Bikes|Tickets|House-for-rent|Apt-for-rent|Room-for-rent|Roommates|Class-Notes|Internships|Scholarships|Tutoring|Lost&Found|General|Parties)' component={Listings} />
                <Route exact path='/:uc/:category/:listings/:item' component={Item} />
                <Route exact path='/err' component={Errorpage}/>
                <Redirect to={'/err'} />
            </Switch>
            </div>
            </Router>
            )
  }
}

