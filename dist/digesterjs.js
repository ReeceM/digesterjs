(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["digesterjs"] = factory();
	else
		root["digesterjs"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * generates hash strings for using to logic data things
 * 
 * @description wrapper for the Crypto API, digest method
 * @version 0.1.0
 * @author ReeceM 0_o 2019 (c)
 * @exports default
 */
var map = new Map();
/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * generates hash strings with passed strings and objects
   * 
   * @description wrapper for the Crypto API, digest method
   * @version 0.1.0
   * @author ReeceM 0_o 2019 (c)
   * @package digesterjs
   */

  /**
   * Converts the array buffer to a string hash
   * @param {ArrayBuffer} buffer the hash
   */
  hexString: function hexString(buffer) {
    var byteArray = new Uint8Array(buffer);

    var hexCodes = _toConsumableArray(byteArray).map(function (value) {
      var hexCode = value.toString(16);
      var paddedHexCode = hexCode.padStart(2, '0');
      return paddedHexCode;
    });

    return hexCodes.join('');
  },

  /**
   * Digests the string to array buffer hash
   * @param {mixed} message the string to hash
   * @param {String} algorithm sha-1 sha-256 sha-128...
   * @returns {Promise}
   */
  digestMessage: function digestMessage(message) {
    var algorithm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'SHA-1';
    var encoder = new TextEncoder();
    var data = encoder.encode(message);
    return window.crypto.subtle.digest(algorithm, data);
  },

  /**
   * Convert a given string to sha-1 hash and return it to the callbck when resolved
   * @param {String|Object} message the string to digest
   * @param {callback} callback(result, err)
   */
  __sha1Hash: function __sha1Hash(message) {
    var _this = this;

    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    this.digestMessage(message).then(function (buffer) {
      callback(_this.hexString(buffer));
      _this.buffer = {
        key: _this.hexString(buffer),
        value: message
      };
    })["catch"](function (error) {
      console.error(error);
      callback(null, error);
    });
    return this;
  },

  /**
   * Generates a sha1 hash of the payload
   * @param {mixed} payload the data to hash
   * @return {Promise} the result from the hash...
   */
  sha1: function sha1(payload) {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      _this2.__sha1Hash(payload, function (result) {
        var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (error != null) {
          reject(error);
        }

        resolve(result);
      });
    });
  },

  /**
   * The buffer optject with the keys
   * @returns {Map} buffer mapper
   */
  get buffer() {
    return this.$data.buffer;
  },

  /**
   * Setter for the buffer in the MAP
   * @param {Object}
   */
  set buffer(_ref) {
    var key = _ref.key,
        value = _ref.value;

    if (this.$data.buffer == undefined) {
      this.$data.buffer = new Map();
    }

    this.$data().buffer.set(key, value);
    return this;
  },

  $data: function $data() {
    return {
      buffer: map
    };
  }
});

/***/ })
/******/ ])["default"];
});