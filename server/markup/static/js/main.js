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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script.js */ "./script.js");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_script_js__WEBPACK_IMPORTED_MODULE_0__);
// поыыыдключать файлы сюда
// @import './название_файла.js'


/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

const bur = Array.from(document.getElementsByClassName("js--burger"));
const burBox = Array.from(document.getElementsByClassName("js--burger_item"))[0];
const strip = Array.from(document.getElementsByClassName("js--burger_strip"))[0];
const menuBox = Array.from(document.getElementsByClassName("js--menu"))[0];
const body = Array.from(document.getElementsByClassName("body"))[0];
const header = Array.from(document.getElementsByClassName("js-header"))[0];
const imagelogo = Array.from(document.getElementsByClassName("imagelogo"))[0];
const link = Array.from(document.getElementsByClassName("bg-top__link"));
bur.forEach(function (element) {
  element.addEventListener('click', function (e) {
    /* e.target.classList.toggle('checked') */
    menuBox.classList.toggle('is-active_burger');
    body.classList.toggle('overflow');
    burBox.classList.toggle('is-active');
    strip.classList.toggle('is-active_strip');
  });
});
$(window).scroll(function () {
  var top = $(this).scrollTop();

  if (top >= 100) {
    header.classList.add("header-active");
  } else if (top <= 200) {
    header.classList.remove("header-active");
  }
});
let target_date = new Date(2022, 2, 1, 0, 0, 0, 0);
; // установить дату обратного отсчета

let days, hours, minutes, seconds; // переменные для единиц времени

let clock__days = Array.from(document.getElementsByClassName("clock__days"))[0];
let clock__hours = Array.from(document.getElementsByClassName("clock__hours"))[0];
let clock__minutes = Array.from(document.getElementsByClassName("clock__minutes"))[0];
let clock__seconds = Array.from(document.getElementsByClassName("clock__seconds"))[0];
getCountdown();
setInterval(function () {
  getCountdown();
}, 1000);

function getCountdown() {
  let current_date = new Date().getTime();
  let seconds_left = (target_date - current_date) / 1000;
  days = pad(parseInt(seconds_left / 86400));
  seconds_left = seconds_left % 86400;
  hours = pad(parseInt(seconds_left / 3600));
  seconds_left = seconds_left % 3600;
  minutes = pad(parseInt(seconds_left / 60));
  seconds = pad(parseInt(seconds_left % 60));
  clock__days.innerHTML = days;
  clock__hours.innerHTML = hours;
  clock__minutes.innerHTML = minutes;
  clock__seconds.innerHTML = seconds;
}

function pad(n) {
  return (n < 10 ? '0' : '') + n;
}

const thumb = Array.from(document.getElementsByClassName("thumb-wrap"))[0];
const svg = Array.from(document.getElementsByClassName("svg"));
const img = Array.from(document.getElementsByClassName("bg-top__img"))[0];
link.forEach(function (element) {
  element.addEventListener('click', function (e) {
    /* e.target.classList.toggle('checked') */
    imagelogo.classList.toggle('is-none');
    thumb.classList.toggle('is-active-box');
    img.classList.toggle('test');
    svg.forEach(function (currentValue) {
      currentValue.classList.toggle('test2');
    });
  });
});
$('.slider-wrap').slick({
  //dots: true,
  infinite: true,
  arrows: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  loop: true,
  appendArrows: '.flafa__arrows',
  prevArrow: '<a><img class="slider-wrap__img" src="../static/img/icons/chevron_down.svg"></a>',
  nextArrow: '<a><img class="slider-wrap__img" src="../static/img/icons/next.svg"></a>',
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      infinite: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  } // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
});
$('.slider-sponsors').slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  loop: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      infinite: true
    }
  }, {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      infinite: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 2
    }
  } // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
});

