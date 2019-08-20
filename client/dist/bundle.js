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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/client/src/index.jsx: Unexpected token (27:4)\\n\\n\\u001b[0m \\u001b[90m 25 | \\u001b[39m    \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39msetState({\\u001b[0m\\n\\u001b[0m \\u001b[90m 26 | \\u001b[39m      categories\\u001b[33m:\\u001b[39m \\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 27 | \\u001b[39m    })\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 28 | \\u001b[39m  }\\u001b[0m\\n\\u001b[0m \\u001b[90m 29 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 30 | \\u001b[39m  getCategories(callback) {\\u001b[0m\\n    at Object.raise (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:6325:17)\\n    at Object.unexpected (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:7642:16)\\n    at Object.parseExprAtom (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:8841:20)\\n    at Object.parseExprAtom (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:3601:20)\\n    at Object.parseExprSubscripts (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:8412:23)\\n    at Object.parseMaybeUnary (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:8392:21)\\n    at Object.parseExprOps (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:8267:23)\\n    at Object.parseMaybeConditional (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:8240:23)\\n    at Object.parseMaybeAssign (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:8187:21)\\n    at Object.parseObjectProperty (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:9281:101)\\n    at Object.parseObjPropValue (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:9306:101)\\n    at Object.parseObjectMember (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:9230:10)\\n    at Object.parseObj (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:9154:25)\\n    at Object.parseExprAtom (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:8784:28)\\n    at Object.parseExprAtom (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:3601:20)\\n    at Object.parseExprSubscripts (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:8412:23)\\n    at Object.parseMaybeUnary (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:8392:21)\\n    at Object.parseExprOps (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:8267:23)\\n    at Object.parseMaybeConditional (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:8240:23)\\n    at Object.parseMaybeAssign (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:8187:21)\\n    at Object.parseExprListItem (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:9491:18)\\n    at Object.parseCallExpressionArguments (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:8621:22)\\n    at Object.parseSubscript (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:8514:29)\\n    at Object.parseSubscripts (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:8433:19)\\n    at Object.parseExprSubscripts (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:8422:17)\\n    at Object.parseMaybeUnary (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:8392:21)\\n    at Object.parseExprOps (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:8267:23)\\n    at Object.parseMaybeConditional (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:8240:23)\\n    at Object.parseMaybeAssign (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:8187:21)\\n    at Object.parseExpression (/Users/christinayee/Desktop/ALL PROJECTS/mini-apps2/budgetapp/budgetApp/node_modules/@babel/parser/lib/index.js:8135:23)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });