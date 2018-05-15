webpackJsonp([0],{

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(19);

var _Header = __webpack_require__(145);

var _Header2 = _interopRequireDefault(_Header);

var _Homepage = __webpack_require__(146);

var _Homepage2 = _interopRequireDefault(_Homepage);

var _Homepage3 = __webpack_require__(147);

var _Homepage4 = _interopRequireDefault(_Homepage3);

var _Listings = __webpack_require__(149);

var _Listings2 = _interopRequireDefault(_Listings);

var _Item = __webpack_require__(148);

var _Item2 = _interopRequireDefault(_Item);

var _Newpost = __webpack_require__(76);

var _Newpost2 = _interopRequireDefault(_Newpost);

var _Newpost3 = __webpack_require__(151);

var _Newpost4 = _interopRequireDefault(_Newpost3);

var _Newpost5 = __webpack_require__(152);

var _Newpost6 = _interopRequireDefault(_Newpost5);

var _My404Component = __webpack_require__(150);

var _My404Component2 = _interopRequireDefault(_My404Component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/Newpost1', component: _Newpost2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/Newpost2', component: _Newpost4.default }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/Newpost3', component: _Newpost6.default }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:uc(Berkeley|Davis|Irvine|Los Angeles|Merced|Riverside|San Diego|Santa Barbara|Santa Cruz)/', component: _Homepage4.default }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Homepage2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:uc/:category(Sale|Housing|Resources|Events)', component: _Listings2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:uc/:category/:listings(General|Classroom-Items|Clothing|Electronics|Cars|Books|Household-Items|Bikes|Tickets|House-for-rent|Apt-for-rent|Room-for-rent|Roommates|Class-Notes|Internships|Scholarships|Tutoring|Lost&Found|General|Parties)', component: _Listings2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:uc/:category/:listings/:item', component: _Item2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/err', component: _My404Component2.default }),
            _react2.default.createElement(_reactRouterDom.Redirect, { to: '/err' })
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(19);

var _Newpost = __webpack_require__(76);

