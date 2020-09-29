/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n    constructor (nodes) {\n        this.nodes = nodes;\n    }\n\n    html (string) {\n        if (typeof string === \"string\") {\n           this.forEach((node) => {\n               node.innerHTML = string;\n           })\n        } else {\n            return this.nodes[0].innerHTML;\n        }\n    }\n\n    each(callback) {\n        this.nodes.forEach((ele) => {\n            callback(ele);\n        })\n    }\n\n    empty () {\n        debugger;\n        this.forEach((node) => {\n            node.html = \"\";\n        });\n    }\n\n    apprend (something) {\n        if (this.nodes.length === 0) return;\n\n        if (typeof something === \"object\" && !(something instanceof DOMNodeCollection)) {\n                something = $l(something);\n        }\n\n        if (typeof something === 'string') {\n            this.each ((node) => {\n                node.innerHTML += something;\n            });\n        } else if (something instanceof DOMNodeCollection) {\n            this.each((node) => {\n                something.each((child) => {\n                    node.appendChild(child);\n                });\n            });\n        }\n    }\n\n    attr(key, value) {\n        if (typeof value === 'string') {\n            this.each((node) => node.setAttribute(key, value));\n        } else {\n            return this.nodes[0].getAttribute(key);\n        }\n    }\n\n    addClass(newClass) {\n        this.each(node => node.classList.add(newClass))\n    }\n\n    removeClass(oldClass) {\n        this.each(node => node.classList.remove(oldClass))\n    }\n\n    children() {\n        let childNodes = [];\n        this.each((node) => {\n            const children = node.children;\n            childNodes = childNodes.concat(Array.from(children));\n        });\n\n        return new DOMNodeCollection (childNodes);\n    }\n\n    parent() {\n        let parents = [];\n        this.each((node) => {\n            const parent = node.parentNode;\n            parents = parents.concat(Array.from(children));\n        });\n    }\n\n\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nwindow.$l = function $l(arg) {\n    if (typeof arg === 'string') {\n        // debugger;\n        return $l.selector(arg);\n    } else if (arg instanceof HTMLElement) {\n        return new DOMNodeCollection ([arg]);\n    } else if (typeof arg === 'object') {\n        return $l.element(arg);\n    }\n\n}\n\n$l.element = function (element) {\n    if (typeof element === 'object') {\n        return new DOMNodeCollection ([element]);\n    }\n}\n\n$l.selector = function (selector) {\n    const nodes = document.querySelectorAll(selector);\n    const nodesArray = Array.from(nodes);\n    return new DOMNodeCollection (nodesArray);\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });