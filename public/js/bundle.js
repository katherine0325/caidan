(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var PageoneActions = (function () {
	function PageoneActions() {
		_classCallCheck(this, PageoneActions);

		this.generateActions('ingMenunames', 'updateOnlineUsers', 'addMenunameSuccess', 'getMenuSuccess', 'del', 'updateAjaxAnimation');
	}

	_createClass(PageoneActions, [{
		key: 'addMenuname',
		value: function addMenuname(menuname) {
			var _this = this;

			$.ajax({
				type: 'POST',
				url: '/api/addmenuname',
				data: { name: menuname }
			}).done(function (data) {
				_this.actions.getMenuSuccess(data);
			}).fail(function (jqXhr) {
				console.log('addMenuname fail');
			});
		}
	}, {
		key: 'getMenu',
		value: function getMenu() {
			var _this2 = this;

			$.ajax({ url: '/api/menu' }).done(function (data) {
				_this2.actions.getMenuSuccess(data);
			}).fail(function (jqXhr) {
				console.log('get Menuname fail');
			});
		}
	}, {
		key: 'deleteMenuname',
		value: function deleteMenuname(id) {
			var _this3 = this;

			$.ajax({
				type: 'DELETE',
				url: '/api/deletemenuname',
				data: { id: id }
			}).done(function (data) {
				_this3.actions.getMenuSuccess(data);
			}).fail(function (jqXhr) {
				console.log('delete Menuname fail');
			});
		}
	}]);

	return PageoneActions;
})();

exports['default'] = _alt2['default'].createActions(PageoneActions);
module.exports = exports['default'];

},{"../alt":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var PagetwoActions = function PagetwoActions() {
	_classCallCheck(this, PagetwoActions);

	this.generateActions('ingMenunamesSub', 'finishMenuname');
};

exports['default'] = _alt2['default'].createActions(PagetwoActions);
module.exports = exports['default'];

},{"../alt":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

exports['default'] = new _alt2['default']();
module.exports = exports['default'];

},{"alt":"alt"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_reactRouter.RouteHandler, null)
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];

},{"react":"react","react-router":"react-router"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesPagetwoStore = require('../stores/PagetwoStore');

var _storesPagetwoStore2 = _interopRequireDefault(_storesPagetwoStore);

var _actionsPagetwoActions = require('../actions/PagetwoActions');

var _actionsPagetwoActions2 = _interopRequireDefault(_actionsPagetwoActions);

var styles = {
	row: {
		padding: 20
	},
	hfour: {
		fontFamily: 'Microsoft YaHei',
		lineHeight: 2
	}
};

var Finish = (function (_React$Component) {
	_inherits(Finish, _React$Component);

	function Finish(props) {
		_classCallCheck(this, Finish);

		_get(Object.getPrototypeOf(Finish.prototype), 'constructor', this).call(this, props);
		this.state = _storesPagetwoStore2['default'].getState();
		this.onChange = this.onChange.bind(this);
	}

	_createClass(Finish, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_storesPagetwoStore2['default'].listen(this.onChange);
			document.body.style.background = '#e8e8e8';
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_storesPagetwoStore2['default'].unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'render',
		value: function render() {
			var finishnamesbar = this.state.finishnames.map(function (finishname) {
				return _react2['default'].createElement(
					'button',
					{ className: 'btn btn-default' },
					finishname
				);
			});

			return _react2['default'].createElement(
				'div',
				{ className: 'row', style: styles.row },
				_react2['default'].createElement(
					'div',
					{ className: 'col-sm-1' },
					_react2['default'].createElement(
						'h4',
						{ style: styles.hfour },
						'已完成：',
						_react2['default'].createElement('br', null),
						_react2['default'].createElement(
							'font',
							{ style: { color: 'red' } },
							this.state.allmenuname
						),
						'个饭'
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'col-sm-11' },
					finishnamesbar
				)
			);
		}
	}]);

	return Finish;
})(_react2['default'].Component);

