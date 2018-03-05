(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://agendaopensource.github.io/jam-react/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Typography");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Grid");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_MENU_ACTIVE = exports.SET_MENU_ACTIVE = 'SET_MENU_ACTIVE';

var setMenuActive = exports.setMenuActive = function setMenuActive(id) {
  return {
    type: SET_MENU_ACTIVE,
    id: id
  };
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TOGGLE_DRAWER = exports.TOGGLE_DRAWER = 'TOGGLE_DRAWER';

var toggleDrawer = exports.toggleDrawer = function toggleDrawer() {
  return {
    type: TOGGLE_DRAWER
  };
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _EventList = __webpack_require__(33);

var _EventList2 = _interopRequireDefault(_EventList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withSiteData)(function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_EventList2.default, null)
  );
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Paper");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  githubUrl: 'https://github.com/agendaopensource/agendaopensource.github.io',
  newEventUrl: 'https://github.com/agendaopensource/agendaopensource.github.io/issues/new?template=event.md&title=New%20event&labels=event',
  cfpUrl: 'https://github.com/agendaopensource/agendaopensource.github.io/issues/new?template=cfp.md&title=Call+for+pappers&labels=event',
  googleMapsUrl: 'https://www.google.pt/maps/place'
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(2);

var _Typography = __webpack_require__(4);

var _Typography2 = _interopRequireDefault(_Typography);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  bigtext: {
    fontSize: '1.68rem'
  },
  catchyButton: {
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

var Speakers = function Speakers(_ref) {
  var classes = _ref.classes;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Typography2.default,
      { paragraph: true, variant: 'headline', component: 'h1' },
      'Speakers'
    ),
    _react2.default.createElement(
      _Typography2.default,
      { className: classes.bigtext },
      'Have you spoken in a conference recently?'
    ),
    _react2.default.createElement(
      _Typography2.default,
      { className: classes.bigtext },
      'Share with us the subjects that you like to speak and get ready to be selected for the next conference! :)'
    ),
    _react2.default.createElement(
      _Typography2.default,
      null,
      'Open an issue in Github with your Bio, presentations, videos of your talks, and everything else that you might consider relevant to be shared on this page.'
    )
  );
};

Speakers.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(Speakers);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Paper = __webpack_require__(12);

var _Paper2 = _interopRequireDefault(_Paper);

var _styles = __webpack_require__(2);

var _reactStatic = __webpack_require__(3);

var _Typography = __webpack_require__(4);

var _Typography2 = _interopRequireDefault(_Typography);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Grid = __webpack_require__(6);

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    cfpEvent: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 2
    }),
    bigtext: {
      fontSize: '1.68rem'
    },
    headline: {
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2
    },
    link: {
      textDecoration: 'none',
      color: '#039be5'
    }
  };
};

var CallForPapers = function (_React$Component) {
  _inherits(CallForPapers, _React$Component);

  function CallForPapers(props) {
    _classCallCheck(this, CallForPapers);

    var _this = _possibleConstructorReturn(this, (CallForPapers.__proto__ || Object.getPrototypeOf(CallForPapers)).call(this, props));

    _this.state = {
      frequentCfp: props.frequentCallForPapers,
      sporadicCfp: props.sporadicCallForPapers
    };
    return _this;
  }

  _createClass(CallForPapers, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;
      var _state = this.state,
          frequentCfp = _state.frequentCfp,
          sporadicCfp = _state.sporadicCfp;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Typography2.default,
          { paragraph: true, variant: 'headline', component: 'h1' },
          'Call for Papers'
        ),
        _react2.default.createElement(
          _Typography2.default,
          { paragraph: true, variant: 'subheading' },
          'Do you want to share your talent and knowledge with others? Find here ongoing call for papers that you can submit your proposals.'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _Grid2.default,
            { container: true, spacing: 16 },
            this.state.sporadicCfp.map(function (cfp) {
              return _react2.default.createElement(
                _Grid2.default,
                { key: '' + cfp.deadline + cfp.name, item: true, xs: 12 },
                _react2.default.createElement(
                  _Paper2.default,
                  { className: classes.cfpEvent },
                  _react2.default.createElement(
                    _Typography2.default,
                    { variant: 'title', component: 'h2', paragraph: true },
                    _react2.default.createElement(
                      _reactStatic.Link,
                      {
                        to: cfp.url,
                        href: cfp.url,
                        className: classes.link,
                        target: '_blank',
                        rel: 'noopener'
                      },
                      cfp.name
                    )
                  ),
                  _react2.default.createElement(
                    _Typography2.default,
                    { variant: 'body1', paragraph: true, gutterBottom: true },
                    cfp.description
                  )
                )
              );
            })
          )
        ),
        _react2.default.createElement(
          _Typography2.default,
          { variant: 'headline', component: 'h4', className: classes.headline },
          'Frequent initiatives:'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _Grid2.default,
            { container: true, spacing: 16 },
            this.state.frequentCfp.map(function (cfp) {
              return _react2.default.createElement(
                _Grid2.default,
                { key: '' + cfp.name, item: true, xs: 12 },
                _react2.default.createElement(
                  _Paper2.default,
                  { className: classes.cfpEvent },
                  _react2.default.createElement(
                    _Typography2.default,
                    { variant: 'title', component: 'h2', paragraph: true },
                    _react2.default.createElement(
                      _reactStatic.Link,
                      {
                        to: cfp.url,
                        href: cfp.url,
                        className: classes.link,
                        target: '_blank',
                        rel: 'noopener'
                      },
                      cfp.name
                    )
                  ),
                  _react2.default.createElement(
                    _Typography2.default,
                    { variant: 'body1', paragraph: true, gutterBottom: true },
                    cfp.description
                  )
                )
              );
            })
          )
        )
      );
    }
  }]);

  return CallForPapers;
}(_react2.default.Component);

CallForPapers.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  frequentCallForPapers: _propTypes2.default.array.isRequired,
  sporadicCallForPapers: _propTypes2.default.array.isRequired
};

exports.default = (0, _styles.withStyles)(styles)((0, _reactStatic.withRouteData)(CallForPapers));

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Typography = __webpack_require__(4);

var _Typography2 = _interopRequireDefault(_Typography);

var _styles = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var styles = {};

exports.default = (0, _styles.withStyles)(styles)(function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Typography2.default,
      { paragraph: true, variant: 'headline', component: 'h1' },
      'About'
    ),
    _react2.default.createElement(
      _Typography2.default,
      { type: 'body1' },
      'This project was born to act as a glue to different organizations that are currently pushing events or meetups. Another goal is to link speakers to events and vice versa, by having a curated repository of Speakers and a call for papers list.'
    ),
    _react2.default.createElement(
      _Typography2.default,
      { paragraph: true, type: 'body1' },
      'Please support this initiative by adding more events to the current curated list.'
    )
  );
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _Typography = __webpack_require__(4);

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var posts = _ref.posts;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Typography2.default,
      { type: 'headline', gutterBottom: true },
      'It&quote;s blog time.'
    ),
    _react2.default.createElement(
      _Typography2.default,
      { type: 'body1', component: 'div' },
      'All Posts:',
      _react2.default.createElement(
        'ul',
        null,
        posts.map(function (post) {
          return _react2.default.createElement(
            'li',
            { key: post.id },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/blog/post/' + post.id + '/', href: '/blog/post/' + post.id + '/' },
              post.title
            )
          );
        })
      )
    )
  );
});
//

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Typography = __webpack_require__(4);

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Typography2.default,
      { type: 'headline', align: 'center' },
      '404 - Oh no&quote;s! We couldn&quote;t find that page :('
    )
  );
};
//

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styles = __webpack_require__(2);

var _App = __webpack_require__(23);

var _App2 = _interopRequireDefault(_App);

var _theme = __webpack_require__(63);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)


// Your top level component
exports.default = _App2.default;

// Render your app