/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./main.js */"./main.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHQuanMiXSwibmFtZXMiOlsiYnVyIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYnVyQm94Iiwic3RyaXAiLCJtZW51Qm94IiwiYm9keSIsImhlYWRlciIsImltYWdlbG9nbyIsImxpbmsiLCJmb3JFYWNoIiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiJCIsIndpbmRvdyIsInNjcm9sbCIsInRvcCIsInNjcm9sbFRvcCIsImFkZCIsInJlbW92ZSIsInRhcmdldF9kYXRlIiwiRGF0ZSIsImRheXMiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiY2xvY2tfX2RheXMiLCJjbG9ja19faG91cnMiLCJjbG9ja19fbWludXRlcyIsImNsb2NrX19zZWNvbmRzIiwiZ2V0Q291bnRkb3duIiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50X2RhdGUiLCJnZXRUaW1lIiwic2Vjb25kc19sZWZ0IiwicGFkIiwicGFyc2VJbnQiLCJpbm5lckhUTUwiLCJuIiwidGh1bWIiLCJzdmciLCJpbWciLCJjdXJyZW50VmFsdWUiLCJzbGljayIsImluZmluaXRlIiwiYXJyb3dzIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImxvb3AiLCJhcHBlbmRBcnJvd3MiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiZG90cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNB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QUFjLEVBQUUsQ0FOVTtBQU8xQkMsTUFBSSxFQUFFLElBUG9CO0FBUTFCSSxZQUFVLEVBQUUsQ0FDVjtBQUNFQyxjQUFVLEVBQUUsSUFEZDtBQUVFQyxZQUFRLEVBQUU7QUFDUlIsa0JBQVksRUFBRSxDQUROO0FBRVJILGNBQVEsRUFBRTtBQUZGO0FBRlosR0FEVSxFQVNWO0FBQ0VVLGNBQVUsRUFBRSxHQURkO0FBRUVDLFlBQVEsRUFBRTtBQUNSUixrQkFBWSxFQUFFLENBRE47QUFFUkgsY0FBUSxFQUFFO0FBRkY7QUFGWixHQVRVLEVBaUJWO0FBQ0VVLGNBQVUsRUFBRSxHQURkO0FBRUVDLFlBQVEsRUFBRTtBQUNSUixrQkFBWSxFQUFFO0FBRE47QUFGWixHQWpCVSxFQXVCVjtBQUNFTyxjQUFVLEVBQUUsR0FEZDtBQUVFQyxZQUFRLEVBQUU7QUFDUlIsa0JBQVksRUFBRTtBQUROO0FBRlosR0F2QlUsQ0E2QlY7QUFDQTtBQUNBO0FBL0JVO0FBUmMsQ0FBNUIsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8g0L/QvtGL0YvRi9C00LrQu9GO0YfQsNGC0Ywg0YTQsNC50LvRiyDRgdGO0LTQsFxuLy8gQGltcG9ydCAnLi/QvdCw0LfQstCw0L3QuNC1X9GE0LDQudC70LAuanMnXG5pbXBvcnQgJy4vc2NyaXB0LmpzJyIsImNvbnN0IGJ1ciA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzLS1idXJnZXJcIikpXHJcbmNvbnN0IGJ1ckJveCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzLS1idXJnZXJfaXRlbVwiKSlbMF1cclxuY29uc3Qgc3RyaXAgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJqcy0tYnVyZ2VyX3N0cmlwXCIpKVswXVxyXG5cclxuY29uc3QgbWVudUJveCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzLS1tZW51XCIpKVswXVxyXG5jb25zdCBib2R5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYm9keVwiKSlbMF1cclxuY29uc3QgaGVhZGVyID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwianMtaGVhZGVyXCIpKVswXVxyXG5jb25zdCBpbWFnZWxvZ28gPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbWFnZWxvZ29cIikpWzBdXHJcbmNvbnN0IGxpbmsgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJiZy10b3BfX2xpbmtcIikpXHJcblxyXG5idXIuZm9yRWFjaChcclxuICAgIGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgLyogZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tlZCcpICovXHJcbiAgICAgIFx0bWVudUJveC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmVfYnVyZ2VyJylcclxuICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmZsb3cnKVxyXG4gICAgICAgICAgICBidXJCb3guY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJylcclxuICAgICAgICAgICAgc3RyaXAuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlX3N0cmlwJylcclxuICAgICAgICAgICAgXHJcbiAgfSlcclxufSlcclxuXHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcbiAgaWYgKCB0b3AgPj0gMTAwICkge1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItYWN0aXZlXCIpXHJcbiAgfSBlbHNlIGlmICggdG9wIDw9IDIwMCApIHtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyLWFjdGl2ZVwiKVxyXG4gIH1cclxufSk7XHJcblxyXG5cclxuXHJcbmxldCB0YXJnZXRfZGF0ZSA9IG5ldyBEYXRlKDIwMjIsIDIsIDEsIDAsIDAsIDAsIDApOyA7IC8vINGD0YHRgtCw0L3QvtCy0LjRgtGMINC00LDRgtGDINC+0LHRgNCw0YLQvdC+0LPQviDQvtGC0YHRh9C10YLQsFxyXG5sZXQgZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHM7IC8vINC/0LXRgNC10LzQtdC90L3Ri9C1INC00LvRjyDQtdC00LjQvdC40YYg0LLRgNC10LzQtdC90LhcclxuIFxyXG5cclxubGV0IGNsb2NrX19kYXlzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvY2tfX2RheXNcIikpWzBdXHJcbmxldCBjbG9ja19faG91cnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9ja19faG91cnNcIikpWzBdXHJcbmxldCBjbG9ja19fbWludXRlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb2NrX19taW51dGVzXCIpKVswXVxyXG5sZXQgY2xvY2tfX3NlY29uZHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9ja19fc2Vjb25kc1wiKSlbMF1cclxuXHJcbmdldENvdW50ZG93bigpO1xyXG5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7IGdldENvdW50ZG93bigpOyB9LCAxMDAwKTtcclxuIFxyXG5mdW5jdGlvbiBnZXRDb3VudGRvd24oKXtcclxuIFxyXG4gIGxldCBjdXJyZW50X2RhdGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBsZXQgc2Vjb25kc19sZWZ0ID0gKHRhcmdldF9kYXRlIC0gY3VycmVudF9kYXRlKSAvIDEwMDA7XHJcbiBcclxuICAgIGRheXMgPSBwYWQoIHBhcnNlSW50KHNlY29uZHNfbGVmdCAvIDg2NDAwKSApO1xyXG4gICAgc2Vjb25kc19sZWZ0ID0gc2Vjb25kc19sZWZ0ICUgODY0MDA7XHJcbiAgICAgICAgICBcclxuICAgIGhvdXJzID0gcGFkKCBwYXJzZUludChzZWNvbmRzX2xlZnQgLyAzNjAwKSApO1xyXG4gICAgc2Vjb25kc19sZWZ0ID0gc2Vjb25kc19sZWZ0ICUgMzYwMDtcclxuICAgICAgICAgICBcclxuICAgIG1pbnV0ZXMgPSBwYWQoIHBhcnNlSW50KHNlY29uZHNfbGVmdCAvIDYwKSApO1xyXG4gICAgc2Vjb25kcyA9IHBhZCggcGFyc2VJbnQoIHNlY29uZHNfbGVmdCAlIDYwICkgKTtcclxuIFxyXG5cclxuICAgIGNsb2NrX19kYXlzLmlubmVySFRNTCA9ICBkYXlzO1xyXG4gICAgY2xvY2tfX2hvdXJzLmlubmVySFRNTCA9ICBob3VycztcclxuICAgIGNsb2NrX19taW51dGVzLmlubmVySFRNTCA9ICBtaW51dGVzO1xyXG4gICAgY2xvY2tfX3NlY29uZHMuaW5uZXJIVE1MID0gIHNlY29uZHM7XHJcbn1cclxuIFxyXG5mdW5jdGlvbiBwYWQobikge1xyXG4gICAgcmV0dXJuIChuIDwgMTAgPyAnMCcgOiAnJykgKyBuO1xyXG59XHJcblxyXG5jb25zdCB0aHVtYiA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRodW1iLXdyYXBcIikpWzBdXHJcbmNvbnN0IHN2ZyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN2Z1wiKSlcclxuY29uc3QgaW1nID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmctdG9wX19pbWdcIikpWzBdXHJcblxyXG5cclxubGluay5mb3JFYWNoKFxyXG4gIGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAvKiBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2VkJykgKi9cclxuICAgXHJcbiAgICAgIFxyXG4gICAgICBpbWFnZWxvZ28uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtbm9uZScpXHJcbiAgICAgIHRodW1iLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZS1ib3gnKVxyXG4gICAgICBpbWcuY2xhc3NMaXN0LnRvZ2dsZSgndGVzdCcpXHJcblxyXG4gICBcclxuc3ZnLmZvckVhY2goIGZ1bmN0aW9uKGN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgY3VycmVudFZhbHVlLmNsYXNzTGlzdC50b2dnbGUoJ3Rlc3QyJylcclxufVxyXG4gICk7IFxyXG5cclxuICAgICAgXHJcbn0pXHJcbn0pXHJcblxyXG5cclxuJCgnLnNsaWRlci13cmFwJykuc2xpY2soe1xyXG4gIC8vZG90czogdHJ1ZSxcclxuICBpbmZpbml0ZTogdHJ1ZSxcclxuICBhcnJvd3M6dHJ1ZSxcclxuICBzcGVlZDogMzAwLFxyXG4gIHNsaWRlc1RvU2hvdzogMyxcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICBsb29wOiB0cnVlLFxyXG4gIGFwcGVuZEFycm93czonLmZsYWZhX19hcnJvd3MnLFxyXG4gIHByZXZBcnJvdzonPGE+PGltZyBjbGFzcz1cInNsaWRlci13cmFwX19pbWdcIiBzcmM9XCIuLi9zdGF0aWMvaW1nL2ljb25zL2NoZXZyb25fZG93bi5zdmdcIj48L2E+JyxcclxuICBuZXh0QXJyb3c6JzxhPjxpbWcgY2xhc3M9XCJzbGlkZXItd3JhcF9faW1nXCIgc3JjPVwiLi4vc3RhdGljL2ltZy9pY29ucy9uZXh0LnN2Z1wiPjwvYT4nLFxyXG4gIHJlc3BvbnNpdmU6IFtcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgaW5maW5pdGU6IHRydWVcclxuICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA2MDAsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBZb3UgY2FuIHVuc2xpY2sgYXQgYSBnaXZlbiBicmVha3BvaW50IG5vdyBieSBhZGRpbmc6XHJcbiAgICAvLyBzZXR0aW5nczogXCJ1bnNsaWNrXCJcclxuICAgIC8vIGluc3RlYWQgb2YgYSBzZXR0aW5ncyBvYmplY3RcclxuICBdXHJcbn0pO1xyXG5cclxuJCgnLnNsaWRlci1zcG9uc29ycycpLnNsaWNrKHtcclxuICBhcnJvd3M6ZmFsc2UsXHJcbiAgZG90czogdHJ1ZSxcclxuICBpbmZpbml0ZTogdHJ1ZSxcclxuICBzcGVlZDogMzAwLFxyXG4gIHNsaWRlc1RvU2hvdzogNixcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICBsb29wOiB0cnVlLFxyXG4gIHJlc3BvbnNpdmU6IFtcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgaW5maW5pdGU6IHRydWVcclxuICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlXHJcbiAgICAgICBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNjAwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gWW91IGNhbiB1bnNsaWNrIGF0IGEgZ2l2ZW4gYnJlYWtwb2ludCBub3cgYnkgYWRkaW5nOlxyXG4gICAgLy8gc2V0dGluZ3M6IFwidW5zbGlja1wiXHJcbiAgICAvLyBpbnN0ZWFkIG9mIGEgc2V0dGluZ3Mgb2JqZWN0XHJcbiAgXVxyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9