exports['default'] = Finish;
module.exports = exports['default'];

},{"../actions/PagetwoActions":2,"../stores/PagetwoStore":16,"react":"react","react-router":"react-router"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesPageoneStore = require('../stores/PageoneStore');

var _storesPageoneStore2 = _interopRequireDefault(_storesPageoneStore);

var _actionsPageoneActions = require('../actions/PageoneActions');

var _actionsPageoneActions2 = _interopRequireDefault(_actionsPageoneActions);

var styles = {
	fix: {
		padding: 20,
		background: '#e8e8e8'
	},
	hfour: {
		fontFamily: 'Microsoft YaHei'
	}
};

var Ingone = (function (_React$Component) {
	_inherits(Ingone, _React$Component);

	function Ingone(props) {
		_classCallCheck(this, Ingone);

		_get(Object.getPrototypeOf(Ingone.prototype), 'constructor', this).call(this, props);
		this.state = _storesPageoneStore2['default'].getState();
		this.onChange = this.onChange.bind(this);
	}

	_createClass(Ingone, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_storesPageoneStore2['default'].listen(this.onChange);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_storesPageoneStore2['default'].unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'render',
		value: function render() {
			var menunamesbar = this.state.menunames.map(function (menuname) {
				return _react2['default'].createElement(
					'button',
					{ className: 'btn btn-default', 'data-id': menuname.id },
					menuname.name
				);
			});

			return _react2['default'].createElement(
				'div',
				{ className: 'row navbar-fixed-bottom', style: styles.fix },
				_react2['default'].createElement(
					'div',
					{ className: 'col-sm-2' },
					_react2['default'].createElement(
						'h4',
						{ style: styles.hfour },
						'正在做的菜色：'
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'col-sm-10' },
					menunamesbar
				)
			);
		}
	}]);

	return Ingone;
})(_react2['default'].Component);

exports['default'] = Ingone;
module.exports = exports['default'];

},{"../actions/PageoneActions":1,"../stores/PageoneStore":15,"react":"react","react-router":"react-router"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesPagetwoStore = require('../stores/PagetwoStore');

var _storesPagetwoStore2 = _interopRequireDefault(_storesPagetwoStore);

var _actionsPagetwoActions = require('../actions/PagetwoActions');

var _actionsPagetwoActions2 = _interopRequireDefault(_actionsPagetwoActions);

var styles = {
	row: {
		marginTop: -20,
		padding: 20,
		borderBottom: '1px solid #ddd',
		background: '#fff',
		minHeight: 300
	},
	hfour: {
		fontFamily: 'Microsoft YaHei'
	},
	button: {
		marginBottom: 20,
		marginRight: 10
	}
};

var finishnames = [];

var Ingtwo = (function (_React$Component) {
	_inherits(Ingtwo, _React$Component);

	function Ingtwo(props) {
		_classCallCheck(this, Ingtwo);

		_get(Object.getPrototypeOf(Ingtwo.prototype), 'constructor', this).call(this, props);
		this.state = _storesPagetwoStore2['default'].getState();
		this.onChange = this.onChange.bind(this);
	}

	_createClass(Ingtwo, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_storesPagetwoStore2['default'].listen(this.onChange);

			var socket = io.connect();
			socket.on('menunames', function (data) {
				_actionsPagetwoActions2['default'].ingMenunamesSub(data.menunames);
			});
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_storesPagetwoStore2['default'].unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'namebuttonClick',
		value: function namebuttonClick(e) {
			var menunames = this.state.menunames;
			var name = e.target.innerHTML;
			var id = e.target.getAttribute("data-id");

			var finishname = e.target.innerHTML;
			finishnames.push(finishname);
			_actionsPagetwoActions2['default'].finishMenuname(finishnames);

			var button = document.getElementsByTagName("button");
			for (var i = 0; i < button.length; i++) {
				button[i].value = i - 1;
			}

			var menunameindex = e.target.value;
			menunames.splice(menunameindex, 1);
			_actionsPagetwoActions2['default'].ingMenunamesSub(menunames);

			var socket = io.connect();
			socket.emit('menunames', menunames);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this = this;

			var menunamesbar = this.state.menunames.map(function (menuname) {
				return _react2['default'].createElement(
					'button',
					{ className: 'btn btn-danger flipInX animated', style: styles.button, onClick: _this.namebuttonClick.bind(_this), 'data-id': menuname.id },
					menuname.name
				);
			});

			return _react2['default'].createElement(
				'div',
				{ className: 'row', style: styles.row },
				_react2['default'].createElement(
					'div',
					{ className: 'col-sm-1' },
					_react2['default'].createElement(
						'h4',
						{ style: styles.hfour },
						'进行中:'
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'col-sm-11' },
					menunamesbar
				)
			);
		}
	}]);

	return Ingtwo;
})(_react2['default'].Component);