var _Newpost2 = _interopRequireDefault(_Newpost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

        _this.state = {};
        return _this;
    }

    _createClass(Header, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            $('.navicon').click(function () {
                $('#menu li').on('click', function () {
                    $('body').removeClass('menu-active');
                    $('.navicon i').removeClass('fa-times');
                    $('.navicon i').addClass('fa-bars');
                });
                if ($('.navicon i').hasClass('fa-bars')) {
                    $('.navicon i').removeClass('fa-bars');
                    $('.navicon i').addClass('fa-times');
                }
                if ($('body').hasClass('menu-active')) {
                    $('body').removeClass('menu-active');
                    $('.navicon i').removeClass('fa-times');
                    $('.navicon i').addClass('fa-bars');
                } else {
                    $('body').addClass('menu-active');
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'mainheader' },
                _react2.default.createElement(
                    'header',
                    null,
                    _react2.default.createElement(
                        'section',
                        { className: 'leftmenu' },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'logo' },
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'LOGO'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/Newpost1' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'post' },
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Post To Classifieds'
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'section',
                        { className: 'rightmenu' },
                        _react2.default.createElement(
                            'div',
                            { className: 'userimg' },
                            'OAUTH!'
                        ),
                        _react2.default.createElement(
                            'section',
                            null,
                            _react2.default.createElement(
                                'div',
                                { className: 'navicon' },
                                _react2.default.createElement('i', { className: 'fas fa-bars' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'section',
                        { id: 'menu' },
                        _react2.default.createElement(
                            'ul',
                            null,
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    null,
                                    'Sign in'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    null,
                                    'Post to Classifieds'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    null,
                                    'About Us'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    null,
                                    'Contact Us'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(19);

var _axios = __webpack_require__(33);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Homepage1 = function (_Component) {
  _inherits(Homepage1, _Component);

  function Homepage1() {
    _classCallCheck(this, Homepage1);

    var _this = _possibleConstructorReturn(this, (Homepage1.__proto__ || Object.getPrototypeOf(Homepage1)).call(this));

    _this.loopSchools = function () {
      if (_this.state.schoolData != '') {
        return _this.state.schoolData.map(function (school, index) {
          return _react2.default.createElement(
            'a',
            { href: '' + school.name, key: index, className: 'button' },
            _react2.default.createElement(
              'p',
              null,
              school.name
            )
          );
        });
      }
    };

    _this.state = {
      schoolData: ''
    };
    return _this;
  }

  _createClass(Homepage1, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var self = this;
      _axios2.default.get('/api/schools').then(function (response) {
        self.setState({
          schoolData: response.data
        }, function () {
          return console.log(self.state.schoolData);
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'home' },
        _react2.default.createElement(
          'section',
          { className: 'mainpage' },
          _react2.default.createElement(
            'h3',
            null,
            'The Classified Ad Platform for University Students'
          ),
          _react2.default.createElement(
            'section',
            { className: 'schoollist' },
            _react2.default.createElement(
              'h5',
              null,
              'UC'
            ),
            this.loopSchools()
          )
        )
      );
    }
  }]);

  return Homepage1;
}(_react.Component);

exports.default = Homepage1;

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(19);

var _axios = __webpack_require__(33);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Homepage2 = function (_Component) {
    _inherits(Homepage2, _Component);

    function Homepage2() {
        _classCallCheck(this, Homepage2);

        var _this = _possibleConstructorReturn(this, (Homepage2.__proto__ || Object.getPrototypeOf(Homepage2)).call(this));

        _this.loopCategories = function () {
            console.log(_this.props.match.params);
            var _this$props = _this.props,
                match = _this$props.match,
                history = _this$props.history;
            //if promise gave back our data...

            console.log(_this.state.categoriesData);
            if (_this.state.categoriesData != '') {

                //index every category title 
                return _this.state.categoriesData.map(function (category, i) {
                    console.log(category);
                    //method to index every category listing
                    var loopListings = function loopListings() {
                        return category.listings.map(function (listing, index) {
                            return (
                                //link to listings page on click
                                _react2.default.createElement(
                                    'a',
                                    { href: '/' + _this.props.match.params.uc + '/' + category.title + '/' + listing.slug, className: 'link', key: index },
                                    listing.name,
                                    ' '
                                )
                            );
                        });
                    };
                    return _react2.default.createElement(
                        'div',
                        { className: 'categories', key: i },
                        _react2.default.createElement(
                            'a',
                            { href: '/' + match.params.uc + '/' + category.title, className: 'title' },
                            category.title
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'group-links \n                    ' + (category.title == 'Sale' ? 'dbl-column' : '') },
                            loopListings()
                        )
                    );
                });
            }
        };

        _this.state = {
            categoriesData: ''
        };
        return _this;
    }

    _createClass(Homepage2, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var self = this;
            _axios2.default.get('/api/categories').then(function (response) {
                self.setState({
                    categoriesData: response.data
                }, function () {
                    return console.log(' ');
                });
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'home' },
                _react2.default.createElement(
                    'section',
                    { className: 'category' },
                    _react2.default.createElement(
                        'div',
                        null,
                        this.loopCategories()
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'searchsection' },
                    _react2.default.createElement(
                        'div',
                        { className: 'search' },
                        _react2.default.createElement('input', { type: 'text', placeholder: 'What are you looking for?' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'searchbtn' },
                        _react2.default.createElement(
                            'p',
                            null,
                            'Search'
                        )
                    )
                )
            );
        }
    }]);

    return Homepage2;
}(_react.Component);

exports.default = Homepage2;

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(33);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_Component) {
    _inherits(Item, _Component);

    function Item() {
        _classCallCheck(this, Item);

        var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this));

        _this.allImgsLoop = function () {
            return _this.state.allImgs.map(function (img, i) {
                return _react2.default.createElement('div', { key: i, onClick: _this.clickedThumb.bind(null, i), className: 'thumb-img', style: { "background": 'url(\'' + img + '\')' } });
            });
        };

        _this.prevBtn = function () {
            if (_this.state.currentIndex != 0) {
                _this.setState({
                    currentIndex: _this.state.currentIndex - 1
                });
            } else {
                _this.setState({
                    currentIndex: _this.state.allImgs.length - 1
                });
            }
        };

        _this.nextBtn = function () {
            if (_this.state.currentIndex != _this.state.allImgs.length - 1) {
                _this.setState({
                    currentIndex: _this.state.currentIndex + 1
                });
            } else {
                _this.setState({
                    currentIndex: 0
                });
            }
        };

        _this.clickedThumb = function (index) {
            _this.setState({
                currentIndex: index
            });
        };

        _this.toggleContact = function () {
            $('.contactdetails').toggleClass('contact-active');
        };

        _this.state = {
            itemsData: '',
            allImgs: ['https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://www.cstatic-images.com/car-pictures/main/USC50FOC051B021001.png', 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://www.cstatic-images.com/car-pictures/main/USC50FOC051B021001.png', 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://www.cstatic-images.com/car-pictures/main/USC50FOC051B021001.png'],
            currentImg: '',
            currentIndex: 0
        };
        return _this;
    }

    _createClass(Item, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var self = this;
            var match = this.props.match;

            this.setState({
                currentImg: this.state.allImgs[this.state.currentIndex]
            });

            _axios2.default.get('/api/' + match.params.uc + '/' + match.params.category + '/' + match.params.listings).then(function (response) {
                self.setState({
                    itemsData: response.data
                }, function () {
                    return console.log('Personalized listing', self.state.itemsData);
                });
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                match = _props.match,
                location = _props.location,
                history = _props.history;

            return _react2.default.createElement(
                'div',
                { className: 'itempage' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'section',
                        { className: 'submenu' },
                        _react2.default.createElement(
                            'div',
                            { className: 'direction' },
                            _react2.default.createElement(
                                'a',
                                { href: '', className: 'prev' },
                                'Prev'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '', className: 'next' },
                                'Next'
                            )
                        ),
                        _react2.default.createElement(
                            'nav',
                            { className: 'sub-link' },
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                'Share'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'wrapper' },
                        _react2.default.createElement(
                            'section',
                            { className: 'details-column' },
                            _react2.default.createElement(
                                'div',
                                { className: 'title' },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Posted Feb 28th'
                                ),
                                _react2.default.createElement(
                                    'h2',
                                    null,
                                    '2014 BMW M6'
                                ),
                                _react2.default.createElement(
                                    'h3',
                                    null,
                                    '$9000'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'moredetails' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'contactbtn', onClick: this.toggleContact },
                                    'Contact Poster'
                                ),
                                _react2.default.createElement(
                                    'section',
                                    { className: 'contactdetails' },
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'label',
                                            null,
                                            'Name'
                                        ),
                                        _react2.default.createElement(
                                            'h6',
                                            null,
                                            'Kirubel Girma'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'label',
                                            null,
                                            'Phone Number'
                                        ),
                                        _react2.default.createElement(
                                            'h6',
                                            null,
                                            '000-000-0000'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'label',
                                            null,
                                            'Note'
                                        ),
                                        _react2.default.createElement(
                                            'h6',
                                            null,
                                            'Please text instead of call.'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'section',
                            { className: 'media-column' },
                            _react2.default.createElement(
                                'div',
                                { className: 'gallery' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'slider' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'main-image', style: {
                                                "backgroundImage": 'url(\'' + this.state.allImgs[this.state.currentIndex] + '\')'
                                            } },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'left-arrow arrows', onClick: this.prevBtn },
                                            _react2.default.createElement('i', { className: 'fas fa-chevron-left' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'right-arrow arrows', onClick: this.nextBtn },
                                            _react2.default.createElement('i', { className: 'fas fa-chevron-right' })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'thumbnails' },
                                    this.allImgsLoop()
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'description' },
                        _react2.default.createElement(
                            'label',
                            null,
                            'Description'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor magna. Duis quis velit sed mi sodales sodales. Fusce aliquam ipsum in eros aliquam convallis. Etiam maximus est a sodales pellentesque. Aliquam eleifend lacus ut dolor aliquam, non fermentum elit consequat. Vestibulum semper sapien vitae orci tristique condimentum. Maecenas vulputate nulla lorem, sit amet consequat risus sagittis non. Aliquam pretium tortor leo. Fusce dictum tortor et ex dignissim mattis. Cras vitae lectus augue. Quisque est ex, porta nec fermentum eget, euismod sed erat. Sed in nisi mauris. Ut non dui efficitur, auctor libero et, laoreet velit. Donec vel velit lacinia, vestibulum enim et, vulputate ex. Integer rhoncus purus vitae felis vestibulum, at sodales libero maximus. Curabitur at ullamcorper risus.'
                        )
                    )
                )
            );
        }
    }]);

    return Item;
}(_react.Component);