// Your Material UI Custom theme

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate;
  var muiTheme = (0, _styles.createMuiTheme)(_theme2.default);

  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(
      _styles.MuiThemeProvider,
      { theme: muiTheme },
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _reactStaticRoutes = __webpack_require__(24);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(7);

var _reactHotLoader = __webpack_require__(38);

var _Reboot = __webpack_require__(39);

var _Reboot2 = _interopRequireDefault(_Reboot);

var _styles = __webpack_require__(2);

var _reactHelmet = __webpack_require__(40);

var _NavigationAppBar = __webpack_require__(41);

var _NavigationAppBar2 = _interopRequireDefault(_NavigationAppBar);

var _Footer = __webpack_require__(53);

var _Footer2 = _interopRequireDefault(_Footer);

var _redux = __webpack_require__(55);

var _redux2 = _interopRequireDefault(_redux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Custom styles
var styles = function styles(theme) {
  return {
    '@global': {
      fontFace: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
      img: {
        maxWidth: '100%'
      },
      a: {
        textDecoration: 'none',
        color: '#FFFFFF'
      }
    },
    tabs: {
      width: '100%'
    },
    content: _defineProperty({
      padding: '1rem',
      paddingTop: '5rem',
      margin: '0 auto',
      maxWidth: '1280px',
      minHeight: '400px',
      width: '100%'
    }, theme.breakpoints.up('md'), {
      width: '80%'
    })
  };
};

var App = function (_PureComponent) {
  _inherits(App, _PureComponent);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentDidMount',

    // Remove the server-side injected CSS.
    value: function componentDidMount() {
      var jssStyles = document.getElementById('jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = this.props.classes;


      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: _redux2.default },
        _react2.default.createElement(
          _reactStatic.Router,
          null,
          _react2.default.createElement(
            'div',
            { className: classes.container },
            _react2.default.createElement(
              _reactHelmet.Helmet,
              null,
              _react2.default.createElement(
                'title',
                null,
                'Open Agenda'
              )
            ),
            _react2.default.createElement(_Reboot2.default, null),
            _react2.default.createElement(_NavigationAppBar2.default, null),
            _react2.default.createElement(
              'div',
              { className: classes.content },
              _react2.default.createElement(_reactStaticRoutes2.default, null)
            ),
            _react2.default.createElement(_Footer2.default, null)
          )
        )
      );
    }
  }]);

  return App;
}(_react.PureComponent);

App.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

var AppWithStyles = (0, _styles.withStyles)(styles)(App);

exports.default = (0, _reactHotLoader.hot)(module)(AppWithStyles);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(25);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(26);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(27);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(28);

var _reactUniversalComponent = __webpack_require__(29);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error() {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An unknown error has occured loading this page. Please reload your browser and try again.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home',
  file: '/home/travis/build/agendaopensource/jam-react/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 11)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(11);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Speakers',
  file: '/home/travis/build/agendaopensource/jam-react/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 14)), (0, _importCss3.default)('src/containers/Speakers', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Speakers');
  },
  resolve: function resolve() {
    return /*require.resolve*/(14);
  },
  chunkName: function chunkName() {
    return 'src/containers/Speakers';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/CallForPapers',
  file: '/home/travis/build/agendaopensource/jam-react/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 15)), (0, _importCss3.default)('src/containers/CallForPapers', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/CallForPapers');
  },
  resolve: function resolve() {
    return /*require.resolve*/(15);
  },
  chunkName: function chunkName() {
    return 'src/containers/CallForPapers';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/About',
  file: '/home/travis/build/agendaopensource/jam-react/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 16)), (0, _importCss3.default)('src/containers/About', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/About');
  },
  resolve: function resolve() {
    return /*require.resolve*/(16);
  },
  chunkName: function chunkName() {
    return 'src/containers/About';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Blog',
  file: '/home/travis/build/agendaopensource/jam-react/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 17)), (0, _importCss3.default)('src/containers/Blog', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Blog');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return 'src/containers/Blog';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/home/travis/build/agendaopensource/jam-react/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 18)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(18);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
var templateMap = {
  t_0: t_0,
  t_1: t_1,
  t_2: t_2,
  t_3: t_3,
  t_4: t_4,
  t_5: t_5

  // Template Tree
};var templateTree = { c: { "404": { t: "t_5" }, "/": { t: "t_0" }, "speakers": { t: "t_1" }, "call-for-papers": { t: "t_2" }, "about": { t: "t_3" }, "blog": { t: "t_4" } }

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  var parts = path === '/' ? ['/'] : path.split('/').filter(function (d) {
    return d;
  });
  var cursor = templateTree;
  try {
    parts.forEach(function (part) {
      cursor = cursor.c[part];
    });
    return templateMap[cursor.t];
  } catch (e) {
    return false;
  }
};

