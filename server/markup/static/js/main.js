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

/***/ "../../node_modules/pure-js-validator/src/validator.js":
/*!***********************************************************************************!*\
  !*** D:/test_case/builder/client/node_modules/pure-js-validator/src/validator.js ***!
  \***********************************************************************************/
/*! exports provided: Validator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validator", function() { return Validator; });
/**
* Simple Encapsulation Class template
*/
/* eslint-disable */

// console.log(root)

/**
 * Common object params
 * @type {Object}
 */
 var common = {
	publicMethods: ['validate', 'formatString', 'destroy', 'reload', 'getFormHandle', 'getFields', 'showErrors', 'hideErrors'],
	className: 'Validator'
},

	// main constructor
	Protected = function (formHandle, submitCallback, settings) {

		formHandle.JsValidator = this;

		this.settings = {

			// Validation of a current field after the events of "change", "keyup", "blur"
			onAir: true,

			// Show validation errors
			showErrors: true,

			// Auto-hide the error messages
			autoHideErrors: false,

			// Timeout auto-hide error messages
			autoHideErrorsTimeout: 2000,

			// Language error messages
			locale: 'en',

			// Object for custom error messages
			messages: {},

			// Object for custom rules
			rules: {},

			// classname for error messages
			errorClassName: 'error',

			// remove spaces from validation field values
			removeSpaces: false,

			// tracking of new elements
			autoTracking: true,

			// events list for binding
			eventsList: ['keyup', 'change', 'blur']
		};











		var self = this;

		// set handle
		this.formHandle = formHandle || null;

		// set callback
		this.submitCallback = submitCallback || null;

		// get fields and rules
		this.fields = this.getFields(this.formHandle.querySelectorAll('[data-rule]'));





		// apply custom settings
		this.applySettings(settings || {});






		this.submitCallback = this.submitCallback.bind(this);
		this._eventChangeWithDelay = this._eventChangeWithDelay.bind(this);
		this._eventChange = this._eventChange.bind(this);
		this._eventSubmit = this._eventSubmit.bind(this);



		// bind events
		this.submitCallback && this.eventsBuilder('addEventListener');







		// autotracking for new form elements
		this.settings.autoTracking && ('MutationObserver' in window) && new MutationObserver(function (mutationRecords) {

			[].forEach.call(mutationRecords, function (mutation) {
				switch (mutation.type) {
					case 'subtree':
					case 'childList':

						var reloadFlag = false,
							childsArray = [];

						[].forEach.call(mutation.addedNodes, function (targetElem) {

							childsArray = targetElem.querySelectorAll ? targetElem.querySelectorAll('*') : [];

							if (['SELECT', 'INPUT', 'TEXTAREA', 'CHECKBOX', 'RADIOBUTTON'].indexOf(targetElem.tagName) !== -1) {
								reloadFlag = true;
							};

							!reloadFlag && [].forEach.call(childsArray, function (elem) {
								if (['SELECT', 'INPUT', 'TEXTAREA', 'CHECKBOX', 'RADIOBUTTON'].indexOf(elem.tagName) !== -1) {
									reloadFlag = true;
								}
							});


						});
						reloadFlag && self.reload();
						break;
				}
			});

		}).observe(this.formHandle, {
			childList: true,
			subtree: true
		});



		return this;
	};


/**
 * Main prototype
 * @type {Object}
 */
Protected.prototype = {





	messages: {

		// English
		en: {
			required: {
				empty: 'This field is required',
				incorrect: 'Incorrect value'
			},
			notzero: {
				empty: 'Please make a selection',
				incorrect: 'Incorrect value'
			},
			integer: {
				empty: 'Enter an integer value',
				incorrect: 'Incorrect integer value'
			},
			float: {
				empty: 'Enter an float number',
				incorrect: 'Incorrect float'
			},
			min: {
				empty: 'Enter more',
				incorrect: 'Enter more'
			},
			max: {
				empty: 'Enter less',
				incorrect: 'Enter less'
			},
			between: {
				empty: 'Enter the between {0}-{1}',
				incorrect: 'Enter the between {0}-{1}'
			},
			name: {
				empty: 'Please, enter your name',
				incorrect: 'Incorrect name'
			},
			lastname: {
				empty: 'Please, enter your lastname',
				incorrect: 'Incorrect lastname'
			},
			phone: {
				empty: 'Please, enter the phone number',
				incorrect: 'Incorrect phone number'
			},
			email: {
				empty: 'Please, enter your email address',
				incorrect: 'Incorrect email address'
			},
			length: {
				empty: 'Please, Enter a minimum of {0} characters and a maximum of {1}',
				incorrect: 'Incorrect. Enter a minimum of {0} characters and a maximum of {1}'
			},
			minlength: {
				empty: 'Please, enter at least {0} characters',
				incorrect: 'You have entered less than {0} characters'
			},
			maxlength: {
				empty: 'Please, enter at maximum {0} characters',
				incorrect: 'You have entered more than {0} characters'
			},
			maxfilesize: {
				empty: 'The size of one or more selected files larger than {0} {1}',
				incorrect: 'The size of one or more selected files larger than {0} {1}'
			},
			fileextension: {
				empty: 'Select file',
				incorrect: 'One or more files have an invalid type'
			}
		}
	},

	// rules
	rules: {
		required: function (value) {
			return '' !== value;
		},
		notzero: function (value) {
			return parseInt(value, 10) > 0;
		},
		integer: function (value) {
			return new RegExp(/^[0-9]+$/gi).test(value);
		},
		float: function (value) {
			value = value.toString().replace(/\,/, '.');
			return this.integer(value) || new RegExp(/^([0-9])+(\.)([0-9]+$)/gi).test(value);
		},
		min: function (value, params) {
			if (this.float(value)) {
				return parseFloat(value) >= parseFloat(params[0]);
			}
			return parseInt(value, 10) >= parseInt(params[0], 10);
		},
		max: function (value, params) {
			if (this.float(value)) {
				return parseFloat(value) <= parseFloat(params[0]);
			}
			return parseInt(value, 10) <= parseInt(params[0], 10);
		},
		between: function (value, params) {

			params[1] = params[1] || 999999;

			if (this.float(value)) {
				return parseFloat(value) >= parseFloat(params[0]) && parseFloat(value) <= parseFloat(params[1]);
			}
			if (this.integer(value)) {
				return parseInt(value, 10) >= parseInt(params[0], 10) && parseInt(value, 10) <= parseInt(params[1], 10);
			}
			return false;
		},
		name: function (value) {
			if (value.length > 0 && value.length < 2) {
				return false;
			}
			return new RegExp(/^[a-zA-Z\sа-яА-ЯёЁ\-]+$/g).test(value);
		},
		lastname: function (value) {
			return this.name(value);
		},
		phone: function (value) {
			if (value.replace(/[^0-9]+/gi, '').match(/[0-9]+/gi) && value.replace(/[^0-9]+/gi, '').match(/[0-9]+/gi)[0].length < 6) {
				return false;
			}
			return new RegExp(/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/g).test(value);
		},
		email: function (value) {
			return new RegExp(/^(("[\w-\s]+")|([\w\-]+(?:\.[\w\-]+)*)|("[\w-\s]+")([\w\-]+(?:\.[\w\-]+)*))(@((?:[\w\-]+\.)*\w[\w\-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(value);
		},
		length: function (value, params) {
			return this.between(value.replace(/\s{2,}/g, ' ').length, params);
		},
		maxlength: function (value, params) {
			return this.max(value.replace(/\s{2,}/g, ' ').length, params);
		},
		minlength: function (value, params) {
			return this.min(value.replace(/\s{2,}/g, ' ').length, params);
		},
		maxfilesize: function (value, params) {
			var i,
				l = value.length,
				unitsOffset = 1;

			switch (params[1].toLowerCase()) {
				case 'b':
					unitsOffset = 1;
					break;

				case 'kb':
					unitsOffset = 1024;
					break;

				case 'mb':
					unitsOffset = 1048576;
					break;

				case 'gb':
					unitsOffset = 1073741824;
					break;

				case 'tb':
					unitsOffset = 1099511627776;
					break;
			}

			for (i = 0; i < l; i += 1) {
				if (parseFloat(value[i]) > (parseFloat(params[0]) * unitsOffset)) {
					return false;
				}
			}

			return true;
		},
		fileextension: function (value, params) {
			var i,
				a,
				l = params.length,
				b = value.length,
				cmpResC = 0;

			for (i = 0; i < l; i += 1) {
				for (a = 0; a < b; a += 1) {
					if (params[i] === value[a].split('.').pop()) {
						cmpResC += 1;
					}
				}
			}

			return value.length === cmpResC ? true : false;
		}
	},

	orderFields: function (attrName, attrValue) {

		var self = this,
			retObj = {};

		!!attrName && !!attrValue && Object.keys(this.fields).forEach(function (field) {
			if (self.fields[field].handle[attrName] && self.fields[field].handle[attrName] === attrValue) {
				retObj[field] = self.fields[field];
			}
		});

		return retObj;
	},
	_eventSubmit: function (e) {

		e.preventDefault();

		//hide errors
		this.hideErrors(false, true);

		//show errors if validation failure
		!this.validate() && this.showErrors();

		//callback
		(this.submitCallback(this.errors || null, this.errors ? false : true) === true) && this.formHandle.submit();
	},
	_eventChange: function (e) {

		var radioBtns,
			self = this;

		//remove spaces
		if (this.settings.removeSpaces && new RegExp(/\s{2,}/g).test(e.target.value)) {
			e.target.value = e.target.value.replace(/\s{2,}/g, ' ');
		}

		//if is radio buttons
		if (e.target.type === 'radio') {

			//get radio groupe
			radioBtns = this.orderFields('name', e.target.name);

			Object.keys(radioBtns).forEach(function (btn) {
				self.hideErrors(radioBtns[btn].handle);
			});

		} else {
			//hide errors for this
			this.hideErrors(e.target);
		}




		//validate and show errors for this
		if (!this.validate(e.target)) {

			this.showErrors(e.target);
			!this.settings.showErrors && this.submitCallback(this.errors, false);

		}
	},
	_eventChangeWithDelay: function (e) {
		var self = this;

		if (this.intervalID) {
			clearTimeout(this.intervalID);
		}

		this.intervalID = setTimeout(function () {
			self._eventChange.apply(self, [e]);
		}, 400);
	},


	applySettings: function (settings) {

		var self = this;

		// apply rules
		settings.rules && Object.keys(settings.rules).forEach(function (ruleName) {
			self.rules[ruleName] = settings.rules[ruleName];
		});

		// apply messages
		settings.messages && Object.keys(settings.messages).forEach(function (locale) {
			Object.keys(settings.messages[locale]).forEach(function (ruleName) {
				Object.keys(settings.messages[locale][ruleName]).forEach(function (param) {
					self.settings.messages[locale] = self.settings.messages[locale] || {};
					self.settings.messages[locale][ruleName] = self.settings.messages[locale][ruleName] || {};
					self.settings.messages[locale][ruleName][param] = settings.messages[locale][ruleName][param];
				});
			});
		});

		// apply other settings
		Object.keys(settings).forEach(function (param) {
			self.settings[param] = settings[param];
		});

		return this;
	},


	getFields: function (fields) {

		var retData = {},
			rules = [],
			params = [];

		fields = fields || this.formHandle.querySelectorAll('[data-rule]');

		// each fields with data-rule attribute
		Object.keys(fields).forEach(function (fieldIndex) {

			rules = fields[fieldIndex].getAttribute('data-rule').split('|');

			Object.keys(rules).forEach(function (ruleIndex) {

				// parse rule
				if (rules[ruleIndex].match(/-/gi)) {

					params = rules[ruleIndex].split('-');
					rules[ruleIndex] = params[0];
					params = params.splice(1);

					rules[ruleIndex] = [rules[ruleIndex], params];
				} else {
					rules[ruleIndex] = [rules[ruleIndex], []];
				}
			});

			retData[fieldIndex] = {
				name: fields[fieldIndex].getAttribute('name'),
				rules: rules,
				defaultValue: fields[fieldIndex].getAttribute('data-default'),
				handle: fields[fieldIndex],
				intervalID: null
			};
		});

		return retData;
	},

	validate: function (validationField) {

		var self = this,
			fields = validationField ? this.getFields([validationField]) : this.fields,
			result,
			ruleName,
			params,
			defaultValue,
			value,
			message,
			messageType = null;

		this.errors = this.errors ? null : this.errors;

		Object.keys(fields).forEach(function (n) {

			result = true;

			// loop rules of this field
			fields[n].rules && Object.keys(fields[n].rules).forEach(function (ruleIndex) {

				// set rule data
				ruleName = fields[n].rules[ruleIndex][0];
				params = fields[n].rules[ruleIndex][1];
				defaultValue = fields[n].defaultValue;
				value = fields[n].handle.value;


				switch (fields[n].handle.type) {

					case 'checkbox':
						!fields[n].handle.checked && (value = '');
						break;

					case 'radio':
						// get radio groupe
						var radioBtns = self.orderFields('name', fields[n].handle.name),
							checked = false;

						Object.keys(radioBtns).forEach(function (i) {
							radioBtns[i].handle.checked && (checked = true);
						});

						if (!checked) {

							// add an error to one element
							Object.keys(radioBtns).forEach(function (i) {
								try {
									message = self.settings.messages[self.settings.locale][ruleName].empty;
								} catch (e) {
									message = self.messages[self.settings.locale][ruleName].empty;
								}
							});

							// set value as for empty rules
							value = '';
						}
						break;

					case 'file':

						// if the files were selected
						if (fields[n].handle.files && fields[n].handle.files.length) {

							value = [];

							Object.keys(fields[n].handle.files).forEach(function (fileIndex) {

								switch (ruleName) {
									case 'maxfilesize':
										value.push(fields[n].handle.files[fileIndex].size);
										break;

									case 'fileextension':
										value.push(fields[n].handle.files[fileIndex].name);
										break;
								}
							});

						}

						break;
				}


				if (result && !(value === '' && !fields[n].rules.join('|').match(/\|{0,1}required\|{0,1}/))) {

					// if exist default value and value is eq default
					if (result && defaultValue && value !== defaultValue) {

						result = false;
						messageType = 'incorrect';

						// if default value not exist
					} else if (result && self.rules[ruleName] && !self.rules[ruleName](value, params)) {

						// set message to empty data
						if ('' === value) {
							result = false;
							messageType = 'empty';

							// set message to incorrect data
						} else {
							result = false;
							messageType = 'incorrect';
						}
					}

					if (result) {
						self.hideErrors(fields[n].handle, true);

					} else {

						// define errors stack if not exist
						self.errors = self.errors || {};

						// append error messages
						if (ruleName === 'required' && fields[n].rules[1] && fields[n].rules[1][0]) {
							ruleName = fields[n].rules[1][0];
							messageType = 'empty';
						}

						try {
							try {
								message = self.settings.messages[self.settings.locale][ruleName][messageType];
							} catch (e) {
								message = self.messages[self.settings.locale][ruleName][messageType];
							}
						} catch (e) {
							ruleName = 'required';
							message = self.messages[self.settings.locale][ruleName][messageType];
						}

						// push value into params if params is empty
						!params.length && params.push(value);

						// add errors
						self.errors[n] = {
							name: fields[n].name,
							errorText: self.formatString(message, params)
						};

						// call callback if exist
						if (!self.submitCallback) {
							self.errors[n].handle = fields[n].handle;
						}
					}
				}
			});
		});


		// run callback if callback is exists and not errors or return error data object
		if (this.submitCallback) {
			return (this.errors) ? false : true;
		}

		return this.errors || true;

	},


	hideErrors: function (validationField, removeClass) {

		var self = this,
			errorDiv;


		Object.keys(this.fields).forEach(function (n) {
			if ((validationField && validationField === self.fields[n].handle) || !validationField) {

				errorDiv = self.fields[n].handle.nextElementSibling;

				// remove class error
				removeClass && self.fields[n].handle.classList.remove(self.settings.errorClassName);

				// remove error element
				errorDiv && (errorDiv.getAttribute('data-type') === 'validator-error') && errorDiv.parentNode.removeChild(errorDiv);
			}
		});

	},

	showErrors: function (validationField) {

		var self = this,
			errorDiv,
			insertNodeError = function (refNode, errorObj) {

				// set error class
				refNode.classList.add(self.settings.errorClassName);

				// check to error div element exist
				if (refNode.nextElementSibling && refNode.nextElementSibling.getAttribute('data-type') === 'validator-error') {
					return;
				}

				// insert error element
				if (self.settings.showErrors) {
					errorDiv = document.createElement('div');
					errorDiv.setAttribute('class', self.settings.errorClassName);
					errorDiv.setAttribute('data-type', 'validator-error');
					errorDiv.innerHTML = errorObj.errorText;
					refNode.parentNode.insertBefore(errorDiv, refNode.nextSibling);
				}
			};




		Object.keys(this.errors).forEach(function (r) {

			// show error to specified field
			if (validationField) {

				Object.keys(self.fields).forEach(function (n) {
					(self.fields[n].handle.getAttribute('name') === validationField.getAttribute('name')) && insertNodeError(self.fields[n].handle, self.errors[r]);
				});

				// show error to all fields
			} else {
				if (r === '0' || (r > 0 && self.fields[r].name !== self.fields[r - 1].name)) {
					insertNodeError(self.fields[r].handle, self.errors[r]);
				}
			}
		});





		// auto hide errors
		if (this.settings.autoHideErrors) {

			// for all fields
			if (!validationField) {

				if (this.intervalID) {
					clearTimeout(this.intervalID);
				}

				this.intervalID = setTimeout(function () {
					self.intervalID = null;
					self.hideErrors(false);
				}, this.settings.autoHideErrorsTimeout);

				// for current field
			} else {

				if (validationField.intervalID) {
					clearTimeout(validationField.intervalID);
				}

				if (!this.intervalID) {
					validationField.intervalID = setTimeout(function () {
						validationField.intervalID = null;
						self.hideErrors(validationField);
					}, this.settings.autoHideErrorsTimeout);
				}
			}
		}
	},


	/*
	* Get Form handle
	* @return {element} - Form handle
	*/
	getFormHandle: function () {
		return this.formHandle;
	},

	/*
	* Formatting string. Replace string
	* @param {string} string - Source string. Example: "{0} age {1} years."
	* @param {array} params - An array of values​​, which will be replaced with markers. Example: ['Bob', 36]
	* @return {string} - Formatted string with replacing markers. Example "Bob age 36 years"
	*/
	formatString: function (string, params) {
		return string.replace(/\{(\d+)\}/gi, function (match, number) {
			return (match && params[number]) ? params[number] : '';
		});
	},

	/*
	* Destroy validator
	*/
	destroy: function () {

		//hide errors
		this.hideErrors(false, true);

		// remove events
		this.eventsBuilder('removeEventListener');

	},

	/*
	* Reload validator.
	* Example 1: reload(function (err, res) {...}, {autoHideErrors: false})
	* Example 2: reload({autoHideErrors: false})
	* @param {function} [submitCallback] - Submit callback function
	* @param {object} [settings] - Settings object
	*/
	reload: function (submitCallback, settings) {

		this.destroy();

		//set variables
		switch (arguments.length) {

			case 2:
				this.submitCallback = submitCallback;
				this.settings = settings;
				break;

			case 1:
				this.settings = submitCallback;
				break;
		}

		this.fields = this.getFields(this.formHandle.querySelectorAll('[data-rule]'));
		this.submitCallback && this.eventsBuilder('addEventListener');
		this.applySettings(settings || {});

	},
	eventsBuilder: function (actionName) {

		var self = this;


		this.formHandle[actionName]('submit', this._eventSubmit);

		// air mode
		this.settings.onAir && Object.keys(this.fields).forEach(function (field) {

			[].forEach.call(self.settings.eventsList, function (event) {

				if (event === 'keyup') {
					self.fields[field].handle[actionName](event, self._eventChangeWithDelay);
				} else {
					self.fields[field].handle[actionName](event, self._eventChange);
				}
			});
		});


	}
};

/**
 * Encapsulation
 * @return {Object} - this handle
 */
// console.log(root, common.className)
const Validator = function () {

	function construct(constructor, args) {

		function Class() {
			return constructor.apply(this, args);
		}
		Class.prototype = constructor.prototype;
		return new Class();
	}

	var original = construct(Protected, arguments),
		Publicly = function () { };

	Publicly.prototype = {};
	[].forEach.call(common.publicMethods, function (member) {
		Publicly.prototype[member] = function () {
			return original[member].apply(original, arguments);
		};
	});

	return new Publicly(arguments);
};
	// return root


/***/ }),

/***/ "./clock.js":
/*!******************!*\
  !*** ./clock.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

let target_date = new Date(2022, 2, 1, 0, 0, 0, 0);
let days, hours, minutes, seconds;
let clock__days = Array.from(document.getElementsByClassName("js-days"))[0];
let clock__hours = Array.from(document.getElementsByClassName("js-hours"))[0];
let clock__minutes = Array.from(document.getElementsByClassName("js-minutes"))[0];
let clock__seconds = Array.from(document.getElementsByClassName("js-seconds"))[0];
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

/***/ }),