exports.default = Item;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(19);

var _axios = __webpack_require__(33);

var _axios2 = _interopRequireDefault(_axios);

var _queryString = __webpack_require__(190);

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
    _inherits(Listings, _Component);

    function Listings() {
        _classCallCheck(this, Listings);

        var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

        _this.loopItems = function () {
            var match = _this.props.match;

            if (_this.state.itemsData != '') {
                return _this.state.itemsData.map(function (item, i) {
                    return _react2.default.createElement(
                        'section',
                        { className: 'listloop', key: i },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/' + match.params.uc + '/' + match.params.category + '/' + match.params.listings + '/' + match.params.item },
                            _react2.default.createElement(
                                'div',
                                { className: 'item' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'image', style: { backgroundImage: 'url(\'' + item.images[0] + '\')' } },
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'price' },
                                        '$',
                                        item.price
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'item-desc' },
                                        _react2.default.createElement(
                                            'h4',
                                            null,
                                            item.title
                                        ),
                                        _react2.default.createElement(
                                            'h6',
                                            null,
                                            item.date
                                        )
                                    )
                                )
                            )
                        )
                    );
                });
            }
        };

        _this.handleChange = function (event) {
            //event.target is a reference to object that dispatched the event
            var name = event.target.name;
            var value = event.target.type == 'checkbox' ? event.target.checked : event.target.value;
            _this.setState(_defineProperty({}, name, value), function () {
                console.log(_this.state, 'handleChange');
            });
        };

        _this.changeView = function (viewName) {
            _this.setState({
                view: viewName
            }, function () {
                return console.log(_this.state.view);
            });
        };

        _this.handleView = function () {

            if (_this.state.view == 'box') {
                return _react2.default.createElement(
                    'section',
                    { className: 'all-items box' },
                    _this.loopItems()
                );
            } else if (_this.state.view == 'list') {
                return _react2.default.createElement(
                    'section',
                    { className: 'all-items list' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _this.loopItems()
                    )
                );
            }
        };

        _this.submitForm = function () {
            var self = _this;
            var _this$props = _this.props,
                match = _this$props.match,
                history = _this$props.history,
                location = _this$props.location;
            var _this$state = _this.state,
                min_price = _this$state.min_price,
                max_price = _this$state.max_price,
                sort = _this$state.sort;

            history.push('/' + match.params.uc + '/' + match.params.category + '?min_price=' + min_price + '&max_price=' + max_price + '&sort=' + sort);
            document.location.href = '/' + match.params.uc + '/' + match.params.category + '?min_price=' + min_price + '&max_price=' + max_price + '&sort=' + sort;

            var queryParams = _queryString2.default.parse(_this.props.location.search);
        };

        _this.toggleFilter = function () {
            $('.filter').toggleClass('filter-active');
            $('.wrapper').toggleClass('wrapper-active');
        };

        _this.state = {
            itemsData: '',
            view: 'box'
        };
        return _this;
    }

    _createClass(Listings, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _props = this.props,
                match = _props.match,
                history = _props.history,
                location = _props.location;

            var self = this;

            console.log(_queryString2.default.parse(location.search), 'QS');
            var queryParams = _queryString2.default.parse(this.props.location.search);
            if (queryParams.min_price != undefined) {
                _axios2.default.get('/api/' + match.params.uc + '/' + match.params.category + '/' + match.params.listings + '?min_price=' + queryParams.min_price + '&max_price=' + queryParams.max_price + '&sort=' + queryParams.sort).then(function (response) {
                    //console.log('ItemsData1',self.state.itemsData)
                    //console.log(response)
                    self.setState({
                        itemsData: response.data
                    }, function () {
                        return console.log('ItemsData2', self.state.itemsData);
                    });
                }).catch(function (error) {
                    console.log(error);
                });
            } else {
                _axios2.default.get('/api/' + match.params.uc + '/' + match.params.category + '/' + match.params.listings).then(function (response) {
                    //console.log('ItemsData1',self.state.itemsData)
                    //console.log(response)
                    self.setState({
                        itemsData: response.data
                    }, function () {
                        return console.log('ItemsData2', self.state.itemsData);
                    });
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'listings-page' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'section',
                        { className: 'list-view' },
                        _react2.default.createElement(
                            'section',
                            { className: 'listing-setting' },
                            _react2.default.createElement(
                                'section',
                                { className: 'filter' },
                                _react2.default.createElement(
                                    'label',
                                    { className: 'filterlabel' },
                                    'FILTER'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group price' },
                                    _react2.default.createElement(
                                        'label',
                                        null,
                                        'Price'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement('input', { type: 'text', name: 'min_price', className: 'min_price', placeholder: '0', onChange: this.handleChange }),
                                        _react2.default.createElement('input', { type: 'text', name: 'max_price', className: 'max_price', placeholder: '1000', onChange: this.handleChange })
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group sort' },
                                    _react2.default.createElement(
                                        'label',
                                        null,
                                        'Sort By'
                                    ),
                                    _react2.default.createElement(
                                        'select',
                                        { name: 'sort', className: 'sortBy', onChange: this.handleChange },
                                        _react2.default.createElement(
                                            'option',
                                            { value: 'Highest' },
                                            'Price (Highest)'
                                        ),
                                        _react2.default.createElement(
                                            'option',
                                            { value: 'Lowest' },
                                            'Price (Lowest)'
                                        ),
                                        _react2.default.createElement(
                                            'option',
                                            { value: 'Newest' },
                                            'Date (Newest)'
                                        ),
                                        _react2.default.createElement(
                                            'option',
                                            { value: 'Oldest' },
                                            'Date (Oldest)'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'button' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'primary-btn', onClick: this.submitForm },
                                        'Update'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'reset-btn' },
                                        'Reset'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'wrapper' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'view', onClick: this.toggleFilter },
                                    _react2.default.createElement('i', { className: 'fas fa-filter' })
                                ),
                                _react2.default.createElement('input', { className: 'search', type: 'text', placeholder: 'Search for Ads..' }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'view' },
                                    _react2.default.createElement('i', { className: 'fas fa-th', onClick: this.changeView.bind(null, 'box') }),
                                    _react2.default.createElement('i', { className: 'fas fa-th-list', onClick: this.changeView.bind(null, 'list') })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'section',
                            { className: 'handleView' },
                            this.handleView()
                        )
                    )
                )
            );
        }
    }]);

    return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var My404Component = function (_Component) {
  _inherits(My404Component, _Component);

  function My404Component() {
    _classCallCheck(this, My404Component);

    var _this = _possibleConstructorReturn(this, (My404Component.__proto__ || Object.getPrototypeOf(My404Component)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(My404Component, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'errorpage' },
        _react2.default.createElement(
          'a',
          { href: '/' },
          _react2.default.createElement(
            'section',
            null,
            _react2.default.createElement(
              'h2',
              null,
              'OOPS!'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'The page you were looking for was not found. ',
            _react2.default.createElement('br', null),
            'Click this white box to go back home.'
          )
        )
      );
    }
  }]);

  return My404Component;
}(_react.Component);