if (typeof document !== 'undefined') {
  window.reactStaticGetComponentForPath = getComponentForPath;
}

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;

      var renderProps = {
        templateMap: templateMap,
        templateTree: templateTree,
        getComponentForPath: getComponentForPath
      };
      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }
      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getComponentForPath(props.location.pathname);
          if (!Comp) {
            Comp = getComponentForPath('404');
          }
          return Comp && _react2.default.createElement(Comp, props);
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(30);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(31);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(32);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        if (Component) return Promise.resolve(Component);

        return requireAsync(props, context);
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(10);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactStatic = __webpack_require__(3);

var _styles = __webpack_require__(2);

var _Grid = __webpack_require__(6);

var _Grid2 = _interopRequireDefault(_Grid);

var _Paper = __webpack_require__(12);

var _Paper2 = _interopRequireDefault(_Paper);

var _Typography = __webpack_require__(4);

var _Typography2 = _interopRequireDefault(_Typography);

var _Schedule = __webpack_require__(34);

var _Schedule2 = _interopRequireDefault(_Schedule);

var _Place = __webpack_require__(35);

var _Place2 = _interopRequireDefault(_Place);

var _FriendlyRangeDate = __webpack_require__(36);

var _FriendlyRangeDate2 = _interopRequireDefault(_FriendlyRangeDate);

var _AppConfig = __webpack_require__(13);

var _AppConfig2 = _interopRequireDefault(_AppConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Icons


var styles = function styles(theme) {
  return {
    paperEvent: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 2
    }),
    headline: {
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2
    },
    link: {
      textDecoration: 'none',
      color: '#039be5'
    },
    timeandplace: {
      marginBottom: theme.spacing.unit * 3
    },
    icons: {
      verticalAlign: 'text-bottom',
      width: 20,
      height: 20
    },
    location: {
      paddingLeft: theme.spacing.unit * 2
    }
  };
};

var googleMapLink = function googleMapLink(url) {
  return _AppConfig2.default.googleMapsUrl + '/' + encodeURI(url);
};

var EventList = function (_React$Component) {
  _inherits(EventList, _React$Component);

  function EventList(props) {
    _classCallCheck(this, EventList);

    var _this = _possibleConstructorReturn(this, (EventList.__proto__ || Object.getPrototypeOf(EventList)).call(this, props));

    _this.state = {
      events: props.events
    };
    return _this;
  }

  _createClass(EventList, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Typography2.default,
          { paragraph: true, variant: 'headline', component: 'h1', className: classes.headline },
          'Upcoming events'
        ),
        _react2.default.createElement(
          _Grid2.default,
          { container: true, spacing: 16 },
          this.state.events.map(function (event) {
            return _react2.default.createElement(
              _Grid2.default,
              { key: event.uniqId, item: true, xs: 12 },
              _react2.default.createElement(
                _Paper2.default,
                { className: classes.paperEvent },
                _react2.default.createElement(
                  _Typography2.default,
                  { variant: 'title', component: 'h2', paragraph: true },
                  _react2.default.createElement(
                    _reactStatic.Link,
                    { to: event.url, href: event.url, className: classes.link, target: '_blank', rel: 'noopener' },
                    event.name
                  )
                ),
                _react2.default.createElement(
                  _Typography2.default,
                  { variant: 'subheading', className: classes.timeandplace },
                  _react2.default.createElement(_Schedule2.default, { className: classes.icons }),
                  ' ',
                  _react2.default.createElement(_FriendlyRangeDate2.default, { startDate: event.startDate, endDate: event.endDate }),
                  event.location && _react2.default.createElement(
                    'span',
                    { className: classes.location },
                    _react2.default.createElement(_Place2.default, { className: classes.icons }),
                    ' ',
                    _react2.default.createElement(
                      _reactStatic.Link,
                      {
                        to: googleMapLink(event.location.address),
                        href: googleMapLink(event.location.address),
                        className: classes.link,
                        target: '_blank',
                        rel: 'noopener'
                      },
                      event.location.name
                    )
                  )
                ),
                _react2.default.createElement(
                  _Typography2.default,
                  { variant: 'body1', paragraph: true, gutterBottom: true },
                  event.description
                )
              )
            );
          })
        )
      );
    }
  }]);

  return EventList;
}(_react2.default.Component);