/***/ "./form.js":
/*!*****************!*\
  !*** ./form.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pure_js_validator_src_validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pure-js-validator/src/validator.js */ "../../node_modules/pure-js-validator/src/validator.js");
// импортируем валиадтор
 // когда дом готов

document.addEventListener('DOMContentLoaded', () => {
  // ищем все формы
  const forms = Array.from(document.getElementsByClassName('js-form-ajax')); // идем по ним

  forms.forEach(form => {
    // создаем новый инстанс валидатора, подвязав в него нашу форму
    const validator = new pure_js_validator_src_validator_js__WEBPACK_IMPORTED_MODULE_0__["Validator"](form, async function (err, is_valid) {
      console.log(is_valid); // если форма валидна

      if (is_valid) {
        // берем метод с дата-атрибута
        const method = form.dataset.method; // берем ссылку с дата-атрибута

        const action = form.dataset.action; // получаем все с полей в виде форм даты

        const body = new FormData(form); // преобразовываем в JSON, смотря, что хочет сервер

        const value = Object.fromEntries(body.entries()); // создаем запрос на тот action, что нашли

        const response = await fetch(action, {
          // с тем методом, что нашли. Сокращенная запись method
          method: method,
          // так надо
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          // превращаем наш обьект с данными в строку. так надо
          body: JSON.stringify(value)
        }); // если все ок

        if (response.ok) {
          // проверяем что нам ответил сервер
          let result = await response.json();
          form.reset();
        }
      }
    });
  });
});

/***/ }),

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
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ "./form.js");
/* harmony import */ var _slick_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slick.js */ "./slick.js");
/* harmony import */ var _slick_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slick_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scroll.js */ "./scroll.js");
/* harmony import */ var _scroll_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scroll_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _video_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./video.js */ "./video.js");
/* harmony import */ var _video_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_video_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _clock_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clock.js */ "./clock.js");
/* harmony import */ var _clock_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_clock_js__WEBPACK_IMPORTED_MODULE_5__);
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
bur.forEach(function (element) {
  element.addEventListener('click', function (e) {
    /* e.target.classList.toggle('checked') */
    menuBox.classList.toggle('is-active_burger');
    body.classList.toggle('overflow');
    burBox.classList.toggle('is-active');
    strip.classList.toggle('is-active_strip');
  });
});

/***/ }),

/***/ "./scroll.js":
/*!*******************!*\
  !*** ./scroll.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

const scrollup = Array.from(document.getElementsByClassName("js-scrollup"))[0];
const header = Array.from(document.getElementsByClassName("js-header"))[0];
$(window).scroll(function () {
  var top = $(this).scrollTop();

  if (top >= 100) {
    header.classList.add("header-active");
  } else if (top <= 200) {
    header.classList.remove("header-active");
  }

  if (top >= 200) {
    scrollup.classList.add("is-active-box");
  } else if (top <= 300) {
    scrollup.classList.remove("is-active-box");
  }
});

/***/ }),