exports.default = My404Component;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Newpost2 = function (_Component) {
    _inherits(Newpost2, _Component);

    function Newpost2() {
        _classCallCheck(this, Newpost2);

        var _this = _possibleConstructorReturn(this, (Newpost2.__proto__ || Object.getPrototypeOf(Newpost2)).call(this));

        _this.state = {
            name: 'Joe'
        };
        return _this;
    }

    _createClass(Newpost2, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'newpost' },
                _react2.default.createElement(
                    'section',
                    { className: 'newpost2' },
                    _react2.default.createElement(
                        'h3',
                        null,
                        'New Post'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'formbox' },
                            _react2.default.createElement(
                                'label',
                                { className: 'bold' },
                                'Post Info'
                            ),
                            _react2.default.createElement(
                                'section',
                                null,
                                _react2.default.createElement(
                                    'label',
                                    null,
                                    'Title:'
                                ),
                                _react2.default.createElement('input', { type: 'text', name: 'title' })
                            ),
                            _react2.default.createElement(
                                'section',
                                null,
                                _react2.default.createElement(
                                    'label',
                                    null,
                                    'Description:'
                                ),
                                _react2.default.createElement('textarea', { id: 'desc', rows: '6', cols: '36' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formbox' },
                            _react2.default.createElement(
                                'label',
                                { className: 'bold' },
                                'Contact Info'
                            ),
                            _react2.default.createElement(
                                'section',
                                { className: 'contactbox' },
                                _react2.default.createElement(
                                    'label',
                                    null,
                                    'Name:'
                                ),
                                _react2.default.createElement('input', null),
                                ' ',
                                _react2.default.createElement('br', null),
                                _react2.default.createElement(
                                    'label',
                                    null,
                                    'Phone Number:'
                                ),
                                _react2.default.createElement('input', null),
                                '  ',
                                _react2.default.createElement('br', null),
                                _react2.default.createElement(
                                    'label',
                                    null,
                                    'Note (optional)'
                                ),
                                _react2.default.createElement('input', null),
                                '    ',
                                _react2.default.createElement('br', null)
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/Newpost3' },
                        _react2.default.createElement(
                            'div',
                            { className: 'continue' },
                            _react2.default.createElement(
                                'p',
                                null,
                                'Continue'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Newpost2;
}(_react.Component);

exports.default = Newpost2;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Newpost3 = function (_Component) {
  _inherits(Newpost3, _Component);

  function Newpost3() {
    _classCallCheck(this, Newpost3);

    var _this = _possibleConstructorReturn(this, (Newpost3.__proto__ || Object.getPrototypeOf(Newpost3)).call(this));

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Newpost3, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'newpost' },
        _react2.default.createElement(
          'section',
          { className: 'newpost3' },
          _react2.default.createElement(
            'h3',
            null,
            'New Post'
          ),
          console.log(33),
          _react2.default.createElement(
            'div',
            { className: 'blackbox' },
            _react2.default.createElement(
              'div',
              null,
              'Upload Images'
            )
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            _react2.default.createElement(
              'div',
              { className: 'continue' },
              _react2.default.createElement(
                'p',
                null,
                'Post this Ad'
              )
            )
          )
        )
      );
    }
  }]);

  return Newpost3;
}(_react.Component);

exports.default = Newpost3;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(126);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Newpost1 = function (_Component) {
  _inherits(Newpost1, _Component);

  function Newpost1() {
    _classCallCheck(this, Newpost1);

    var _this = _possibleConstructorReturn(this, (Newpost1.__proto__ || Object.getPrototypeOf(Newpost1)).call(this));

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Newpost1, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'newpost' },
        _react2.default.createElement(
          'section',
          { className: 'newpost1' },
          _react2.default.createElement(
            'h3',
            null,
            'New Post'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Choose the community that fits best for your post:'
          ),
          _react2.default.createElement(
            'div',
            { id: 'mainselection' },
            _react2.default.createElement(
              'select',
              { className: 'category1 custom-select' },
              _react2.default.createElement(
                'option',
                null,
                'UCSD'
              )
            ),
            _react2.default.createElement(
              'select',
              { className: 'category2 custom-select' },
              _react2.default.createElement(
                'option',
                null,
                'Select a category'
              )
            ),
            _react2.default.createElement(
              'select',
              { className: 'category3 custom-select' },
              _react2.default.createElement(
                'option',
                null,
                'UCSD'
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/Newpost2' },
              _react2.default.createElement(
                'div',
                { className: 'continue' },
                _react2.default.createElement(
                  'p',
                  null,
                  'Continue'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Newpost1;
}(_react.Component);

exports.default = Newpost1;

/***/ })

},[153]);