EventList.propTypes = {
  events: _propTypes2.default.array.isRequired,
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)((0, _reactStatic.withRouteData)(EventList));

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Schedule");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Place");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(37);

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @todo: big refactor on this code!
var FriendlyRangeDate = function FriendlyRangeDate(_ref) {
  var startDate = _ref.startDate,
      endDate = _ref.endDate;

  var startDateSplit = {
    year: (0, _moment2.default)(startDate).format('YYYY'),
    month: (0, _moment2.default)(startDate).format('MM'),
    day: (0, _moment2.default)(startDate).format('DD'),
    hour: (0, _moment2.default)(startDate).format('hh'),
    min: (0, _moment2.default)(startDate).format('mm')
  };

  var endDateSplit = {
    year: (0, _moment2.default)(endDate).format('YYYY'),
    month: (0, _moment2.default)(endDate).format('MM'),
    day: (0, _moment2.default)(endDate).format('DD'),
    hour: (0, _moment2.default)(endDate).format('hh'),
    min: (0, _moment2.default)(endDate).format('mm')
  };

  var nowDateSplit = {
    year: (0, _moment2.default)().format('YYYY'),
    month: (0, _moment2.default)().format('MM'),
    day: (0, _moment2.default)().format('DD')
  };

  var startDateMoment = (0, _moment2.default)(startDate);
  var endDateMoment = (0, _moment2.default)(endDate);

  var friendlyRangeDate = void 0;

  // Same day event, show month day and hour
  if (startDateMoment.format('YYYYMMDD') === endDateMoment.format('YYYYMMDD')) {
    // If current year, no need to add it
    var includeYear = '';
    if (startDateMoment.format('YYYY') !== (0, _moment2.default)().format('YYYY')) {
      includeYear = ' YYYY';
    }
    if (startDateMoment.format('hhmm') !== endDateMoment.format('hhmm')) {
      friendlyRangeDate = startDateMoment.format('MMM Do' + includeYear + ', h:mm') + ' - ' + endDateMoment.format('h:mm');
    } else {
      friendlyRangeDate = '' + startDateMoment.format('MMM Do' + includeYear);
    }
  } else {
    // If current year, no need to add it
    var includeStartYear = '';
    if (endDateMoment.format('YYYY') !== (0, _moment2.default)().format('YYYY')) {
      includeStartYear = ', YYYY';
    }
    var includeEndYear = '';
    if (endDateMoment.format('YYYY') !== (0, _moment2.default)().format('YYYY')) {
      includeEndYear = ', YYYY';
    }
    var includeEndMonth = '';
    if (startDateMoment.format('MM') !== endDateMoment.format('MM')) {
      includeEndMonth = 'MMM ';
    }

    friendlyRangeDate = startDateMoment.format('MMM D' + includeStartYear) + '-' + endDateMoment.format(includeEndMonth + 'Do' + includeEndYear);

    //    if (startDateMoment.format('YYYY') !== moment().format('YYYY'))
  }

  // Month 12th-
  if (startDateSplit.year === endDateSplit.year && startDateSplit.year !== nowDateSplit.year) {
    friendlyRangeDate.startYear = startDateSplit.year;
  }
  return _react2.default.createElement(
    'span',
    null,
    friendlyRangeDate
  );
};

FriendlyRangeDate.propTypes = {
  startDate: _propTypes2.default.string.isRequired,
  endDate: _propTypes2.default.string.isRequired
};

exports.default = FriendlyRangeDate;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Reboot");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(7);

var _reactStatic = __webpack_require__(3);

var _AppBar = __webpack_require__(42);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = __webpack_require__(43);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(4);

var _Typography2 = _interopRequireDefault(_Typography);

var _Button = __webpack_require__(44);

var _Button2 = _interopRequireDefault(_Button);

var _styles = __webpack_require__(2);

var _Hidden = __webpack_require__(45);

var _Hidden2 = _interopRequireDefault(_Hidden);

var _IconButton = __webpack_require__(19);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = __webpack_require__(46);

var _Menu2 = _interopRequireDefault(_Menu);

var _NavigationDrawer = __webpack_require__(47);

var _NavigationDrawer2 = _interopRequireDefault(_NavigationDrawer);

var _menu = __webpack_require__(8);

var _drawer = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// Icons

//


