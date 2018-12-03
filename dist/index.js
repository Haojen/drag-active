(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DearToast"] = factory();
	else
		root["DearToast"] = factory();
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(5)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(15);
var IE8_DOM_DEFINE = __webpack_require__(16);
var toPrimitive = __webpack_require__(18);
var dP = Object.defineProperty;

exports.f = __webpack_require__(0) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DragActiveOldVersion = undefined;

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _classCallCheck2 = __webpack_require__(21);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DragActiveOldVersion = exports.DragActiveOldVersion = function DragActiveOldVersion(element, binding) {
  var _this = this;

  (0, _classCallCheck3.default)(this, DragActiveOldVersion);

  var haloX = localStorage.getItem('HALO_POSITION_X') || 0,
      haloY = localStorage.getItem('HALO_POSITION_Y') || 0;

  element.style.position = 'fixed';
  element.style.top = 0;
  element.style.left = 0;

  element.style.transform = '\n        translate(' + haloX + 'px,' + haloY + 'px) \n      ';

  element.style.webkitTransform = '\n        translate(' + haloX + 'px,' + haloY + 'px) \n      ';

  element.ontouchstart = function (ev) {
    binding.value && binding.value({ state: START });

    var _element$getBoundingC = element.getBoundingClientRect(),
        width = _element$getBoundingC.width,
        height = _element$getBoundingC.height,
        x = _element$getBoundingC.x,
        y = _element$getBoundingC.y;

    _this.elWidth = width;
    _this.elHeight = height;
    _this.widthCenter = width / 2;
    _this.heightCenter = height / 2;
    _this.moveing = false;
  };

  element.ontouchmove = function (ev) {
    event.preventDefault();
    binding.value && binding.value({ state: MOVE });

    _this.moveing = true;

    var _ev$targetTouches$ = ev.targetTouches[0],
        pageX = _ev$targetTouches$.pageX,
        pageY = _ev$targetTouches$.pageY;


    var widthCenter = _this.widthCenter,
        heightCenter = _this.heightCenter;

    pageX = pageX + widthCenter > innerWidth && innerWidth - widthCenter - Edge || pageX < widthCenter && widthCenter + Edge || pageX;
    pageY = pageY + heightCenter > innerHeight && innerHeight - heightCenter - Edge || pageY < heightCenter && heightCenter + Edge || pageY;

    element.style.transform = '\n        translate(' + (pageX.toFixed() - widthCenter) + 'px,' + (pageY.toFixed() - heightCenter) + 'px) \n      ';

    element.style.webkitTransform = '\n        translate(' + (pageX.toFixed() - widthCenter) + 'px,' + (pageY.toFixed() - heightCenter) + 'px) \n      ';
  };

  element.ontouchend = function (ev) {
    binding.value && binding.value({ state: END });

    if (!_this.moveing) return;

    var widthCenter = _this.widthCenter,
        heightCenter = _this.heightCenter;

    var _window = window,
        innerHeight = _window.innerHeight,
        innerWidth = _window.innerWidth,
        _ev$changedTouches$ = ev.changedTouches[0],
        pageX = _ev$changedTouches$.pageX,
        pageY = _ev$changedTouches$.pageY;


    pageX = pageX + widthCenter > innerWidth && innerWidth - widthCenter - Edge || pageX < widthCenter && widthCenter + Edge || pageX;
    pageY = pageY + heightCenter > innerHeight && innerHeight - heightCenter - Edge || pageY < heightCenter && heightCenter + Edge || pageY;

    pageX = pageX.toFixed();
    pageY = pageY.toFixed();

    var haloX = pageX > innerWidth / Edge ? innerWidth - _this.elWidth - Edge : Edge,
        haloY = pageY < 50 && (haloX = pageX - widthCenter) && Edge || pageY > innerHeight - 50 && (haloX = pageX - widthCenter) && innerHeight - _this.elHeight - Edge || pageY - heightCenter;

    element.style.transform = '\n        translate(' + haloX + 'px,' + haloY + 'px) \n      ';

    // cache
    localStorage.setItem('HALO_POSITION_X', haloX);
    localStorage.setItem('HALO_POSITION_Y', haloY);
  };
};

var DragActive = function () {
  function DragActive() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, DragActive);

    if (!config.el) {
      throw new Error('You must set a element, element can be a Sting ID or Element Object');
    }

    this.config = config;
    this.el = typeof el === 'string' ? document.querySelector(config.el) : config.el;

    if (config.coordinateSave) {
      config.coordinateX = localStorage.getItem('DRAG_ACTIVE_POSITION_X') || config.coordinateX;
      config.coordinateY = localStorage.getItem('DRAG_ACTIVE_POSITION_Y') || config.coordinateY;
    }

    this.el.style.position = 'fixed';
    this.el.style.top = 0;
    this.el.style.left = 0;

    this.el.style.transform = 'translate(' + config.coordinateX + 'px,' + config.coordinateY + 'px)';
    this.el.style.webkitTransform = 'translate(' + config.coordinateX + 'px,' + config.coordinateY + 'px)';
  }

  (0, _createClass3.default)(DragActive, [{
    key: 'run',
    value: function run() {
      var _this2 = this;

      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.el.ontouchstart = function (ev) {
        var _el$getBoundingClient = _this2.el.getBoundingClientRect(),
            width = _el$getBoundingClient.width,
            height = _el$getBoundingClient.height;

        _this2.elWidth = width;
        _this2.elHeight = height;
        _this2.widthCenter = width / 2;
        _this2.heightCenter = height / 2;
        _this2.moveing = false;
        callback.onDragStart && callback.onDragStart(_this2.el);
      };

      this.el.ontouchmove = function (ev) {
        event.preventDefault();

        _this2.moveing = true;

        var _ev$targetTouches$2 = ev.targetTouches[0],
            pageX = _ev$targetTouches$2.pageX,
            pageY = _ev$targetTouches$2.pageY;


        var widthCenter = _this2.widthCenter,
            heightCenter = _this2.heightCenter,
            Edge = _this2.config.offset;

        pageX = pageX + widthCenter > innerWidth && innerWidth - widthCenter - Edge || pageX < widthCenter && widthCenter + Edge || pageX;
        pageY = pageY + heightCenter > innerHeight && innerHeight - heightCenter - Edge || pageY < heightCenter && heightCenter + Edge || pageY;

        _this2.el.style.transform = '\n        translate(' + (pageX.toFixed() - widthCenter) + 'px,' + (pageY.toFixed() - heightCenter) + 'px) \n      ';

        _this2.el.style.webkitTransform = '\n        translate(' + (pageX.toFixed() - widthCenter) + 'px,' + (pageY.toFixed() - heightCenter) + 'px) \n      ';

        callback && callback.onDragMove(_this2.el);
      };

      this.el.ontouchend = function (ev) {
        if (!_this2.moveing) return;

        var _window2 = window,
            innerHeight = _window2.innerHeight,
            innerWidth = _window2.innerWidth,
            widthCenter = _this2.widthCenter,
            heightCenter = _this2.heightCenter,
            Edge = _this2.config.offset;
        var _ev$changedTouches$2 = ev.changedTouches[0],
            pageX = _ev$changedTouches$2.pageX,
            pageY = _ev$changedTouches$2.pageY;


        pageX = pageX + widthCenter > innerWidth && innerWidth - widthCenter - Edge || pageX < widthCenter && widthCenter + Edge || pageX;
        pageY = pageY + heightCenter > innerHeight && innerHeight - heightCenter - Edge || pageY < heightCenter && heightCenter + Edge || pageY;

        pageX = pageX.toFixed();
        pageY = pageY.toFixed();

        var haloX = pageX > innerWidth / 2 ? innerWidth - _this2.elWidth - _this2.config.offset : _this2.config.offset,
            haloY = pageY < 50 && (haloX = pageX - widthCenter) && Edge || pageY > innerHeight - 50 && (haloX = pageX - widthCenter) && innerHeight - _this2.elHeight - Edge || pageY - heightCenter;

        _this2.el.style.transform = 'translate(' + haloX + 'px,' + haloY + 'px)';
        _this2.el.style.webkitTransform = 'translate(' + haloX + 'px,' + haloY + 'px)';

        // cache
        localStorage.setItem('DRAG_ACTIVE_POSITION_X', haloX);
        localStorage.setItem('DRAG_ACTIVE_POSITION_Y', haloY);

        callback.onDragEnd && callback.onDragEnd(_this2.el, { coordinateX: haloX, coordinateY: haloY });
      };
    }
  }]);
  return DragActive;
}();

exports.default = DragActive;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(8);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(9), __esModule: true };

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(10);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(11);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(0), 'Object', { defineProperty: __webpack_require__(4).f });


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(3);
var ctx = __webpack_require__(12);
var hide = __webpack_require__(14);
var has = __webpack_require__(20);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(13);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(19);
module.exports = __webpack_require__(0) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(0) && !__webpack_require__(5)(function () {
  return Object.defineProperty(__webpack_require__(17)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(1);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ })
/******/ ])["default"];
});