exports['default'] = Ingtwo;
module.exports = exports['default'];

},{"../actions/PagetwoActions":2,"../stores/PagetwoStore":16,"react":"react","react-router":"react-router"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesPageoneStore = require('../stores/PageoneStore');

var _storesPageoneStore2 = _interopRequireDefault(_storesPageoneStore);

var _actionsPageoneActions = require('../actions/PageoneActions');

var _actionsPageoneActions2 = _interopRequireDefault(_actionsPageoneActions);

var styles = {
	row: {
		textAlign: 'center',
		borderBottom: '1px solid #ddd'
	},
	col: {
		marginBottom: 20
	}
};

var menunames = [];

var Menu = (function (_React$Component) {
	_inherits(Menu, _React$Component);

	function Menu(props) {
		_classCallCheck(this, Menu);

		_get(Object.getPrototypeOf(Menu.prototype), 'constructor', this).call(this, props);
		this.state = _storesPageoneStore2['default'].getState();
		this.onChange = this.onChange.bind(this);
	}

	_createClass(Menu, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_storesPageoneStore2['default'].listen(this.onChange);

			_actionsPageoneActions2['default'].getMenu();

			var socket = io.connect();
			socket.on('menunames', function (data) {
				_actionsPageoneActions2['default'].ingMenunames(data.menunames);
				menunames = data.menunames;
			});
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_storesPageoneStore2['default'].unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'turning',
		value: function turning(e) {
			var className = e.target.getAttribute('class');
			if (className == 'btn btn-info animated ') {
				var name = e.target.innerHTML;
				var id = e.target.getAttribute("data-id");
				var menuname = {};
				menuname.id = id;
				menuname.name = name;
				menunames.push(menuname);
				_actionsPageoneActions2['default'].ingMenunames(menunames);

				var socket = io.connect();
				socket.emit('menunames', menunames);
			} else {
				var id = e.target.getAttribute("data-id");
				_actionsPageoneActions2['default'].deleteMenuname(id);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this = this;

			var menubar = this.state.menu.map(function (menu) {
				return _react2['default'].createElement(
					'div',
					{ className: 'col-xs-6 col-sm-3 col-md-2 flipInX animated', style: styles.col },
					_react2['default'].createElement(
						'button',
						{ className: 'btn btn-info animated ' + _this.state.del, onClick: _this.turning, 'data-id': menu._id },
						menu.name
					)
				);
			});

			return _react2['default'].createElement(
				'div',
				{ className: 'row', style: styles.row },
				menubar
			);
		}
	}]);

	return Menu;
})(_react2['default'].Component);