var styles = function styles(theme) {
  return {
    flex: {
      flex: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
      color: '#FFFFFF'
    },
    logo: {
      color: '#FFFFFF',
      textDecoration: 'none'
    },
    container: _defineProperty({
      margin: '0 auto',
      maxWidth: '1280px',
      width: '100%'
    }, theme.breakpoints.up('md'), {
      width: '80%'
    }),
    appBar: {
      flexWrap: 'wrap'
    },
    button: {
      color: '#FFFFFF'
    },
    leftIcon: {
      marginRight: theme.spacing.unit
    }
  };
};

var NavigationAppBar = function (_React$Component) {
  _inherits(NavigationAppBar, _React$Component);

  function NavigationAppBar(props) {
    _classCallCheck(this, NavigationAppBar);

    var _this = _possibleConstructorReturn(this, (NavigationAppBar.__proto__ || Object.getPrototypeOf(NavigationAppBar)).call(this, props));

    _this.handleToggleDrawer = _this.handleToggleDrawer.bind(_this);
    return _this;
  }

  _createClass(NavigationAppBar, [{
    key: 'handleToggleDrawer',
    value: function handleToggleDrawer() {
      var performToggleDrawer = this.props.performToggleDrawer;

      performToggleDrawer();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          menu = _props.menu,
          activateMenu = _props.activateMenu;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _AppBar2.default,
          { className: classes.appBar },
          _react2.default.createElement(
            _Toolbar2.default,
            { className: classes.container },
            _react2.default.createElement(
              _Hidden2.default,
              { mdUp: true },
              _react2.default.createElement(
                _IconButton2.default,
                {
                  className: classes.menuButton,
                  color: 'inherit',
                  'aria-label': 'Menu',
                  onClick: this.handleToggleDrawer
                },
                _react2.default.createElement(_Menu2.default, null)
              )
            ),
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'title', color: 'inherit', className: classes.flex },
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/', href: '/', className: classes.logo },
                'Open Agenda'
              )
            ),
            _react2.default.createElement(
              _Hidden2.default,
              { smDown: true },
              menu.map(function (menuOption) {
                return _react2.default.createElement(
                  _Button2.default,
                  {
                    key: menuOption.id,
                    component: _reactStatic.Link,
                    to: menuOption.link,
                    target: menuOption.target,
                    rel: menuOption.rel,
                    className: classes.button,
                    onClick: function onClick() {
                      return activateMenu(menuOption.id);
                    }
                  },
                  _react2.default.createElement(menuOption.icon, { className: classes.leftIcon }),
                  menuOption.label
                );
              })
            )
          )
        ),
        _react2.default.createElement(_NavigationDrawer2.default, null)
      );
    }
  }]);

  return NavigationAppBar;
}(_react2.default.Component);

NavigationAppBar.propTypes = {
  performToggleDrawer: _propTypes2.default.func.isRequired,
  classes: _propTypes2.default.object.isRequired,
  menu: _propTypes2.default.array.isRequired,
  activateMenu: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    menu: state.menu
  };
};

var mapDispatchToProps = {
  activateMenu: _menu.setMenuActive,
  performToggleDrawer: _drawer.toggleDrawer
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _styles.withStyles)(styles)(NavigationAppBar));

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Toolbar");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Button");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Hidden");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Menu");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _styles = __webpack_require__(2);

var _Drawer = __webpack_require__(48);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = __webpack_require__(19);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Divider = __webpack_require__(49);

var _Divider2 = _interopRequireDefault(_Divider);

var _List = __webpack_require__(50);

var _List2 = _interopRequireDefault(_List);

var _ChevronLeft = __webpack_require__(51);

var _ChevronLeft2 = _interopRequireDefault(_ChevronLeft);

var _reactStatic = __webpack_require__(3);

var _menu = __webpack_require__(8);

var _drawer = __webpack_require__(9);

var _materialUi = __webpack_require__(52);