/***/ "./slick.js":
/*!******************!*\
  !*** ./slick.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.js-slider').slick({
  //dots: true,
  infinite: true,
  arrows: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  loop: true,
  appendArrows: '.js-arrows',
  prevArrow: '<a><img class="slider-wrap__arrows" src="../static/img/icons/chevron_down.svg"></a>',
  nextArrow: '<a><img class="slider-wrap__arrows" src="../static/img/icons/next.svg"></a>',
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      infinite: true
    }
  }, {
    breakpoint: 900,
    settings: {
      slidesToShow: 2
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
$('.js-sponsors').slick({
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

/***/ "./video.js":
/*!******************!*\
  !*** ./video.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

const video = Array.from(document.getElementsByClassName("js-video"))[0];
const svg = Array.from(document.getElementsByClassName("js-svg"));
const pl = Array.from(document.getElementsByClassName("js-pl"))[0];
const jimgBg = Array.from(document.getElementsByClassName("js-imgBg"))[0];
const play = Array.from(document.getElementsByClassName("js-play"));
play.forEach(function (element) {
  element.addEventListener('click', function (e) {
    /* e.target.classList.toggle('checked') */
    jimgBg.classList.toggle('is-none');
    video.classList.toggle('is-active-box');
    pl.classList.toggle('fill-none');
    svg.forEach(function (currentValue) {
      currentValue.classList.toggle('fill-add');
    });
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0Q6L3Rlc3RfY2FzZS9idWlsZGVyL2NsaWVudC9ub2RlX21vZHVsZXMvcHVyZS1qcy12YWxpZGF0b3Ivc3JjL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9jbG9jay5qcyIsIndlYnBhY2s6Ly8vLi9mb3JtLmpzIiwid2VicGFjazovLy8uL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zbGljay5qcyIsIndlYnBhY2s6Ly8vLi92aWRlby5qcyJdLCJuYW1lcyI6WyJ0YXJnZXRfZGF0ZSIsIkRhdGUiLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImNsb2NrX19kYXlzIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xvY2tfX2hvdXJzIiwiY2xvY2tfX21pbnV0ZXMiLCJjbG9ja19fc2Vjb25kcyIsImdldENvdW50ZG93biIsInNldEludGVydmFsIiwiY3VycmVudF9kYXRlIiwiZ2V0VGltZSIsInNlY29uZHNfbGVmdCIsInBhZCIsInBhcnNlSW50IiwiaW5uZXJIVE1MIiwibiIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JtcyIsImZvckVhY2giLCJmb3JtIiwidmFsaWRhdG9yIiwiVmFsaWRhdG9yIiwiZXJyIiwiaXNfdmFsaWQiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kIiwiZGF0YXNldCIsImFjdGlvbiIsImJvZHkiLCJGb3JtRGF0YSIsInZhbHVlIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwicmVzcG9uc2UiLCJmZXRjaCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJyZXN1bHQiLCJqc29uIiwicmVzZXQiLCJidXIiLCJidXJCb3giLCJzdHJpcCIsIm1lbnVCb3giLCJlbGVtZW50IiwiZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInNjcm9sbHVwIiwiaGVhZGVyIiwiJCIsIndpbmRvdyIsInNjcm9sbCIsInRvcCIsInNjcm9sbFRvcCIsImFkZCIsInJlbW92ZSIsInNsaWNrIiwiaW5maW5pdGUiLCJhcnJvd3MiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwibG9vcCIsImFwcGVuZEFycm93cyIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJkb3RzIiwidmlkZW8iLCJzdmciLCJwbCIsImppbWdCZyIsInBsYXkiLCJjdXJyZW50VmFsdWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFD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QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjs7QUFFQTtBQUNBOzs7QUFHQSx5RUFBeUUsSUFBSSxXQUFXLElBQUk7O0FBRTVGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxNQUFNOztBQUVOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFOzs7QUFHRjs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsSUFBSTtBQUNK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USxDQUFDQyxzQkFBVCxDQUFnQyxPQUFoQyxDQUFYLEVBQXFELENBQXJELENBQVg7QUFDQSxNQUFNMkUsTUFBTSxHQUFHOUUsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsVUFBaEMsQ0FBWCxFQUF3RCxDQUF4RCxDQUFmO0FBQ0EsTUFBTTRFLElBQUksR0FBRy9FLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxRQUFRLENBQUNDLHNCQUFULENBQWdDLFNBQWhDLENBQVgsQ0FBYjtBQUdBNEUsSUFBSSxDQUFDN0QsT0FBTCxDQUNFLFVBQVM4QixPQUFULEVBQWtCO0FBQ2xCQSxTQUFPLENBQUNoQyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFTaUMsQ0FBVCxFQUFZO0FBQzFDO0FBR0E2QixVQUFNLENBQUM1QixTQUFQLENBQWlCQyxNQUFqQixDQUF3QixTQUF4QjtBQUNBd0IsU0FBSyxDQUFDekIsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUIsZUFBdkI7QUFDQTBCLE1BQUUsQ0FBQzNCLFNBQUgsQ0FBYUMsTUFBYixDQUFvQixXQUFwQjtBQUdOeUIsT0FBRyxDQUFDMUQsT0FBSixDQUFhLFVBQVM4RCxZQUFULEVBQXVCO0FBQzdCQSxrQkFBWSxDQUFDOUIsU0FBYixDQUF1QkMsTUFBdkIsQ0FBOEIsVUFBOUI7QUFDTixLQUZEO0FBTUMsR0FmQztBQWdCRCxDQWxCRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKipcbiogU2ltcGxlIEVuY2Fwc3VsYXRpb24gQ2xhc3MgdGVtcGxhdGVcbiovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vLyBjb25zb2xlLmxvZyhyb290KVxuXG4vKipcbiAqIENvbW1vbiBvYmplY3QgcGFyYW1zXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG4gdmFyIGNvbW1vbiA9IHtcblx0cHVibGljTWV0aG9kczogWyd2YWxpZGF0ZScsICdmb3JtYXRTdHJpbmcnLCAnZGVzdHJveScsICdyZWxvYWQnLCAnZ2V0Rm9ybUhhbmRsZScsICdnZXRGaWVsZHMnLCAnc2hvd0Vycm9ycycsICdoaWRlRXJyb3JzJ10sXG5cdGNsYXNzTmFtZTogJ1ZhbGlkYXRvcidcbn0sXG5cblx0Ly8gbWFpbiBjb25zdHJ1Y3RvclxuXHRQcm90ZWN0ZWQgPSBmdW5jdGlvbiAoZm9ybUhhbmRsZSwgc3VibWl0Q2FsbGJhY2ssIHNldHRpbmdzKSB7XG5cblx0XHRmb3JtSGFuZGxlLkpzVmFsaWRhdG9yID0gdGhpcztcblxuXHRcdHRoaXMuc2V0dGluZ3MgPSB7XG5cblx0XHRcdC8vIFZhbGlkYXRpb24gb2YgYSBjdXJyZW50IGZpZWxkIGFmdGVyIHRoZSBldmVudHMgb2YgXCJjaGFuZ2VcIiwgXCJrZXl1cFwiLCBcImJsdXJcIlxuXHRcdFx0b25BaXI6IHRydWUsXG5cblx0XHRcdC8vIFNob3cgdmFsaWRhdGlvbiBlcnJvcnNcblx0XHRcdHNob3dFcnJvcnM6IHRydWUsXG5cblx0XHRcdC8vIEF1dG8taGlkZSB0aGUgZXJyb3IgbWVzc2FnZXNcblx0XHRcdGF1dG9IaWRlRXJyb3JzOiBmYWxzZSxcblxuXHRcdFx0Ly8gVGltZW91dCBhdXRvLWhpZGUgZXJyb3IgbWVzc2FnZXNcblx0XHRcdGF1dG9IaWRlRXJyb3JzVGltZW91dDogMjAwMCxcblxuXHRcdFx0Ly8gTGFuZ3VhZ2UgZXJyb3IgbWVzc2FnZXNcblx0XHRcdGxvY2FsZTogJ2VuJyxcblxuXHRcdFx0Ly8gT2JqZWN0IGZvciBjdXN0b20gZXJyb3IgbWVzc2FnZXNcblx0XHRcdG1lc3NhZ2VzOiB7fSxcblxuXHRcdFx0Ly8gT2JqZWN0IGZvciBjdXN0b20gcnVsZXNcblx0XHRcdHJ1bGVzOiB7fSxcblxuXHRcdFx0Ly8gY2xhc3NuYW1lIGZvciBlcnJvciBtZXNzYWdlc1xuXHRcdFx0ZXJyb3JDbGFzc05hbWU6ICdlcnJvcicsXG5cblx0XHRcdC8vIHJlbW92ZSBzcGFjZXMgZnJvbSB2YWxpZGF0aW9uIGZpZWxkIHZhbHVlc1xuXHRcdFx0cmVtb3ZlU3BhY2VzOiBmYWxzZSxcblxuXHRcdFx0Ly8gdHJhY2tpbmcgb2YgbmV3IGVsZW1lbnRzXG5cdFx0XHRhdXRvVHJhY2tpbmc6IHRydWUsXG5cblx0XHRcdC8vIGV2ZW50cyBsaXN0IGZvciBiaW5kaW5nXG5cdFx0XHRldmVudHNMaXN0OiBbJ2tleXVwJywgJ2NoYW5nZScsICdibHVyJ11cblx0XHR9O1xuXG5cblxuXG5cblxuXG5cblxuXG5cblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBzZXQgaGFuZGxlXG5cdFx0dGhpcy5mb3JtSGFuZGxlID0gZm9ybUhhbmRsZSB8fCBudWxsO1xuXG5cdFx0Ly8gc2V0IGNhbGxiYWNrXG5cdFx0dGhpcy5zdWJtaXRDYWxsYmFjayA9IHN1Ym1pdENhbGxiYWNrIHx8IG51bGw7XG5cblx0XHQvLyBnZXQgZmllbGRzIGFuZCBydWxlc1xuXHRcdHRoaXMuZmllbGRzID0gdGhpcy5nZXRGaWVsZHModGhpcy5mb3JtSGFuZGxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJ1bGVdJykpO1xuXG5cblxuXG5cblx0XHQvLyBhcHBseSBjdXN0b20gc2V0dGluZ3Ncblx0XHR0aGlzLmFwcGx5U2V0dGluZ3Moc2V0dGluZ3MgfHwge30pO1xuXG5cblxuXG5cblxuXHRcdHRoaXMuc3VibWl0Q2FsbGJhY2sgPSB0aGlzLnN1Ym1pdENhbGxiYWNrLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5fZXZlbnRDaGFuZ2VXaXRoRGVsYXkgPSB0aGlzLl9ldmVudENoYW5nZVdpdGhEZWxheS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuX2V2ZW50Q2hhbmdlID0gdGhpcy5fZXZlbnRDaGFuZ2UuYmluZCh0aGlzKTtcblx0XHR0aGlzLl9ldmVudFN1Ym1pdCA9IHRoaXMuX2V2ZW50U3VibWl0LmJpbmQodGhpcyk7XG5cblxuXG5cdFx0Ly8gYmluZCBldmVudHNcblx0XHR0aGlzLnN1Ym1pdENhbGxiYWNrICYmIHRoaXMuZXZlbnRzQnVpbGRlcignYWRkRXZlbnRMaXN0ZW5lcicpO1xuXG5cblxuXG5cblxuXG5cdFx0Ly8gYXV0b3RyYWNraW5nIGZvciBuZXcgZm9ybSBlbGVtZW50c1xuXHRcdHRoaXMuc2V0dGluZ3MuYXV0b1RyYWNraW5nICYmICgnTXV0YXRpb25PYnNlcnZlcicgaW4gd2luZG93KSAmJiBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25SZWNvcmRzKSB7XG5cblx0XHRcdFtdLmZvckVhY2guY2FsbChtdXRhdGlvblJlY29yZHMsIGZ1bmN0aW9uIChtdXRhdGlvbikge1xuXHRcdFx0XHRzd2l0Y2ggKG11dGF0aW9uLnR5cGUpIHtcblx0XHRcdFx0XHRjYXNlICdzdWJ0cmVlJzpcblx0XHRcdFx0XHRjYXNlICdjaGlsZExpc3QnOlxuXG5cdFx0XHRcdFx0XHR2YXIgcmVsb2FkRmxhZyA9IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRjaGlsZHNBcnJheSA9IFtdO1xuXG5cdFx0XHRcdFx0XHRbXS5mb3JFYWNoLmNhbGwobXV0YXRpb24uYWRkZWROb2RlcywgZnVuY3Rpb24gKHRhcmdldEVsZW0pIHtcblxuXHRcdFx0XHRcdFx0XHRjaGlsZHNBcnJheSA9IHRhcmdldEVsZW0ucXVlcnlTZWxlY3RvckFsbCA/IHRhcmdldEVsZW0ucXVlcnlTZWxlY3RvckFsbCgnKicpIDogW107XG5cblx0XHRcdFx0XHRcdFx0aWYgKFsnU0VMRUNUJywgJ0lOUFVUJywgJ1RFWFRBUkVBJywgJ0NIRUNLQk9YJywgJ1JBRElPQlVUVE9OJ10uaW5kZXhPZih0YXJnZXRFbGVtLnRhZ05hbWUpICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0XHRcdHJlbG9hZEZsYWcgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0XHRcdCFyZWxvYWRGbGFnICYmIFtdLmZvckVhY2guY2FsbChjaGlsZHNBcnJheSwgZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoWydTRUxFQ1QnLCAnSU5QVVQnLCAnVEVYVEFSRUEnLCAnQ0hFQ0tCT1gnLCAnUkFESU9CVVRUT04nXS5pbmRleE9mKGVsZW0udGFnTmFtZSkgIT09IC0xKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZWxvYWRGbGFnID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0pO1xuXG5cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0cmVsb2FkRmxhZyAmJiBzZWxmLnJlbG9hZCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0fSkub2JzZXJ2ZSh0aGlzLmZvcm1IYW5kbGUsIHtcblx0XHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRcdHN1YnRyZWU6IHRydWVcblx0XHR9KTtcblxuXG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXG4vKipcbiAqIE1haW4gcHJvdG90eXBlXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5Qcm90ZWN0ZWQucHJvdG90eXBlID0ge1xuXG5cblxuXG5cblx0bWVzc2FnZXM6IHtcblxuXHRcdC8vIEVuZ2xpc2hcblx0XHRlbjoge1xuXHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0ZW1wdHk6ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyxcblx0XHRcdFx0aW5jb3JyZWN0OiAnSW5jb3JyZWN0IHZhbHVlJ1xuXHRcdFx0fSxcblx0XHRcdG5vdHplcm86IHtcblx0XHRcdFx0ZW1wdHk6ICdQbGVhc2UgbWFrZSBhIHNlbGVjdGlvbicsXG5cdFx0XHRcdGluY29ycmVjdDogJ0luY29ycmVjdCB2YWx1ZSdcblx0XHRcdH0sXG5cdFx0XHRpbnRlZ2VyOiB7XG5cdFx0XHRcdGVtcHR5OiAnRW50ZXIgYW4gaW50ZWdlciB2YWx1ZScsXG5cdFx0XHRcdGluY29ycmVjdDogJ0luY29ycmVjdCBpbnRlZ2VyIHZhbHVlJ1xuXHRcdFx0fSxcblx0XHRcdGZsb2F0OiB7XG5cdFx0XHRcdGVtcHR5OiAnRW50ZXIgYW4gZmxvYXQgbnVtYmVyJyxcblx0XHRcdFx0aW5jb3JyZWN0OiAnSW5jb3JyZWN0IGZsb2F0J1xuXHRcdFx0fSxcblx0XHRcdG1pbjoge1xuXHRcdFx0XHRlbXB0eTogJ0VudGVyIG1vcmUnLFxuXHRcdFx0XHRpbmNvcnJlY3Q6ICdFbnRlciBtb3JlJ1xuXHRcdFx0fSxcblx0XHRcdG1heDoge1xuXHRcdFx0XHRlbXB0eTogJ0VudGVyIGxlc3MnLFxuXHRcdFx0XHRpbmNvcnJlY3Q6ICdFbnRlciBsZXNzJ1xuXHRcdFx0fSxcblx0XHRcdGJldHdlZW46IHtcblx0XHRcdFx0ZW1wdHk6ICdFbnRlciB0aGUgYmV0d2VlbiB7MH0tezF9Jyxcblx0XHRcdFx0aW5jb3JyZWN0OiAnRW50ZXIgdGhlIGJldHdlZW4gezB9LXsxfSdcblx0XHRcdH0sXG5cdFx0XHRuYW1lOiB7XG5cdFx0XHRcdGVtcHR5OiAnUGxlYXNlLCBlbnRlciB5b3VyIG5hbWUnLFxuXHRcdFx0XHRpbmNvcnJlY3Q6ICdJbmNvcnJlY3QgbmFtZSdcblx0XHRcdH0sXG5cdFx0XHRsYXN0bmFtZToge1xuXHRcdFx0XHRlbXB0eTogJ1BsZWFzZSwgZW50ZXIgeW91ciBsYXN0bmFtZScsXG5cdFx0XHRcdGluY29ycmVjdDogJ0luY29ycmVjdCBsYXN0bmFtZSdcblx0XHRcdH0sXG5cdFx0XHRwaG9uZToge1xuXHRcdFx0XHRlbXB0eTogJ1BsZWFzZSwgZW50ZXIgdGhlIHBob25lIG51bWJlcicsXG5cdFx0XHRcdGluY29ycmVjdDogJ0luY29ycmVjdCBwaG9uZSBudW1iZXInXG5cdFx0XHR9LFxuXHRcdFx0ZW1haWw6IHtcblx0XHRcdFx0ZW1wdHk6ICdQbGVhc2UsIGVudGVyIHlvdXIgZW1haWwgYWRkcmVzcycsXG5cdFx0XHRcdGluY29ycmVjdDogJ0luY29ycmVjdCBlbWFpbCBhZGRyZXNzJ1xuXHRcdFx0fSxcblx0XHRcdGxlbmd0aDoge1xuXHRcdFx0XHRlbXB0eTogJ1BsZWFzZSwgRW50ZXIgYSBtaW5pbXVtIG9mIHswfSBjaGFyYWN0ZXJzIGFuZCBhIG1heGltdW0gb2YgezF9Jyxcblx0XHRcdFx0aW5jb3JyZWN0OiAnSW5jb3JyZWN0LiBFbnRlciBhIG1pbmltdW0gb2YgezB9IGNoYXJhY3RlcnMgYW5kIGEgbWF4aW11bSBvZiB7MX0nXG5cdFx0XHR9LFxuXHRcdFx0bWlubGVuZ3RoOiB7XG5cdFx0XHRcdGVtcHR5OiAnUGxlYXNlLCBlbnRlciBhdCBsZWFzdCB7MH0gY2hhcmFjdGVycycsXG5cdFx0XHRcdGluY29ycmVjdDogJ1lvdSBoYXZlIGVudGVyZWQgbGVzcyB0aGFuIHswfSBjaGFyYWN0ZXJzJ1xuXHRcdFx0fSxcblx0XHRcdG1heGxlbmd0aDoge1xuXHRcdFx0XHRlbXB0eTogJ1BsZWFzZSwgZW50ZXIgYXQgbWF4aW11bSB7MH0gY2hhcmFjdGVycycsXG5cdFx0XHRcdGluY29ycmVjdDogJ1lvdSBoYXZlIGVudGVyZWQgbW9yZSB0aGFuIHswfSBjaGFyYWN0ZXJzJ1xuXHRcdFx0fSxcblx0XHRcdG1heGZpbGVzaXplOiB7XG5cdFx0XHRcdGVtcHR5OiAnVGhlIHNpemUgb2Ygb25lIG9yIG1vcmUgc2VsZWN0ZWQgZmlsZXMgbGFyZ2VyIHRoYW4gezB9IHsxfScsXG5cdFx0XHRcdGluY29ycmVjdDogJ1RoZSBzaXplIG9mIG9uZSBvciBtb3JlIHNlbGVjdGVkIGZpbGVzIGxhcmdlciB0aGFuIHswfSB7MX0nXG5cdFx0XHR9LFxuXHRcdFx0ZmlsZWV4dGVuc2lvbjoge1xuXHRcdFx0XHRlbXB0eTogJ1NlbGVjdCBmaWxlJyxcblx0XHRcdFx0aW5jb3JyZWN0OiAnT25lIG9yIG1vcmUgZmlsZXMgaGF2ZSBhbiBpbnZhbGlkIHR5cGUnXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdC8vIHJ1bGVzXG5cdHJ1bGVzOiB7XG5cdFx0cmVxdWlyZWQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0cmV0dXJuICcnICE9PSB2YWx1ZTtcblx0XHR9LFxuXHRcdG5vdHplcm86IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCkgPiAwO1xuXHRcdH0sXG5cdFx0aW50ZWdlcjogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cCgvXlswLTldKyQvZ2kpLnRlc3QodmFsdWUpO1xuXHRcdH0sXG5cdFx0ZmxvYXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0dmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoL1xcLC8sICcuJyk7XG5cdFx0XHRyZXR1cm4gdGhpcy5pbnRlZ2VyKHZhbHVlKSB8fCBuZXcgUmVnRXhwKC9eKFswLTldKSsoXFwuKShbMC05XSskKS9naSkudGVzdCh2YWx1ZSk7XG5cdFx0fSxcblx0XHRtaW46IGZ1bmN0aW9uICh2YWx1ZSwgcGFyYW1zKSB7XG5cdFx0XHRpZiAodGhpcy5mbG9hdCh2YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpID49IHBhcnNlRmxvYXQocGFyYW1zWzBdKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApID49IHBhcnNlSW50KHBhcmFtc1swXSwgMTApO1xuXHRcdH0sXG5cdFx0bWF4OiBmdW5jdGlvbiAodmFsdWUsIHBhcmFtcykge1xuXHRcdFx0aWYgKHRoaXMuZmxvYXQodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKSA8PSBwYXJzZUZsb2F0KHBhcmFtc1swXSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKSA8PSBwYXJzZUludChwYXJhbXNbMF0sIDEwKTtcblx0XHR9LFxuXHRcdGJldHdlZW46IGZ1bmN0aW9uICh2YWx1ZSwgcGFyYW1zKSB7XG5cblx0XHRcdHBhcmFtc1sxXSA9IHBhcmFtc1sxXSB8fCA5OTk5OTk7XG5cblx0XHRcdGlmICh0aGlzLmZsb2F0KHZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSkgPj0gcGFyc2VGbG9hdChwYXJhbXNbMF0pICYmIHBhcnNlRmxvYXQodmFsdWUpIDw9IHBhcnNlRmxvYXQocGFyYW1zWzFdKTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmludGVnZXIodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApID49IHBhcnNlSW50KHBhcmFtc1swXSwgMTApICYmIHBhcnNlSW50KHZhbHVlLCAxMCkgPD0gcGFyc2VJbnQocGFyYW1zWzFdLCAxMCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHRuYW1lOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdGlmICh2YWx1ZS5sZW5ndGggPiAwICYmIHZhbHVlLmxlbmd0aCA8IDIpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAoL15bYS16QS1aXFxz0LAt0Y/QkC3Qr9GR0IFcXC1dKyQvZykudGVzdCh2YWx1ZSk7XG5cdFx0fSxcblx0XHRsYXN0bmFtZTogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5uYW1lKHZhbHVlKTtcblx0XHR9LFxuXHRcdHBob25lOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdGlmICh2YWx1ZS5yZXBsYWNlKC9bXjAtOV0rL2dpLCAnJykubWF0Y2goL1swLTldKy9naSkgJiYgdmFsdWUucmVwbGFjZSgvW14wLTldKy9naSwgJycpLm1hdGNoKC9bMC05XSsvZ2kpWzBdLmxlbmd0aCA8IDYpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAoL14oPzooPzpcXCg/KD86MDB8XFwrKShbMS00XVxcZFxcZHxbMS05XVxcZD8pXFwpPyk/W1xcLVxcLlxcIFxcXFxcXC9dPyk/KCg/OlxcKD9cXGR7MSx9XFwpP1tcXC1cXC5cXCBcXFxcXFwvXT8pezAsfSkoPzpbXFwtXFwuXFwgXFxcXFxcL10/KD86I3xleHRcXC4/fGV4dGVuc2lvbnx4KVtcXC1cXC5cXCBcXFxcXFwvXT8oXFxkKykpPyQvZykudGVzdCh2YWx1ZSk7XG5cdFx0fSxcblx0XHRlbWFpbDogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cCgvXigoXCJbXFx3LVxcc10rXCIpfChbXFx3XFwtXSsoPzpcXC5bXFx3XFwtXSspKil8KFwiW1xcdy1cXHNdK1wiKShbXFx3XFwtXSsoPzpcXC5bXFx3XFwtXSspKikpKEAoKD86W1xcd1xcLV0rXFwuKSpcXHdbXFx3XFwtXXswLDY2fSlcXC4oW2Etel17Miw2fSg/OlxcLlthLXpdezJ9KT8pJCl8KEBcXFs/KCgyNVswLTVdXFwufDJbMC00XVswLTldXFwufDFbMC05XXsyfVxcLnxbMC05XXsxLDJ9XFwuKSkoKDI1WzAtNV18MlswLTRdWzAtOV18MVswLTldezJ9fFswLTldezEsMn0pXFwuKXsyfSgyNVswLTVdfDJbMC00XVswLTldfDFbMC05XXsyfXxbMC05XXsxLDJ9KVxcXT8kKS9pKS50ZXN0KHZhbHVlKTtcblx0XHR9LFxuXHRcdGxlbmd0aDogZnVuY3Rpb24gKHZhbHVlLCBwYXJhbXMpIHtcblx0XHRcdHJldHVybiB0aGlzLmJldHdlZW4odmFsdWUucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpLmxlbmd0aCwgcGFyYW1zKTtcblx0XHR9LFxuXHRcdG1heGxlbmd0aDogZnVuY3Rpb24gKHZhbHVlLCBwYXJhbXMpIHtcblx0XHRcdHJldHVybiB0aGlzLm1heCh2YWx1ZS5yZXBsYWNlKC9cXHN7Mix9L2csICcgJykubGVuZ3RoLCBwYXJhbXMpO1xuXHRcdH0sXG5cdFx0bWlubGVuZ3RoOiBmdW5jdGlvbiAodmFsdWUsIHBhcmFtcykge1xuXHRcdFx0cmV0dXJuIHRoaXMubWluKHZhbHVlLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKS5sZW5ndGgsIHBhcmFtcyk7XG5cdFx0fSxcblx0XHRtYXhmaWxlc2l6ZTogZnVuY3Rpb24gKHZhbHVlLCBwYXJhbXMpIHtcblx0XHRcdHZhciBpLFxuXHRcdFx0XHRsID0gdmFsdWUubGVuZ3RoLFxuXHRcdFx0XHR1bml0c09mZnNldCA9IDE7XG5cblx0XHRcdHN3aXRjaCAocGFyYW1zWzFdLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRcdFx0Y2FzZSAnYic6XG5cdFx0XHRcdFx0dW5pdHNPZmZzZXQgPSAxO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ2tiJzpcblx0XHRcdFx0XHR1bml0c09mZnNldCA9IDEwMjQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnbWInOlxuXHRcdFx0XHRcdHVuaXRzT2Zmc2V0ID0gMTA0ODU3Njtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdnYic6XG5cdFx0XHRcdFx0dW5pdHNPZmZzZXQgPSAxMDczNzQxODI0O1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ3RiJzpcblx0XHRcdFx0XHR1bml0c09mZnNldCA9IDEwOTk1MTE2Mjc3NzY7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoaSA9IDA7IGkgPCBsOyBpICs9IDEpIHtcblx0XHRcdFx0aWYgKHBhcnNlRmxvYXQodmFsdWVbaV0pID4gKHBhcnNlRmxvYXQocGFyYW1zWzBdKSAqIHVuaXRzT2Zmc2V0KSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXHRcdGZpbGVleHRlbnNpb246IGZ1bmN0aW9uICh2YWx1ZSwgcGFyYW1zKSB7XG5cdFx0XHR2YXIgaSxcblx0XHRcdFx0YSxcblx0XHRcdFx0bCA9IHBhcmFtcy5sZW5ndGgsXG5cdFx0XHRcdGIgPSB2YWx1ZS5sZW5ndGgsXG5cdFx0XHRcdGNtcFJlc0MgPSAwO1xuXG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbDsgaSArPSAxKSB7XG5cdFx0XHRcdGZvciAoYSA9IDA7IGEgPCBiOyBhICs9IDEpIHtcblx0XHRcdFx0XHRpZiAocGFyYW1zW2ldID09PSB2YWx1ZVthXS5zcGxpdCgnLicpLnBvcCgpKSB7XG5cdFx0XHRcdFx0XHRjbXBSZXNDICs9IDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB2YWx1ZS5sZW5ndGggPT09IGNtcFJlc0MgPyB0cnVlIDogZmFsc2U7XG5cdFx0fVxuXHR9LFxuXG5cdG9yZGVyRmllbGRzOiBmdW5jdGlvbiAoYXR0ck5hbWUsIGF0dHJWYWx1ZSkge1xuXG5cdFx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdFx0cmV0T2JqID0ge307XG5cblx0XHQhIWF0dHJOYW1lICYmICEhYXR0clZhbHVlICYmIE9iamVjdC5rZXlzKHRoaXMuZmllbGRzKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuXHRcdFx0aWYgKHNlbGYuZmllbGRzW2ZpZWxkXS5oYW5kbGVbYXR0ck5hbWVdICYmIHNlbGYuZmllbGRzW2ZpZWxkXS5oYW5kbGVbYXR0ck5hbWVdID09PSBhdHRyVmFsdWUpIHtcblx0XHRcdFx0cmV0T2JqW2ZpZWxkXSA9IHNlbGYuZmllbGRzW2ZpZWxkXTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiByZXRPYmo7XG5cdH0sXG5cdF9ldmVudFN1Ym1pdDogZnVuY3Rpb24gKGUpIHtcblxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdC8vaGlkZSBlcnJvcnNcblx0XHR0aGlzLmhpZGVFcnJvcnMoZmFsc2UsIHRydWUpO1xuXG5cdFx0Ly9zaG93IGVycm9ycyBpZiB2YWxpZGF0aW9uIGZhaWx1cmVcblx0XHQhdGhpcy52YWxpZGF0ZSgpICYmIHRoaXMuc2hvd0Vycm9ycygpO1xuXG5cdFx0Ly9jYWxsYmFja1xuXHRcdCh0aGlzLnN1Ym1pdENhbGxiYWNrKHRoaXMuZXJyb3JzIHx8IG51bGwsIHRoaXMuZXJyb3JzID8gZmFsc2UgOiB0cnVlKSA9PT0gdHJ1ZSkgJiYgdGhpcy5mb3JtSGFuZGxlLnN1Ym1pdCgpO1xuXHR9LFxuXHRfZXZlbnRDaGFuZ2U6IGZ1bmN0aW9uIChlKSB7XG5cblx0XHR2YXIgcmFkaW9CdG5zLFxuXHRcdFx0c2VsZiA9IHRoaXM7XG5cblx0XHQvL3JlbW92ZSBzcGFjZXNcblx0XHRpZiAodGhpcy5zZXR0aW5ncy5yZW1vdmVTcGFjZXMgJiYgbmV3IFJlZ0V4cCgvXFxzezIsfS9nKS50ZXN0KGUudGFyZ2V0LnZhbHVlKSkge1xuXHRcdFx0ZS50YXJnZXQudmFsdWUgPSBlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9cXHN7Mix9L2csICcgJyk7XG5cdFx0fVxuXG5cdFx0Ly9pZiBpcyByYWRpbyBidXR0b25zXG5cdFx0aWYgKGUudGFyZ2V0LnR5cGUgPT09ICdyYWRpbycpIHtcblxuXHRcdFx0Ly9nZXQgcmFkaW8gZ3JvdXBlXG5cdFx0XHRyYWRpb0J0bnMgPSB0aGlzLm9yZGVyRmllbGRzKCduYW1lJywgZS50YXJnZXQubmFtZSk7XG5cblx0XHRcdE9iamVjdC5rZXlzKHJhZGlvQnRucykuZm9yRWFjaChmdW5jdGlvbiAoYnRuKSB7XG5cdFx0XHRcdHNlbGYuaGlkZUVycm9ycyhyYWRpb0J0bnNbYnRuXS5oYW5kbGUpO1xuXHRcdFx0fSk7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly9oaWRlIGVycm9ycyBmb3IgdGhpc1xuXHRcdFx0dGhpcy5oaWRlRXJyb3JzKGUudGFyZ2V0KTtcblx0XHR9XG5cblxuXG5cblx0XHQvL3ZhbGlkYXRlIGFuZCBzaG93IGVycm9ycyBmb3IgdGhpc1xuXHRcdGlmICghdGhpcy52YWxpZGF0ZShlLnRhcmdldCkpIHtcblxuXHRcdFx0dGhpcy5zaG93RXJyb3JzKGUudGFyZ2V0KTtcblx0XHRcdCF0aGlzLnNldHRpbmdzLnNob3dFcnJvcnMgJiYgdGhpcy5zdWJtaXRDYWxsYmFjayh0aGlzLmVycm9ycywgZmFsc2UpO1xuXG5cdFx0fVxuXHR9LFxuXHRfZXZlbnRDaGFuZ2VXaXRoRGVsYXk6IGZ1bmN0aW9uIChlKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0aWYgKHRoaXMuaW50ZXJ2YWxJRCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuaW50ZXJ2YWxJRCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5pbnRlcnZhbElEID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRzZWxmLl9ldmVudENoYW5nZS5hcHBseShzZWxmLCBbZV0pO1xuXHRcdH0sIDQwMCk7XG5cdH0sXG5cblxuXHRhcHBseVNldHRpbmdzOiBmdW5jdGlvbiAoc2V0dGluZ3MpIHtcblxuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIGFwcGx5IHJ1bGVzXG5cdFx0c2V0dGluZ3MucnVsZXMgJiYgT2JqZWN0LmtleXMoc2V0dGluZ3MucnVsZXMpLmZvckVhY2goZnVuY3Rpb24gKHJ1bGVOYW1lKSB7XG5cdFx0XHRzZWxmLnJ1bGVzW3J1bGVOYW1lXSA9IHNldHRpbmdzLnJ1bGVzW3J1bGVOYW1lXTtcblx0XHR9KTtcblxuXHRcdC8vIGFwcGx5IG1lc3NhZ2VzXG5cdFx0c2V0dGluZ3MubWVzc2FnZXMgJiYgT2JqZWN0LmtleXMoc2V0dGluZ3MubWVzc2FnZXMpLmZvckVhY2goZnVuY3Rpb24gKGxvY2FsZSkge1xuXHRcdFx0T2JqZWN0LmtleXMoc2V0dGluZ3MubWVzc2FnZXNbbG9jYWxlXSkuZm9yRWFjaChmdW5jdGlvbiAocnVsZU5hbWUpIHtcblx0XHRcdFx0T2JqZWN0LmtleXMoc2V0dGluZ3MubWVzc2FnZXNbbG9jYWxlXVtydWxlTmFtZV0pLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG5cdFx0XHRcdFx0c2VsZi5zZXR0aW5ncy5tZXNzYWdlc1tsb2NhbGVdID0gc2VsZi5zZXR0aW5ncy5tZXNzYWdlc1tsb2NhbGVdIHx8IHt9O1xuXHRcdFx0XHRcdHNlbGYuc2V0dGluZ3MubWVzc2FnZXNbbG9jYWxlXVtydWxlTmFtZV0gPSBzZWxmLnNldHRpbmdzLm1lc3NhZ2VzW2xvY2FsZV1bcnVsZU5hbWVdIHx8IHt9O1xuXHRcdFx0XHRcdHNlbGYuc2V0dGluZ3MubWVzc2FnZXNbbG9jYWxlXVtydWxlTmFtZV1bcGFyYW1dID0gc2V0dGluZ3MubWVzc2FnZXNbbG9jYWxlXVtydWxlTmFtZV1bcGFyYW1dO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gYXBwbHkgb3RoZXIgc2V0dGluZ3Ncblx0XHRPYmplY3Qua2V5cyhzZXR0aW5ncykuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcblx0XHRcdHNlbGYuc2V0dGluZ3NbcGFyYW1dID0gc2V0dGluZ3NbcGFyYW1dO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblxuXHRnZXRGaWVsZHM6IGZ1bmN0aW9uIChmaWVsZHMpIHtcblxuXHRcdHZhciByZXREYXRhID0ge30sXG5cdFx0XHRydWxlcyA9IFtdLFxuXHRcdFx0cGFyYW1zID0gW107XG5cblx0XHRmaWVsZHMgPSBmaWVsZHMgfHwgdGhpcy5mb3JtSGFuZGxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJ1bGVdJyk7XG5cblx0XHQvLyBlYWNoIGZpZWxkcyB3aXRoIGRhdGEtcnVsZSBhdHRyaWJ1dGVcblx0XHRPYmplY3Qua2V5cyhmaWVsZHMpLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkSW5kZXgpIHtcblxuXHRcdFx0cnVsZXMgPSBmaWVsZHNbZmllbGRJbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLXJ1bGUnKS5zcGxpdCgnfCcpO1xuXG5cdFx0XHRPYmplY3Qua2V5cyhydWxlcykuZm9yRWFjaChmdW5jdGlvbiAocnVsZUluZGV4KSB7XG5cblx0XHRcdFx0Ly8gcGFyc2UgcnVsZVxuXHRcdFx0XHRpZiAocnVsZXNbcnVsZUluZGV4XS5tYXRjaCgvLS9naSkpIHtcblxuXHRcdFx0XHRcdHBhcmFtcyA9IHJ1bGVzW3J1bGVJbmRleF0uc3BsaXQoJy0nKTtcblx0XHRcdFx0XHRydWxlc1tydWxlSW5kZXhdID0gcGFyYW1zWzBdO1xuXHRcdFx0XHRcdHBhcmFtcyA9IHBhcmFtcy5zcGxpY2UoMSk7XG5cblx0XHRcdFx0XHRydWxlc1tydWxlSW5kZXhdID0gW3J1bGVzW3J1bGVJbmRleF0sIHBhcmFtc107XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cnVsZXNbcnVsZUluZGV4XSA9IFtydWxlc1tydWxlSW5kZXhdLCBbXV07XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRyZXREYXRhW2ZpZWxkSW5kZXhdID0ge1xuXHRcdFx0XHRuYW1lOiBmaWVsZHNbZmllbGRJbmRleF0uZ2V0QXR0cmlidXRlKCduYW1lJyksXG5cdFx0XHRcdHJ1bGVzOiBydWxlcyxcblx0XHRcdFx0ZGVmYXVsdFZhbHVlOiBmaWVsZHNbZmllbGRJbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLWRlZmF1bHQnKSxcblx0XHRcdFx0aGFuZGxlOiBmaWVsZHNbZmllbGRJbmRleF0sXG5cdFx0XHRcdGludGVydmFsSUQ6IG51bGxcblx0XHRcdH07XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcmV0RGF0YTtcblx0fSxcblxuXHR2YWxpZGF0ZTogZnVuY3Rpb24gKHZhbGlkYXRpb25GaWVsZCkge1xuXG5cdFx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdFx0ZmllbGRzID0gdmFsaWRhdGlvbkZpZWxkID8gdGhpcy5nZXRGaWVsZHMoW3ZhbGlkYXRpb25GaWVsZF0pIDogdGhpcy5maWVsZHMsXG5cdFx0XHRyZXN1bHQsXG5cdFx0XHRydWxlTmFtZSxcblx0XHRcdHBhcmFtcyxcblx0XHRcdGRlZmF1bHRWYWx1ZSxcblx0XHRcdHZhbHVlLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdG1lc3NhZ2VUeXBlID0gbnVsbDtcblxuXHRcdHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMgPyBudWxsIDogdGhpcy5lcnJvcnM7XG5cblx0XHRPYmplY3Qua2V5cyhmaWVsZHMpLmZvckVhY2goZnVuY3Rpb24gKG4pIHtcblxuXHRcdFx0cmVzdWx0ID0gdHJ1ZTtcblxuXHRcdFx0Ly8gbG9vcCBydWxlcyBvZiB0aGlzIGZpZWxkXG5cdFx0XHRmaWVsZHNbbl0ucnVsZXMgJiYgT2JqZWN0LmtleXMoZmllbGRzW25dLnJ1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChydWxlSW5kZXgpIHtcblxuXHRcdFx0XHQvLyBzZXQgcnVsZSBkYXRhXG5cdFx0XHRcdHJ1bGVOYW1lID0gZmllbGRzW25dLnJ1bGVzW3J1bGVJbmRleF1bMF07XG5cdFx0XHRcdHBhcmFtcyA9IGZpZWxkc1tuXS5ydWxlc1tydWxlSW5kZXhdWzFdO1xuXHRcdFx0XHRkZWZhdWx0VmFsdWUgPSBmaWVsZHNbbl0uZGVmYXVsdFZhbHVlO1xuXHRcdFx0XHR2YWx1ZSA9IGZpZWxkc1tuXS5oYW5kbGUudmFsdWU7XG5cblxuXHRcdFx0XHRzd2l0Y2ggKGZpZWxkc1tuXS5oYW5kbGUudHlwZSkge1xuXG5cdFx0XHRcdFx0Y2FzZSAnY2hlY2tib3gnOlxuXHRcdFx0XHRcdFx0IWZpZWxkc1tuXS5oYW5kbGUuY2hlY2tlZCAmJiAodmFsdWUgPSAnJyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgJ3JhZGlvJzpcblx0XHRcdFx0XHRcdC8vIGdldCByYWRpbyBncm91cGVcblx0XHRcdFx0XHRcdHZhciByYWRpb0J0bnMgPSBzZWxmLm9yZGVyRmllbGRzKCduYW1lJywgZmllbGRzW25dLmhhbmRsZS5uYW1lKSxcblx0XHRcdFx0XHRcdFx0Y2hlY2tlZCA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0XHRPYmplY3Qua2V5cyhyYWRpb0J0bnMpLmZvckVhY2goZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0XHRcdFx0cmFkaW9CdG5zW2ldLmhhbmRsZS5jaGVja2VkICYmIChjaGVja2VkID0gdHJ1ZSk7XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0aWYgKCFjaGVja2VkKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gYWRkIGFuIGVycm9yIHRvIG9uZSBlbGVtZW50XG5cdFx0XHRcdFx0XHRcdE9iamVjdC5rZXlzKHJhZGlvQnRucykuZm9yRWFjaChmdW5jdGlvbiAoaSkge1xuXHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlID0gc2VsZi5zZXR0aW5ncy5tZXNzYWdlc1tzZWxmLnNldHRpbmdzLmxvY2FsZV1bcnVsZU5hbWVdLmVtcHR5O1xuXHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2UgPSBzZWxmLm1lc3NhZ2VzW3NlbGYuc2V0dGluZ3MubG9jYWxlXVtydWxlTmFtZV0uZW1wdHk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0XHQvLyBzZXQgdmFsdWUgYXMgZm9yIGVtcHR5IHJ1bGVzXG5cdFx0XHRcdFx0XHRcdHZhbHVlID0gJyc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgJ2ZpbGUnOlxuXG5cdFx0XHRcdFx0XHQvLyBpZiB0aGUgZmlsZXMgd2VyZSBzZWxlY3RlZFxuXHRcdFx0XHRcdFx0aWYgKGZpZWxkc1tuXS5oYW5kbGUuZmlsZXMgJiYgZmllbGRzW25dLmhhbmRsZS5maWxlcy5sZW5ndGgpIHtcblxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IFtdO1xuXG5cdFx0XHRcdFx0XHRcdE9iamVjdC5rZXlzKGZpZWxkc1tuXS5oYW5kbGUuZmlsZXMpLmZvckVhY2goZnVuY3Rpb24gKGZpbGVJbmRleCkge1xuXG5cdFx0XHRcdFx0XHRcdFx0c3dpdGNoIChydWxlTmFtZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAnbWF4ZmlsZXNpemUnOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZS5wdXNoKGZpZWxkc1tuXS5oYW5kbGUuZmlsZXNbZmlsZUluZGV4XS5zaXplKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgJ2ZpbGVleHRlbnNpb24nOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZS5wdXNoKGZpZWxkc1tuXS5oYW5kbGUuZmlsZXNbZmlsZUluZGV4XS5uYW1lKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cblx0XHRcdFx0aWYgKHJlc3VsdCAmJiAhKHZhbHVlID09PSAnJyAmJiAhZmllbGRzW25dLnJ1bGVzLmpvaW4oJ3wnKS5tYXRjaCgvXFx8ezAsMX1yZXF1aXJlZFxcfHswLDF9LykpKSB7XG5cblx0XHRcdFx0XHQvLyBpZiBleGlzdCBkZWZhdWx0IHZhbHVlIGFuZCB2YWx1ZSBpcyBlcSBkZWZhdWx0XG5cdFx0XHRcdFx0aWYgKHJlc3VsdCAmJiBkZWZhdWx0VmFsdWUgJiYgdmFsdWUgIT09IGRlZmF1bHRWYWx1ZSkge1xuXG5cdFx0XHRcdFx0XHRyZXN1bHQgPSBmYWxzZTtcblx0XHRcdFx0XHRcdG1lc3NhZ2VUeXBlID0gJ2luY29ycmVjdCc7XG5cblx0XHRcdFx0XHRcdC8vIGlmIGRlZmF1bHQgdmFsdWUgbm90IGV4aXN0XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChyZXN1bHQgJiYgc2VsZi5ydWxlc1tydWxlTmFtZV0gJiYgIXNlbGYucnVsZXNbcnVsZU5hbWVdKHZhbHVlLCBwYXJhbXMpKSB7XG5cblx0XHRcdFx0XHRcdC8vIHNldCBtZXNzYWdlIHRvIGVtcHR5IGRhdGFcblx0XHRcdFx0XHRcdGlmICgnJyA9PT0gdmFsdWUpIHtcblx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2VUeXBlID0gJ2VtcHR5JztcblxuXHRcdFx0XHRcdFx0XHQvLyBzZXQgbWVzc2FnZSB0byBpbmNvcnJlY3QgZGF0YVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2VUeXBlID0gJ2luY29ycmVjdCc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0c2VsZi5oaWRlRXJyb3JzKGZpZWxkc1tuXS5oYW5kbGUsIHRydWUpO1xuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0Ly8gZGVmaW5lIGVycm9ycyBzdGFjayBpZiBub3QgZXhpc3Rcblx0XHRcdFx0XHRcdHNlbGYuZXJyb3JzID0gc2VsZi5lcnJvcnMgfHwge307XG5cblx0XHRcdFx0XHRcdC8vIGFwcGVuZCBlcnJvciBtZXNzYWdlc1xuXHRcdFx0XHRcdFx0aWYgKHJ1bGVOYW1lID09PSAncmVxdWlyZWQnICYmIGZpZWxkc1tuXS5ydWxlc1sxXSAmJiBmaWVsZHNbbl0ucnVsZXNbMV1bMF0pIHtcblx0XHRcdFx0XHRcdFx0cnVsZU5hbWUgPSBmaWVsZHNbbl0ucnVsZXNbMV1bMF07XG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2VUeXBlID0gJ2VtcHR5Jztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlID0gc2VsZi5zZXR0aW5ncy5tZXNzYWdlc1tzZWxmLnNldHRpbmdzLmxvY2FsZV1bcnVsZU5hbWVdW21lc3NhZ2VUeXBlXTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2UgPSBzZWxmLm1lc3NhZ2VzW3NlbGYuc2V0dGluZ3MubG9jYWxlXVtydWxlTmFtZV1bbWVzc2FnZVR5cGVdO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0XHRcdHJ1bGVOYW1lID0gJ3JlcXVpcmVkJztcblx0XHRcdFx0XHRcdFx0bWVzc2FnZSA9IHNlbGYubWVzc2FnZXNbc2VsZi5zZXR0aW5ncy5sb2NhbGVdW3J1bGVOYW1lXVttZXNzYWdlVHlwZV07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIHB1c2ggdmFsdWUgaW50byBwYXJhbXMgaWYgcGFyYW1zIGlzIGVtcHR5XG5cdFx0XHRcdFx0XHQhcGFyYW1zLmxlbmd0aCAmJiBwYXJhbXMucHVzaCh2YWx1ZSk7XG5cblx0XHRcdFx0XHRcdC8vIGFkZCBlcnJvcnNcblx0XHRcdFx0XHRcdHNlbGYuZXJyb3JzW25dID0ge1xuXHRcdFx0XHRcdFx0XHRuYW1lOiBmaWVsZHNbbl0ubmFtZSxcblx0XHRcdFx0XHRcdFx0ZXJyb3JUZXh0OiBzZWxmLmZvcm1hdFN0cmluZyhtZXNzYWdlLCBwYXJhbXMpXG5cdFx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0XHQvLyBjYWxsIGNhbGxiYWNrIGlmIGV4aXN0XG5cdFx0XHRcdFx0XHRpZiAoIXNlbGYuc3VibWl0Q2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdFx0c2VsZi5lcnJvcnNbbl0uaGFuZGxlID0gZmllbGRzW25dLmhhbmRsZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cblx0XHQvLyBydW4gY2FsbGJhY2sgaWYgY2FsbGJhY2sgaXMgZXhpc3RzIGFuZCBub3QgZXJyb3JzIG9yIHJldHVybiBlcnJvciBkYXRhIG9iamVjdFxuXHRcdGlmICh0aGlzLnN1Ym1pdENhbGxiYWNrKSB7XG5cdFx0XHRyZXR1cm4gKHRoaXMuZXJyb3JzKSA/IGZhbHNlIDogdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5lcnJvcnMgfHwgdHJ1ZTtcblxuXHR9LFxuXG5cblx0aGlkZUVycm9yczogZnVuY3Rpb24gKHZhbGlkYXRpb25GaWVsZCwgcmVtb3ZlQ2xhc3MpIHtcblxuXHRcdHZhciBzZWxmID0gdGhpcyxcblx0XHRcdGVycm9yRGl2O1xuXG5cblx0XHRPYmplY3Qua2V5cyh0aGlzLmZpZWxkcykuZm9yRWFjaChmdW5jdGlvbiAobikge1xuXHRcdFx0aWYgKCh2YWxpZGF0aW9uRmllbGQgJiYgdmFsaWRhdGlvbkZpZWxkID09PSBzZWxmLmZpZWxkc1tuXS5oYW5kbGUpIHx8ICF2YWxpZGF0aW9uRmllbGQpIHtcblxuXHRcdFx0XHRlcnJvckRpdiA9IHNlbGYuZmllbGRzW25dLmhhbmRsZS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIGNsYXNzIGVycm9yXG5cdFx0XHRcdHJlbW92ZUNsYXNzICYmIHNlbGYuZmllbGRzW25dLmhhbmRsZS5jbGFzc0xpc3QucmVtb3ZlKHNlbGYuc2V0dGluZ3MuZXJyb3JDbGFzc05hbWUpO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBlcnJvciBlbGVtZW50XG5cdFx0XHRcdGVycm9yRGl2ICYmIChlcnJvckRpdi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpID09PSAndmFsaWRhdG9yLWVycm9yJykgJiYgZXJyb3JEaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlcnJvckRpdik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0fSxcblxuXHRzaG93RXJyb3JzOiBmdW5jdGlvbiAodmFsaWRhdGlvbkZpZWxkKSB7XG5cblx0XHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0XHRlcnJvckRpdixcblx0XHRcdGluc2VydE5vZGVFcnJvciA9IGZ1bmN0aW9uIChyZWZOb2RlLCBlcnJvck9iaikge1xuXG5cdFx0XHRcdC8vIHNldCBlcnJvciBjbGFzc1xuXHRcdFx0XHRyZWZOb2RlLmNsYXNzTGlzdC5hZGQoc2VsZi5zZXR0aW5ncy5lcnJvckNsYXNzTmFtZSk7XG5cblx0XHRcdFx0Ly8gY2hlY2sgdG8gZXJyb3IgZGl2IGVsZW1lbnQgZXhpc3Rcblx0XHRcdFx0aWYgKHJlZk5vZGUubmV4dEVsZW1lbnRTaWJsaW5nICYmIHJlZk5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJykgPT09ICd2YWxpZGF0b3ItZXJyb3InKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gaW5zZXJ0IGVycm9yIGVsZW1lbnRcblx0XHRcdFx0aWYgKHNlbGYuc2V0dGluZ3Muc2hvd0Vycm9ycykge1xuXHRcdFx0XHRcdGVycm9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdFx0ZXJyb3JEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsIHNlbGYuc2V0dGluZ3MuZXJyb3JDbGFzc05hbWUpO1xuXHRcdFx0XHRcdGVycm9yRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgJ3ZhbGlkYXRvci1lcnJvcicpO1xuXHRcdFx0XHRcdGVycm9yRGl2LmlubmVySFRNTCA9IGVycm9yT2JqLmVycm9yVGV4dDtcblx0XHRcdFx0XHRyZWZOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVycm9yRGl2LCByZWZOb2RlLm5leHRTaWJsaW5nKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXG5cblxuXHRcdE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG5cblx0XHRcdC8vIHNob3cgZXJyb3IgdG8gc3BlY2lmaWVkIGZpZWxkXG5cdFx0XHRpZiAodmFsaWRhdGlvbkZpZWxkKSB7XG5cblx0XHRcdFx0T2JqZWN0LmtleXMoc2VsZi5maWVsZHMpLmZvckVhY2goZnVuY3Rpb24gKG4pIHtcblx0XHRcdFx0XHQoc2VsZi5maWVsZHNbbl0uaGFuZGxlLmdldEF0dHJpYnV0ZSgnbmFtZScpID09PSB2YWxpZGF0aW9uRmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJykpICYmIGluc2VydE5vZGVFcnJvcihzZWxmLmZpZWxkc1tuXS5oYW5kbGUsIHNlbGYuZXJyb3JzW3JdKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gc2hvdyBlcnJvciB0byBhbGwgZmllbGRzXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAociA9PT0gJzAnIHx8IChyID4gMCAmJiBzZWxmLmZpZWxkc1tyXS5uYW1lICE9PSBzZWxmLmZpZWxkc1tyIC0gMV0ubmFtZSkpIHtcblx0XHRcdFx0XHRpbnNlcnROb2RlRXJyb3Ioc2VsZi5maWVsZHNbcl0uaGFuZGxlLCBzZWxmLmVycm9yc1tyXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXG5cblxuXG5cdFx0Ly8gYXV0byBoaWRlIGVycm9yc1xuXHRcdGlmICh0aGlzLnNldHRpbmdzLmF1dG9IaWRlRXJyb3JzKSB7XG5cblx0XHRcdC8vIGZvciBhbGwgZmllbGRzXG5cdFx0XHRpZiAoIXZhbGlkYXRpb25GaWVsZCkge1xuXG5cdFx0XHRcdGlmICh0aGlzLmludGVydmFsSUQpIHtcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy5pbnRlcnZhbElEKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuaW50ZXJ2YWxJRCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHNlbGYuaW50ZXJ2YWxJRCA9IG51bGw7XG5cdFx0XHRcdFx0c2VsZi5oaWRlRXJyb3JzKGZhbHNlKTtcblx0XHRcdFx0fSwgdGhpcy5zZXR0aW5ncy5hdXRvSGlkZUVycm9yc1RpbWVvdXQpO1xuXG5cdFx0XHRcdC8vIGZvciBjdXJyZW50IGZpZWxkXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGlmICh2YWxpZGF0aW9uRmllbGQuaW50ZXJ2YWxJRCkge1xuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh2YWxpZGF0aW9uRmllbGQuaW50ZXJ2YWxJRCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIXRoaXMuaW50ZXJ2YWxJRCkge1xuXHRcdFx0XHRcdHZhbGlkYXRpb25GaWVsZC5pbnRlcnZhbElEID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHR2YWxpZGF0aW9uRmllbGQuaW50ZXJ2YWxJRCA9IG51bGw7XG5cdFx0XHRcdFx0XHRzZWxmLmhpZGVFcnJvcnModmFsaWRhdGlvbkZpZWxkKTtcblx0XHRcdFx0XHR9LCB0aGlzLnNldHRpbmdzLmF1dG9IaWRlRXJyb3JzVGltZW91dCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblxuXHQvKlxuXHQqIEdldCBGb3JtIGhhbmRsZVxuXHQqIEByZXR1cm4ge2VsZW1lbnR9IC0gRm9ybSBoYW5kbGVcblx0Ki9cblx0Z2V0Rm9ybUhhbmRsZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmZvcm1IYW5kbGU7XG5cdH0sXG5cblx0Lypcblx0KiBGb3JtYXR0aW5nIHN0cmluZy4gUmVwbGFjZSBzdHJpbmdcblx0KiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gU291cmNlIHN0cmluZy4gRXhhbXBsZTogXCJ7MH0gYWdlIHsxfSB5ZWFycy5cIlxuXHQqIEBwYXJhbSB7YXJyYXl9IHBhcmFtcyAtIEFuIGFycmF5IG9mIHZhbHVlc+KAi+KAiywgd2hpY2ggd2lsbCBiZSByZXBsYWNlZCB3aXRoIG1hcmtlcnMuIEV4YW1wbGU6IFsnQm9iJywgMzZdXG5cdCogQHJldHVybiB7c3RyaW5nfSAtIEZvcm1hdHRlZCBzdHJpbmcgd2l0aCByZXBsYWNpbmcgbWFya2Vycy4gRXhhbXBsZSBcIkJvYiBhZ2UgMzYgeWVhcnNcIlxuXHQqL1xuXHRmb3JtYXRTdHJpbmc6IGZ1bmN0aW9uIChzdHJpbmcsIHBhcmFtcykge1xuXHRcdHJldHVybiBzdHJpbmcucmVwbGFjZSgvXFx7KFxcZCspXFx9L2dpLCBmdW5jdGlvbiAobWF0Y2gsIG51bWJlcikge1xuXHRcdFx0cmV0dXJuIChtYXRjaCAmJiBwYXJhbXNbbnVtYmVyXSkgPyBwYXJhbXNbbnVtYmVyXSA6ICcnO1xuXHRcdH0pO1xuXHR9LFxuXG5cdC8qXG5cdCogRGVzdHJveSB2YWxpZGF0b3Jcblx0Ki9cblx0ZGVzdHJveTogZnVuY3Rpb24gKCkge1xuXG5cdFx0Ly9oaWRlIGVycm9yc1xuXHRcdHRoaXMuaGlkZUVycm9ycyhmYWxzZSwgdHJ1ZSk7XG5cblx0XHQvLyByZW1vdmUgZXZlbnRzXG5cdFx0dGhpcy5ldmVudHNCdWlsZGVyKCdyZW1vdmVFdmVudExpc3RlbmVyJyk7XG5cblx0fSxcblxuXHQvKlxuXHQqIFJlbG9hZCB2YWxpZGF0b3IuXG5cdCogRXhhbXBsZSAxOiByZWxvYWQoZnVuY3Rpb24gKGVyciwgcmVzKSB7Li4ufSwge2F1dG9IaWRlRXJyb3JzOiBmYWxzZX0pXG5cdCogRXhhbXBsZSAyOiByZWxvYWQoe2F1dG9IaWRlRXJyb3JzOiBmYWxzZX0pXG5cdCogQHBhcmFtIHtmdW5jdGlvbn0gW3N1Ym1pdENhbGxiYWNrXSAtIFN1Ym1pdCBjYWxsYmFjayBmdW5jdGlvblxuXHQqIEBwYXJhbSB7b2JqZWN0fSBbc2V0dGluZ3NdIC0gU2V0dGluZ3Mgb2JqZWN0XG5cdCovXG5cdHJlbG9hZDogZnVuY3Rpb24gKHN1Ym1pdENhbGxiYWNrLCBzZXR0aW5ncykge1xuXG5cdFx0dGhpcy5kZXN0cm95KCk7XG5cblx0XHQvL3NldCB2YXJpYWJsZXNcblx0XHRzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcblxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0aGlzLnN1Ym1pdENhbGxiYWNrID0gc3VibWl0Q2FsbGJhY2s7XG5cdFx0XHRcdHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy5zZXR0aW5ncyA9IHN1Ym1pdENhbGxiYWNrO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHR0aGlzLmZpZWxkcyA9IHRoaXMuZ2V0RmllbGRzKHRoaXMuZm9ybUhhbmRsZS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1ydWxlXScpKTtcblx0XHR0aGlzLnN1Ym1pdENhbGxiYWNrICYmIHRoaXMuZXZlbnRzQnVpbGRlcignYWRkRXZlbnRMaXN0ZW5lcicpO1xuXHRcdHRoaXMuYXBwbHlTZXR0aW5ncyhzZXR0aW5ncyB8fCB7fSk7XG5cblx0fSxcblx0ZXZlbnRzQnVpbGRlcjogZnVuY3Rpb24gKGFjdGlvbk5hbWUpIHtcblxuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXG5cdFx0dGhpcy5mb3JtSGFuZGxlW2FjdGlvbk5hbWVdKCdzdWJtaXQnLCB0aGlzLl9ldmVudFN1Ym1pdCk7XG5cblx0XHQvLyBhaXIgbW9kZVxuXHRcdHRoaXMuc2V0dGluZ3Mub25BaXIgJiYgT2JqZWN0LmtleXModGhpcy5maWVsZHMpLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG5cblx0XHRcdFtdLmZvckVhY2guY2FsbChzZWxmLnNldHRpbmdzLmV2ZW50c0xpc3QsIGZ1bmN0aW9uIChldmVudCkge1xuXG5cdFx0XHRcdGlmIChldmVudCA9PT0gJ2tleXVwJykge1xuXHRcdFx0XHRcdHNlbGYuZmllbGRzW2ZpZWxkXS5oYW5kbGVbYWN0aW9uTmFtZV0oZXZlbnQsIHNlbGYuX2V2ZW50Q2hhbmdlV2l0aERlbGF5KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZWxmLmZpZWxkc1tmaWVsZF0uaGFuZGxlW2FjdGlvbk5hbWVdKGV2ZW50LCBzZWxmLl9ldmVudENoYW5nZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cblx0fVxufTtcblxuLyoqXG4gKiBFbmNhcHN1bGF0aW9uXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gdGhpcyBoYW5kbGVcbiAqL1xuLy8gY29uc29sZS5sb2cocm9vdCwgY29tbW9uLmNsYXNzTmFtZSlcbmV4cG9ydCBjb25zdCBWYWxpZGF0b3IgPSBmdW5jdGlvbiAoKSB7XG5cblx0ZnVuY3Rpb24gY29uc3RydWN0KGNvbnN0cnVjdG9yLCBhcmdzKSB7XG5cblx0XHRmdW5jdGlvbiBDbGFzcygpIHtcblx0XHRcdHJldHVybiBjb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmdzKTtcblx0XHR9XG5cdFx0Q2xhc3MucHJvdG90eXBlID0gY29uc3RydWN0b3IucHJvdG90eXBlO1xuXHRcdHJldHVybiBuZXcgQ2xhc3MoKTtcblx0fVxuXG5cdHZhciBvcmlnaW5hbCA9IGNvbnN0cnVjdChQcm90ZWN0ZWQsIGFyZ3VtZW50cyksXG5cdFx0UHVibGljbHkgPSBmdW5jdGlvbiAoKSB7IH07XG5cblx0UHVibGljbHkucHJvdG90eXBlID0ge307XG5cdFtdLmZvckVhY2guY2FsbChjb21tb24ucHVibGljTWV0aG9kcywgZnVuY3Rpb24gKG1lbWJlcikge1xuXHRcdFB1YmxpY2x5LnByb3RvdHlwZVttZW1iZXJdID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIG9yaWdpbmFsW21lbWJlcl0uYXBwbHkob3JpZ2luYWwsIGFyZ3VtZW50cyk7XG5cdFx0fTtcblx0fSk7XG5cblx0cmV0dXJuIG5ldyBQdWJsaWNseShhcmd1bWVudHMpO1xufTtcblx0Ly8gcmV0dXJuIHJvb3RcbiIsImxldCB0YXJnZXRfZGF0ZSA9IG5ldyBEYXRlKDIwMjIsIDIsIDEsIDAsIDAsIDAsIDApOyBcclxubGV0IGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzOyBcclxubGV0IGNsb2NrX19kYXlzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwianMtZGF5c1wiKSlbMF1cclxubGV0IGNsb2NrX19ob3VycyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzLWhvdXJzXCIpKVswXVxyXG5sZXQgY2xvY2tfX21pbnV0ZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJqcy1taW51dGVzXCIpKVswXVxyXG5sZXQgY2xvY2tfX3NlY29uZHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJqcy1zZWNvbmRzXCIpKVswXVxyXG5cclxuZ2V0Q291bnRkb3duKCk7XHJcbnNldEludGVydmFsKGZ1bmN0aW9uICgpIHsgZ2V0Q291bnRkb3duKCk7IH0sIDEwMDApO1xyXG4gXHJcbmZ1bmN0aW9uIGdldENvdW50ZG93bigpe1xyXG4gXHJcbiAgbGV0IGN1cnJlbnRfZGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIGxldCBzZWNvbmRzX2xlZnQgPSAodGFyZ2V0X2RhdGUgLSBjdXJyZW50X2RhdGUpIC8gMTAwMDtcclxuIFxyXG4gICAgZGF5cyA9IHBhZCggcGFyc2VJbnQoc2Vjb25kc19sZWZ0IC8gODY0MDApICk7XHJcbiAgICBzZWNvbmRzX2xlZnQgPSBzZWNvbmRzX2xlZnQgJSA4NjQwMDtcclxuICAgICAgICAgIFxyXG4gICAgaG91cnMgPSBwYWQoIHBhcnNlSW50KHNlY29uZHNfbGVmdCAvIDM2MDApICk7XHJcbiAgICBzZWNvbmRzX2xlZnQgPSBzZWNvbmRzX2xlZnQgJSAzNjAwO1xyXG4gICAgICAgICAgIFxyXG4gICAgbWludXRlcyA9IHBhZCggcGFyc2VJbnQoc2Vjb25kc19sZWZ0IC8gNjApICk7XHJcbiAgICBzZWNvbmRzID0gcGFkKCBwYXJzZUludCggc2Vjb25kc19sZWZ0ICUgNjAgKSApO1xyXG4gXHJcblxyXG4gICAgY2xvY2tfX2RheXMuaW5uZXJIVE1MID0gIGRheXM7XHJcbiAgICBjbG9ja19faG91cnMuaW5uZXJIVE1MID0gIGhvdXJzO1xyXG4gICAgY2xvY2tfX21pbnV0ZXMuaW5uZXJIVE1MID0gIG1pbnV0ZXM7XHJcbiAgICBjbG9ja19fc2Vjb25kcy5pbm5lckhUTUwgPSAgc2Vjb25kcztcclxufVxyXG4gZnVuY3Rpb24gcGFkKG4pIHtcclxuICAgIHJldHVybiAobiA8IDEwID8gJzAnIDogJycpICsgbjtcclxufSIsIiAvLyDQuNC80L/QvtGA0YLQuNGA0YPQtdC8INCy0LDQu9C40LDQtNGC0L7RgFxyXG4gaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAncHVyZS1qcy12YWxpZGF0b3Ivc3JjL3ZhbGlkYXRvci5qcydcclxuIC8vINC60L7Qs9C00LAg0LTQvtC8INCz0L7RgtC+0LJcclxuIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgIC8vINC40YnQtdC8INCy0YHQtSDRhNC+0YDQvNGLXHJcbiAgIGNvbnN0IGZvcm1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdqcy1mb3JtLWFqYXgnKSlcclxuICAgLy8g0LjQtNC10Lwg0L/QviDQvdC40LxcclxuICAgZm9ybXMuZm9yRWFjaChmb3JtID0+IHtcclxuICAgICAvLyDRgdC+0LfQtNCw0LXQvCDQvdC+0LLRi9C5INC40L3RgdGC0LDQvdGBINCy0LDQu9C40LTQsNGC0L7RgNCwLCDQv9C+0LTQstGP0LfQsNCyINCyINC90LXQs9C+INC90LDRiNGDINGE0L7RgNC80YNcclxuICAgICBjb25zdCB2YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKGZvcm0sIGFzeW5jIGZ1bmN0aW9uIChlcnIsIGlzX3ZhbGlkKSB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGlzX3ZhbGlkKTtcclxuICAgICAgIC8vINC10YHQu9C4INGE0L7RgNC80LAg0LLQsNC70LjQtNC90LBcclxuICAgICAgIGlmIChpc192YWxpZCkge1xyXG4gICAgICAgICAvLyDQsdC10YDQtdC8INC80LXRgtC+0LQg0YEg0LTQsNGC0LAt0LDRgtGA0LjQsdGD0YLQsFxyXG4gICAgICAgICBjb25zdCBtZXRob2QgPSBmb3JtLmRhdGFzZXQubWV0aG9kXHJcbiAgICAgICAgIC8vINCx0LXRgNC10Lwg0YHRgdGL0LvQutGDINGBINC00LDRgtCwLdCw0YLRgNC40LHRg9GC0LBcclxuICAgICAgICAgY29uc3QgYWN0aW9uID0gZm9ybS5kYXRhc2V0LmFjdGlvblxyXG4gICAgICAgICAvLyDQv9C+0LvRg9GH0LDQtdC8INCy0YHQtSDRgSDQv9C+0LvQtdC5INCyINCy0LjQtNC1INGE0L7RgNC8INC00LDRgtGLXHJcbiAgICAgICAgIGNvbnN0IGJvZHkgPSBuZXcgRm9ybURhdGEoZm9ybSlcclxuICAgICAgICAgLy8g0L/RgNC10L7QsdGA0LDQt9C+0LLRi9Cy0LDQtdC8INCyIEpTT04sINGB0LzQvtGC0YDRjywg0YfRgtC+INGF0L7Rh9C10YIg0YHQtdGA0LLQtdGAXHJcbiAgICAgICAgIGNvbnN0IHZhbHVlID0gT2JqZWN0LmZyb21FbnRyaWVzKGJvZHkuZW50cmllcygpKTtcclxuICAgICAgICAgLy8g0YHQvtC30LTQsNC10Lwg0LfQsNC/0YDQvtGBINC90LAg0YLQvtGCIGFjdGlvbiwg0YfRgtC+INC90LDRiNC70LhcclxuICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhY3Rpb24sIHtcclxuICAgICAgICAgICAvLyDRgSDRgtC10Lwg0LzQtdGC0L7QtNC+0LwsINGH0YLQviDQvdCw0YjQu9C4LiDQodC+0LrRgNCw0YnQtdC90L3QsNGPINC30LDQv9C40YHRjCBtZXRob2RcclxuICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAvLyDRgtCw0Log0L3QsNC00L5cclxuICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcsXHJcbiAgICAgICAgICAgfSxcclxuICAgICAgICAgICAvLyDQv9GA0LXQstGA0LDRidCw0LXQvCDQvdCw0Ygg0L7QsdGM0LXQutGCINGBINC00LDQvdC90YvQvNC4INCyINGB0YLRgNC+0LrRgy4g0YLQsNC6INC90LDQtNC+XHJcbiAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodmFsdWUpLFxyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgLy8g0LXRgdC70Lgg0LLRgdC1INC+0LpcclxuICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgLy8g0L/RgNC+0LLQtdGA0Y/QtdC8INGH0YLQviDQvdCw0Lwg0L7RgtCy0LXRgtC40Lsg0YHQtdGA0LLQtdGAXHJcbiAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICBmb3JtLnJlc2V0KClcclxuICAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICAgIH0pXHJcbiAgIH0pXHJcbiB9KSIsIi8vINC/0L7Ri9GL0YvQtNC60LvRjtGH0LDRgtGMINGE0LDQudC70Ysg0YHRjtC00LBcbi8vIEBpbXBvcnQgJy4v0L3QsNC30LLQsNC90LjQtV/RhNCw0LnQu9CwLmpzJ1xuaW1wb3J0ICcuL3NjcmlwdC5qcydcbmltcG9ydCAnLi9mb3JtLmpzJ1xuaW1wb3J0ICcuL3NsaWNrLmpzJ1xuaW1wb3J0ICcuL3Njcm9sbC5qcydcbmltcG9ydCAnLi92aWRlby5qcydcbmltcG9ydCAnLi9jbG9jay5qcyciLCJjb25zdCBidXIgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJqcy0tYnVyZ2VyXCIpKVxyXG5jb25zdCBidXJCb3ggPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJqcy0tYnVyZ2VyX2l0ZW1cIikpWzBdXHJcbmNvbnN0IHN0cmlwID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwianMtLWJ1cmdlcl9zdHJpcFwiKSlbMF1cclxuY29uc3QgbWVudUJveCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzLS1tZW51XCIpKVswXVxyXG5jb25zdCBib2R5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYm9keVwiKSlbMF1cclxuXHJcblxyXG5idXIuZm9yRWFjaChcclxuICAgIGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgLyogZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tlZCcpICovXHJcbiAgICAgIFx0bWVudUJveC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmVfYnVyZ2VyJylcclxuICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmZsb3cnKVxyXG4gICAgICAgICAgICBidXJCb3guY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJylcclxuICAgICAgICAgICAgc3RyaXAuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlX3N0cmlwJylcclxuICAgICAgICAgICAgXHJcbiAgfSlcclxufSkiLCJjb25zdCBzY3JvbGx1cCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzLXNjcm9sbHVwXCIpKVswXVxyXG5jb25zdCBoZWFkZXIgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJqcy1oZWFkZXJcIikpWzBdXHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcbiAgaWYgKCB0b3AgPj0gMTAwICkge1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItYWN0aXZlXCIpXHJcbiAgfSBlbHNlIGlmICggdG9wIDw9IDIwMCApIHtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyLWFjdGl2ZVwiKVxyXG4gIH1cclxuXHJcbiAgaWYgKCB0b3AgPj0gMjAwICkge1xyXG4gICAgc2Nyb2xsdXAuY2xhc3NMaXN0LmFkZChcImlzLWFjdGl2ZS1ib3hcIilcclxuICB9IGVsc2UgaWYgKCB0b3AgPD0gMzAwICkge1xyXG4gICAgc2Nyb2xsdXAuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZS1ib3hcIilcclxuICB9XHJcbn0pOyIsIlxyXG4kKCcuanMtc2xpZGVyJykuc2xpY2soe1xyXG4gICAgLy9kb3RzOiB0cnVlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBhcnJvd3M6dHJ1ZSxcclxuICAgIHNwZWVkOiAzMDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBhcHBlbmRBcnJvd3M6Jy5qcy1hcnJvd3MnLFxyXG4gICAgcHJldkFycm93Oic8YT48aW1nIGNsYXNzPVwic2xpZGVyLXdyYXBfX2Fycm93c1wiIHNyYz1cIi4uL3N0YXRpYy9pbWcvaWNvbnMvY2hldnJvbl9kb3duLnN2Z1wiPjwvYT4nLFxyXG4gICAgbmV4dEFycm93Oic8YT48aW1nIGNsYXNzPVwic2xpZGVyLXdyYXBfX2Fycm93c1wiIHNyYz1cIi4uL3N0YXRpYy9pbWcvaWNvbnMvbmV4dC5zdmdcIj48L2E+JyxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgIGluZmluaXRlOiB0cnVlXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDkwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBZb3UgY2FuIHVuc2xpY2sgYXQgYSBnaXZlbiBicmVha3BvaW50IG5vdyBieSBhZGRpbmc6XHJcbiAgICAgIC8vIHNldHRpbmdzOiBcInVuc2xpY2tcIlxyXG4gICAgICAvLyBpbnN0ZWFkIG9mIGEgc2V0dGluZ3Mgb2JqZWN0XHJcbiAgICBdXHJcbiAgfSk7XHJcbiAgXHJcbiAgJCgnLmpzLXNwb25zb3JzJykuc2xpY2soe1xyXG4gICAgYXJyb3dzOmZhbHNlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDMwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogNixcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgIGluZmluaXRlOiB0cnVlXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgaW5maW5pdGU6IHRydWVcclxuICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNjAwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIFlvdSBjYW4gdW5zbGljayBhdCBhIGdpdmVuIGJyZWFrcG9pbnQgbm93IGJ5IGFkZGluZzpcclxuICAgICAgLy8gc2V0dGluZ3M6IFwidW5zbGlja1wiXHJcbiAgICAgIC8vIGluc3RlYWQgb2YgYSBzZXR0aW5ncyBvYmplY3RcclxuICAgIF1cclxuICB9KTsiLCJjb25zdCB2aWRlbyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzLXZpZGVvXCIpKVswXVxyXG5jb25zdCBzdmcgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJqcy1zdmdcIikpXHJcbmNvbnN0IHBsID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwianMtcGxcIikpWzBdXHJcbmNvbnN0IGppbWdCZyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzLWltZ0JnXCIpKVswXVxyXG5jb25zdCBwbGF5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwianMtcGxheVwiKSlcclxuXHJcblxyXG5wbGF5LmZvckVhY2goXHJcbiAgZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIC8qIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrZWQnKSAqL1xyXG4gICBcclxuICAgICAgXHJcbiAgICAgIGppbWdCZy5jbGFzc0xpc3QudG9nZ2xlKCdpcy1ub25lJylcclxuICAgICAgdmlkZW8uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlLWJveCcpXHJcbiAgICAgIHBsLmNsYXNzTGlzdC50b2dnbGUoJ2ZpbGwtbm9uZScpXHJcbiAgICBcclxuICAgXHJcbnN2Zy5mb3JFYWNoKCBmdW5jdGlvbihjdXJyZW50VmFsdWUpIHtcclxuICAgICAgIGN1cnJlbnRWYWx1ZS5jbGFzc0xpc3QudG9nZ2xlKCdmaWxsLWFkZCcpXHJcbn1cclxuICApOyBcclxuXHJcbiAgICAgIFxyXG59KVxyXG59KVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==