exports['default'] = Menu;
module.exports = exports['default'];

},{"../actions/PageoneActions":1,"../stores/PageoneStore":15,"react":"react","react-router":"react-router"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesPageoneStore = require('../stores/PageoneStore');

var _storesPageoneStore2 = _interopRequireDefault(_storesPageoneStore);

var _actionsPageoneActions = require('../actions/PageoneActions');

var _actionsPageoneActions2 = _interopRequireDefault(_actionsPageoneActions);

var styles = {
	del: {
		marginTop: 8
	},
	title: {
		fontFamily: 'Microsoft YaHei'
	}
};

var Navbar = (function (_React$Component) {
	_inherits(Navbar, _React$Component);

	function Navbar(props) {
		_classCallCheck(this, Navbar);

		_get(Object.getPrototypeOf(Navbar.prototype), 'constructor', this).call(this, props);
		this.state = _storesPageoneStore2['default'].getState();
		this.onChange = this.onChange.bind(this);
	}

	_createClass(Navbar, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_storesPageoneStore2['default'].listen(this.onChange);

			$(document).ajaxStart(function () {
				_actionsPageoneActions2['default'].updateAjaxAnimation('fadeIn');
			});

			$(document).ajaxComplete(function () {
				setTimeout(function () {
					_actionsPageoneActions2['default'].updateAjaxAnimation('fadeOut');
				}, 750);
			});

			$('#delall').click(function () {
				var text = $(this).text();
				if (text == '删除') {
					$(this).addClass('btn-danger').removeClass('btn-default');
					$(this).text('完成');
					_actionsPageoneActions2['default'].del('del btn-danger shake');
				} else {
					$(this).addClass('btn-default').removeClass('btn-danger');
					$(this).text('删除');
					_actionsPageoneActions2['default'].del('');
				}
			});
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_storesPageoneStore2['default'].unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(event) {
			event.preventDefault();

			var menuname = document.getElementById('menuname').value.trim();

			if (menuname) {
				_actionsPageoneActions2['default'].addMenuname(menuname);
				document.getElementById('menuname').select();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'nav',
				{ className: 'navbar navbar-default', role: 'navigation' },
				_react2['default'].createElement(
					'div',
					{ className: 'container-fluid' },
					_react2['default'].createElement(
						'div',
						{ className: 'navbar-header' },
						_react2['default'].createElement(
							'button',
							{ type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#bs-example-navbar-collapse-1' },
							_react2['default'].createElement(
								'span',
								{ className: 'sr-only' },
								'Toggle navigation'
							),
							_react2['default'].createElement('span', { className: 'icon-bar' }),
							_react2['default'].createElement('span', { className: 'icon-bar' }),
							_react2['default'].createElement('span', { className: 'icon-bar' })
						),
						_react2['default'].createElement(
							'a',
							{ className: 'navbar-brand', href: '', style: styles.title },
							_react2['default'].createElement(
								'span',
								{ className: 'triangles animated ' + this.state.ajaxAnimationClass },
								_react2['default'].createElement('div', { className: 'tri invert' }),
								_react2['default'].createElement('div', { className: 'tri invert' }),
								_react2['default'].createElement('div', { className: 'tri' }),
								_react2['default'].createElement('div', { className: 'tri invert' }),
								_react2['default'].createElement('div', { className: 'tri invert' }),
								_react2['default'].createElement('div', { className: 'tri' }),
								_react2['default'].createElement('div', { className: 'tri invert' }),
								_react2['default'].createElement('div', { className: 'tri' }),
								_react2['default'].createElement('div', { className: 'tri invert' })
							),
							'        后厨传菜应用'
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
						_react2['default'].createElement(
							'ul',
							{ className: 'nav navbar-nav navbar-right' },
							_react2['default'].createElement(
								'li',
								null,
								_react2['default'].createElement(
									'form',
									{ className: 'navbar-form navbar-left', role: 'search', onSubmit: this.handleSubmit.bind(this) },
									_react2['default'].createElement(
										'div',
										{ className: 'input-group' },
										_react2['default'].createElement('input', { type: 'text', className: 'form-control', placeholder: '菜品名称', name: 'menuname', id: 'menuname' }),
										_react2['default'].createElement(
											'span',
											{ className: 'input-group-btn' },
											_react2['default'].createElement(
												'button',
												{ type: 'submit', className: 'btn btn-default' },
												'添加菜品'
											)
										)
									)
								)
							),
							_react2['default'].createElement(
								'li',
								null,
								_react2['default'].createElement(
									'button',
									{ className: 'btn btn-default', id: 'delall', style: styles.del },
									'删除'
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Navbar;
})(_react2['default'].Component);

exports['default'] = Navbar;
module.exports = exports['default'];

},{"../actions/PageoneActions":1,"../stores/PageoneStore":15,"react":"react","react-router":"react-router"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var styles = {
	nav: {
		borderRadius: 0
	},
	title: {
		fontFamily: 'Microsoft YaHei'
	}
};

var Navbartwo = (function (_React$Component) {
	_inherits(Navbartwo, _React$Component);

	function Navbartwo() {
		_classCallCheck(this, Navbartwo);

		_get(Object.getPrototypeOf(Navbartwo.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Navbartwo, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'nav',
				{ className: 'navbar navbar-inverse', role: 'navigation', style: styles.nav },
				_react2['default'].createElement(
					'div',
					{ className: 'container-fluid' },
					_react2['default'].createElement(
						'div',
						{ className: 'navbar-header' },
						_react2['default'].createElement(
							'button',
							{ type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#bs-example-navbar-collapse-1' },
							_react2['default'].createElement(
								'span',
								{ className: 'sr-only' },
								'Toggle navigation'
							),
							_react2['default'].createElement('span', { className: 'icon-bar' }),
							_react2['default'].createElement('span', { className: 'icon-bar' }),
							_react2['default'].createElement('span', { className: 'icon-bar' })
						),
						_react2['default'].createElement(
							'a',
							{ className: 'navbar-brand', href: '#', style: styles.title },
							'    开始做菜了哟'
						)
					)
				)
			);
		}
	}]);

	return Navbartwo;
})(_react2['default'].Component);

exports['default'] = Navbartwo;
module.exports = exports['default'];

},{"react":"react","react-router":"react-router"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Ingone = require('./Ingone');

var _Ingone2 = _interopRequireDefault(_Ingone);

var Pageone = (function (_React$Component) {
  _inherits(Pageone, _React$Component);

  function Pageone() {
    _classCallCheck(this, Pageone);

    _get(Object.getPrototypeOf(Pageone.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Pageone, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_Navbar2['default'], null),
        _react2['default'].createElement(_Menu2['default'], null),
        _react2['default'].createElement(_Ingone2['default'], null)
      );
    }
  }]);

  return Pageone;
})(_react2['default'].Component);

exports['default'] = Pageone;
module.exports = exports['default'];

},{"./Ingone":6,"./Menu":8,"./Navbar":9,"react":"react","react-router":"react-router"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Navbartwo = require('./Navbartwo');

var _Navbartwo2 = _interopRequireDefault(_Navbartwo);

var _Ingtwo = require('./Ingtwo');

var _Ingtwo2 = _interopRequireDefault(_Ingtwo);

var _Finish = require('./Finish');

var _Finish2 = _interopRequireDefault(_Finish);

var Pagetwo = (function (_React$Component) {
  _inherits(Pagetwo, _React$Component);

  function Pagetwo() {
    _classCallCheck(this, Pagetwo);

    _get(Object.getPrototypeOf(Pagetwo.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Pagetwo, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_Navbartwo2['default'], null),
        _react2['default'].createElement(_Ingtwo2['default'], null),
        _react2['default'].createElement(_Finish2['default'], null)
      );
    }
  }]);

  return Pagetwo;
})(_react2['default'].Component);

exports['default'] = Pagetwo;
module.exports = exports['default'];

},{"./Finish":5,"./Ingtwo":7,"./Navbartwo":10,"react":"react","react-router":"react-router"}],13:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

_reactRouter2['default'].run(_routes2['default'], _reactRouter2['default'].HistoryLocation, function (Handler) {
  _react2['default'].render(_react2['default'].createElement(Handler, null), document.getElementById('app'));
});

},{"./routes":14,"react":"react","react-router":"react-router"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsPageone = require('./components/Pageone');

var _componentsPageone2 = _interopRequireDefault(_componentsPageone);

var _componentsPagetwo = require('./components/Pagetwo');

var _componentsPagetwo2 = _interopRequireDefault(_componentsPagetwo);

exports['default'] = _react2['default'].createElement(
  _reactRouter.Route,
  { handler: _componentsApp2['default'] },
  _react2['default'].createElement(_reactRouter.Route, { path: '/', handler: _componentsPageone2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/123', handler: _componentsPagetwo2['default'] })
);
module.exports = exports['default'];

},{"./components/App":4,"./components/Pageone":11,"./components/Pagetwo":12,"react":"react","react-router":"react-router"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsPageoneActions = require('../actions/PageoneActions');

var _actionsPageoneActions2 = _interopRequireDefault(_actionsPageoneActions);

var PageoneStore = (function () {
  function PageoneStore() {
    _classCallCheck(this, PageoneStore);

    this.bindActions(_actionsPageoneActions2['default']);
    this.menunames = [];
    this.menu = [];
    this.del = '';
  }

  _createClass(PageoneStore, [{
    key: 'onIngMenunames',
    value: function onIngMenunames(menunames) {
      this.menunames = menunames;
    }
  }, {
    key: 'onGetMenuSuccess',
    value: function onGetMenuSuccess(data) {
      this.menu = data.menu;
    }
  }, {
    key: 'onDel',
    value: function onDel(data) {
      this.del = data;
    }
  }, {
    key: 'onUpdateAjaxAnimation',
    value: function onUpdateAjaxAnimation(className) {
      this.ajaxAnimationClass = className; //fadein or fadeout
    }
  }]);

  return PageoneStore;
})();

exports['default'] = _alt2['default'].createStore(PageoneStore);
module.exports = exports['default'];

},{"../actions/PageoneActions":1,"../alt":3}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsPagetwoActions = require('../actions/PagetwoActions');

var _actionsPagetwoActions2 = _interopRequireDefault(_actionsPagetwoActions);

var PagetwoStore = (function () {
  function PagetwoStore() {
    _classCallCheck(this, PagetwoStore);

    this.bindActions(_actionsPagetwoActions2['default']);
    this.menunames = [];
    this.finishnames = [];
    this.allmenuname = 0;
  }

  _createClass(PagetwoStore, [{
    key: 'onIngMenunamesSub',
    value: function onIngMenunamesSub(menunames) {
      this.menunames = menunames;
    }
  }, {
    key: 'onFinishMenuname',
    value: function onFinishMenuname(finishnames) {
      this.finishnames = finishnames;
      this.allmenuname = finishnames.length;
    }
  }]);

  return PagetwoStore;
})();

exports['default'] = _alt2['default'].createStore(PagetwoStore);
module.exports = exports['default'];

},{"../actions/PagetwoActions":2,"../alt":3}]},{},[13]);