var _materialUi2 = _interopRequireDefault(_materialUi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {};

var NavigationDrawer = function (_React$Component) {
  _inherits(NavigationDrawer, _React$Component);

  function NavigationDrawer(props) {
    _classCallCheck(this, NavigationDrawer);

    var _this = _possibleConstructorReturn(this, (NavigationDrawer.__proto__ || Object.getPrototypeOf(NavigationDrawer)).call(this, props));

    _this.handleToggleDrawer = _this.handleToggleDrawer.bind(_this);
    return _this;
  }

  _createClass(NavigationDrawer, [{
    key: 'handleToggleDrawer',
    value: function handleToggleDrawer() {
      var performToggleDrawer = this.props.performToggleDrawer;

      performToggleDrawer();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          menu = _props.menu,
          activateMenu = _props.activateMenu,
          drawerState = _props.drawerState;


      return _react2.default.createElement(
        _Drawer2.default,
        {
          variant: 'persistent',
          classes: {
            paper: classes.drawerPaper
          },
          open: drawerState.open
        },
        _react2.default.createElement(
          'div',
          { className: classes.drawerInner },
          _react2.default.createElement(
            'div',
            { className: classes.drawerHeader },
            _react2.default.createElement(
              _IconButton2.default,
              { onClick: this.handleToggleDrawer },
              _react2.default.createElement(_ChevronLeft2.default, null)
            )
          ),
          _react2.default.createElement(_Divider2.default, null),
          _react2.default.createElement(
            _List2.default,
            null,
            menu.map(function (menuOption) {
              return _react2.default.createElement(
                _List.ListItem,
                {
                  button: true,
                  key: menuOption.id,
                  component: _reactStatic.Link,
                  to: menuOption.link,
                  target: menuOption.target,
                  rel: menuOption.rel,
                  onClick: function onClick() {
                    return activateMenu(menuOption.id);
                  }
                },
                _react2.default.createElement(
                  _List.ListItemIcon,
                  null,
                  _react2.default.createElement(menuOption.icon, null)
                ),
                _react2.default.createElement(_List.ListItemText, { primary: menuOption.label })
              );
            })
          )
        )
      );
    }
  }]);

  return NavigationDrawer;
}(_react2.default.Component);

NavigationDrawer.propTypes = {
  drawerState: _propTypes2.default.object.isRequired,
  classes: _propTypes2.default.object.isRequired,
  activateMenu: _propTypes2.default.func.isRequired,
  performToggleDrawer: _propTypes2.default.func.isRequired,
  menu: _propTypes2.default.array.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    menu: state.menu,
    drawerState: state.drawer
  };
};

var mapDispatchToProps = {
  activateMenu: _menu.setMenuActive,
  performToggleDrawer: _drawer.toggleDrawer
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _styles.withStyles)(styles)(NavigationDrawer));

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Drawer");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Divider");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/ChevronLeft");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("material-ui");

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(2);

var _Grid = __webpack_require__(6);

var _Grid2 = _interopRequireDefault(_Grid);

var _reactStatic = __webpack_require__(3);

var _Typography = __webpack_require__(4);

var _Typography2 = _interopRequireDefault(_Typography);

var _FavoriteBorder = __webpack_require__(54);

var _FavoriteBorder2 = _interopRequireDefault(_FavoriteBorder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    root: {
      backgroundColor: '#ee6e73',
      color: '#ffffff'
    },
    container: _defineProperty({
      margin: '0 auto',
      maxWidth: '1280px',
      width: '100%'
    }, theme.breakpoints.up('md'), {
      width: '80%'
    }),
    list: {
      margin: 0,
      paddingLeft: 0,
      listStyle: 'none'
    },
    listItem: {
      paddingTop: theme.spacing.unit / 2,
      paddingBottom: theme.spacing.unit / 2
    },
    copywrite: {
      color: 'rgba(255,255,255,0.8)',
      backgroundColor: 'rgba(51,51,51,0.08)',
      minHeight: '50px'
    },
    lovetext: {
      fontSize: '1rem',
      paddingTop: theme.spacing.unit * 2
    },
    love: {
      height: '15px',
      width: '15px',
      verticalAlign: 'text-bottom'
    }
  };
};

var Footer = function Footer(_ref) {
  var classes = _ref.classes;
  return _react2.default.createElement(
    'div',
    { className: classes.root },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _Grid2.default,
        { className: classes.container, container: true, spacing: 16 },
        _react2.default.createElement(
          _Grid2.default,
          { item: true, sm: 6 },
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'title', color: 'inherit', gutterBottom: true },
            'Open Agenda'
          ),
          _react2.default.createElement(
            _Typography2.default,
            { color: 'inherit' },
            'An open source project to promote and share events and meetups.'
          ),
          _react2.default.createElement(
            _Typography2.default,
            { color: 'inherit' },
            'Please fork the project and help improving it.'
          )
        ),
        _react2.default.createElement(
          _Grid2.default,
          { item: true, sm: 6 },
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'title', gutterBottom: true, color: 'inherit' },
            'Links'
          ),
          _react2.default.createElement(
            _Typography2.default,
            { color: 'inherit', component: 'span' },
            _react2.default.createElement(
              'ul',
              { className: classes.list },
              _react2.default.createElement(
                'li',
                { className: classes.listItem },
                _react2.default.createElement(
                  _reactStatic.Link,
                  {
                    to: 'https://github.com/agendaopensource/agendaopensource.github.io',
                    href: 'https://github.com/agendaopensource/agendaopensource.github.io'
                  },
                  'GitHub'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: classes.listItem },
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/about', href: '/about' },
                  'About'
                )
              )
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: classes.copywrite },
      _react2.default.createElement(
        _Grid2.default,
        { className: classes.container, container: true, spacing: 16 },
        _react2.default.createElement(
          _Typography2.default,
          { color: 'inherit', className: classes.lovetext },
          'Made with ',
          _react2.default.createElement(_FavoriteBorder2.default, { className: classes.love }),
          ' !'
        )
      )
    )
  );
};

Footer.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(Footer);

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/FavoriteBorder");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(20);

var _reducers = __webpack_require__(56);

var _reducers2 = _interopRequireDefault(_reducers);

var _generateMenu = __webpack_require__(59);

var _generateMenu2 = _interopRequireDefault(_generateMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window === 'undefined') {
  global.window = {};
}

var initialState = {
  menu: _generateMenu2.default
};

/* eslint-disable no-underscore-dangle */
var store = (0, _redux.createStore)(_reducers2.default, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

exports.default = store;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(20);

var _menu = __webpack_require__(57);

var _menu2 = _interopRequireDefault(_menu);

var _drawer = __webpack_require__(58);

var _drawer2 = _interopRequireDefault(_drawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  menu: _menu2.default,
  drawer: _drawer2.default
});

exports.default = reducer;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = __webpack_require__(8);

var setMenuActive = function setMenuActive(state, id) {
  return state.map(function (item) {
    var itemUpdated = item;
    itemUpdated.active = item.id === id;
    return itemUpdated;
  });
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _menu.SET_MENU_ACTIVE:
      return setMenuActive(state, action.id);
    default:
      return state;
  }
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _drawer = __webpack_require__(9);

var initialState = {
  open: false
};

var toggleDrawer = function toggleDrawer(state) {
  return _extends({}, state, {
    open: !state.open
  });
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _drawer.TOGGLE_DRAWER:
      return toggleDrawer(state);
    default:
      return state;
  }
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LibraryBooks = __webpack_require__(60);

var _LibraryBooks2 = _interopRequireDefault(_LibraryBooks);

var _Event = __webpack_require__(61);

var _Event2 = _interopRequireDefault(_Event);

var _Face = __webpack_require__(62);

var _Face2 = _interopRequireDefault(_Face);

var _AppConfig = __webpack_require__(13);

var _AppConfig2 = _interopRequireDefault(_AppConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  id: 1,
  link: '/call-for-papers',
  label: 'Call for papers',
  icon: _LibraryBooks2.default,
  active: 0
}, {
  id: 2,
  link: '/speakers',
  label: 'Speakers',
  icon: _Face2.default,
  active: 0
}, {
  id: 3,
  link: _AppConfig2.default.newEventUrl,
  label: 'Suggest event',
  target: '_blank',
  rel: 'noopener',
  icon: _Event2.default,
  active: 0
}];

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/LibraryBooks");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Event");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Face");

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = __webpack_require__(64);

var fontWeightMedium = 300;
var fontWeightSmall = 500;
exports.default = {
  typography: {
    // Use the system font.
    fontFamily: '-apple-system,system-ui,BlinkMacSystemFont,' + '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
    fontWeightSmall: fontWeightSmall,
    body1: {
      fontWeight: fontWeightMedium
    },
    button: {
      fontWeight: fontWeightMedium
    }
  },
  palette: {
    primary: {
      light: _colors.red[100],
      main: _colors.red[300],
      dark: _colors.red[700]
    },
    accent: _colors.red,
    type: 'light',
    background: {
      appBar: _colors.red[300]
    }
  }
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("material-ui/colors");

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.5579d73d.js.map