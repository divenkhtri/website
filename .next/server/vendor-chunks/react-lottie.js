"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-lottie";
exports.ids = ["vendor-chunks/react-lottie"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-lottie/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-lottie/dist/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"(ssr)/./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"(ssr)/./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"(ssr)/./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"(ssr)/./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"(ssr)/./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"(ssr)/./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"(ssr)/./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _lottieWeb = __webpack_require__(/*! lottie-web */ \"(ssr)/./node_modules/lottie-web/build/player/lottie.js\");\n\nvar _lottieWeb2 = _interopRequireDefault(_lottieWeb);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Lottie = function (_React$Component) {\n  (0, _inherits3.default)(Lottie, _React$Component);\n\n  function Lottie() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    (0, _classCallCheck3.default)(this, Lottie);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Lottie.__proto__ || (0, _getPrototypeOf2.default)(Lottie)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickToPause = function () {\n      // The pause() method is for handling pausing by passing a prop isPaused\n      // This method is for handling the ability to pause by clicking on the animation\n      if (_this.anim.isPaused) {\n        _this.anim.play();\n      } else {\n        _this.anim.pause();\n      }\n    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);\n  }\n\n  (0, _createClass3.default)(Lottie, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _props = this.props,\n          options = _props.options,\n          eventListeners = _props.eventListeners;\n      var loop = options.loop,\n          autoplay = options.autoplay,\n          animationData = options.animationData,\n          rendererSettings = options.rendererSettings,\n          segments = options.segments;\n\n\n      this.options = {\n        container: this.el,\n        renderer: 'svg',\n        loop: loop !== false,\n        autoplay: autoplay !== false,\n        segments: segments !== false,\n        animationData: animationData,\n        rendererSettings: rendererSettings\n      };\n\n      this.options = (0, _extends3.default)({}, this.options, options);\n\n      this.anim = _lottieWeb2.default.loadAnimation(this.options);\n      this.registerEvents(eventListeners);\n    }\n  }, {\n    key: 'componentWillUpdate',\n    value: function componentWillUpdate(nextProps /* , nextState */) {\n      /* Recreate the animation handle if the data is changed */\n      if (this.options.animationData !== nextProps.options.animationData) {\n        this.deRegisterEvents(this.props.eventListeners);\n        this.destroy();\n        this.options = (0, _extends3.default)({}, this.options, nextProps.options);\n        this.anim = _lottieWeb2.default.loadAnimation(this.options);\n        this.registerEvents(nextProps.eventListeners);\n      }\n    }\n  }, {\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate() {\n      if (this.props.isStopped) {\n        this.stop();\n      } else if (this.props.segments) {\n        this.playSegments();\n      } else {\n        this.play();\n      }\n\n      this.pause();\n      this.setSpeed();\n      this.setDirection();\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      this.deRegisterEvents(this.props.eventListeners);\n      this.destroy();\n      this.options.animationData = null;\n      this.anim = null;\n    }\n  }, {\n    key: 'setSpeed',\n    value: function setSpeed() {\n      this.anim.setSpeed(this.props.speed);\n    }\n  }, {\n    key: 'setDirection',\n    value: function setDirection() {\n      this.anim.setDirection(this.props.direction);\n    }\n  }, {\n    key: 'play',\n    value: function play() {\n      this.anim.play();\n    }\n  }, {\n    key: 'playSegments',\n    value: function playSegments() {\n      this.anim.playSegments(this.props.segments);\n    }\n  }, {\n    key: 'stop',\n    value: function stop() {\n      this.anim.stop();\n    }\n  }, {\n    key: 'pause',\n    value: function pause() {\n      if (this.props.isPaused && !this.anim.isPaused) {\n        this.anim.pause();\n      } else if (!this.props.isPaused && this.anim.isPaused) {\n        this.anim.pause();\n      }\n    }\n  }, {\n    key: 'destroy',\n    value: function destroy() {\n      this.anim.destroy();\n    }\n  }, {\n    key: 'registerEvents',\n    value: function registerEvents(eventListeners) {\n      var _this2 = this;\n\n      eventListeners.forEach(function (eventListener) {\n        _this2.anim.addEventListener(eventListener.eventName, eventListener.callback);\n      });\n    }\n  }, {\n    key: 'deRegisterEvents',\n    value: function deRegisterEvents(eventListeners) {\n      var _this3 = this;\n\n      eventListeners.forEach(function (eventListener) {\n        _this3.anim.removeEventListener(eventListener.eventName, eventListener.callback);\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this4 = this;\n\n      var _props2 = this.props,\n          width = _props2.width,\n          height = _props2.height,\n          ariaRole = _props2.ariaRole,\n          ariaLabel = _props2.ariaLabel,\n          isClickToPauseDisabled = _props2.isClickToPauseDisabled,\n          title = _props2.title;\n\n\n      var getSize = function getSize(initial) {\n        var size = void 0;\n\n        if (typeof initial === 'number') {\n          size = initial + 'px';\n        } else {\n          size = initial || '100%';\n        }\n\n        return size;\n      };\n\n      var lottieStyles = (0, _extends3.default)({\n        width: getSize(width),\n        height: getSize(height),\n        overflow: 'hidden',\n        margin: '0 auto',\n        outline: 'none'\n      }, this.props.style);\n\n      var onClickHandler = isClickToPauseDisabled ? function () {\n        return null;\n      } : this.handleClickToPause;\n\n      return (\n        // Bug with eslint rules https://github.com/airbnb/javascript/issues/1374\n        // eslint-disable-next-line jsx-a11y/no-static-element-interactions\n        _react2.default.createElement('div', {\n          ref: function ref(c) {\n            _this4.el = c;\n          },\n          style: lottieStyles,\n          onClick: onClickHandler,\n          title: title,\n          role: ariaRole,\n          'aria-label': ariaLabel,\n          tabIndex: '0'\n        })\n      );\n    }\n  }]);\n  return Lottie;\n}(_react2.default.Component);\n\nexports[\"default\"] = Lottie;\n\n\nLottie.propTypes = {\n  eventListeners: _propTypes2.default.arrayOf(_propTypes2.default.object),\n  options: _propTypes2.default.object.isRequired,\n  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),\n  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),\n  isStopped: _propTypes2.default.bool,\n  isPaused: _propTypes2.default.bool,\n  speed: _propTypes2.default.number,\n  segments: _propTypes2.default.arrayOf(_propTypes2.default.number),\n  direction: _propTypes2.default.number,\n  ariaRole: _propTypes2.default.string,\n  ariaLabel: _propTypes2.default.string,\n  isClickToPauseDisabled: _propTypes2.default.bool,\n  title: _propTypes2.default.string,\n  style: _propTypes2.default.string\n};\n\nLottie.defaultProps = {\n  eventListeners: [],\n  isStopped: false,\n  isPaused: false,\n  speed: 1,\n  ariaRole: 'button',\n  ariaLabel: 'animation',\n  isClickToPauseDisabled: false,\n  title: ''\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtbG90dGllL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDOztBQUVGLGdCQUFnQixtQkFBTyxDQUFDLDRGQUErQjs7QUFFdkQ7O0FBRUEsc0JBQXNCLG1CQUFPLENBQUMsNEhBQStDOztBQUU3RTs7QUFFQSx1QkFBdUIsbUJBQU8sQ0FBQywwR0FBc0M7O0FBRXJFOztBQUVBLG9CQUFvQixtQkFBTyxDQUFDLG9HQUFtQzs7QUFFL0Q7O0FBRUEsa0NBQWtDLG1CQUFPLENBQUMsZ0lBQWlEOztBQUUzRjs7QUFFQSxpQkFBaUIsbUJBQU8sQ0FBQyw4RkFBZ0M7O0FBRXpEOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyx3R0FBTzs7QUFFNUI7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsNERBQVk7O0FBRXJDOztBQUVBLGlCQUFpQixtQkFBTyxDQUFDLDBFQUFZOztBQUVyQzs7QUFFQSx1Q0FBdUMsdUNBQXVDOztBQUU5RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsb0VBQW9FLGFBQWE7QUFDakY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVELGtCQUFlOzs7QUFHZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1bGxzdGFjay8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb3R0aWUvZGlzdC9pbmRleC5qcz84OTkxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2xvdHRpZVdlYiA9IHJlcXVpcmUoJ2xvdHRpZS13ZWInKTtcblxudmFyIF9sb3R0aWVXZWIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG90dGllV2ViKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIExvdHRpZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKExvdHRpZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTG90dGllKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIExvdHRpZSk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBMb3R0aWUuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKExvdHRpZSkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmhhbmRsZUNsaWNrVG9QYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFRoZSBwYXVzZSgpIG1ldGhvZCBpcyBmb3IgaGFuZGxpbmcgcGF1c2luZyBieSBwYXNzaW5nIGEgcHJvcCBpc1BhdXNlZFxuICAgICAgLy8gVGhpcyBtZXRob2QgaXMgZm9yIGhhbmRsaW5nIHRoZSBhYmlsaXR5IHRvIHBhdXNlIGJ5IGNsaWNraW5nIG9uIHRoZSBhbmltYXRpb25cbiAgICAgIGlmIChfdGhpcy5hbmltLmlzUGF1c2VkKSB7XG4gICAgICAgIF90aGlzLmFuaW0ucGxheSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuYW5pbS5wYXVzZSgpO1xuICAgICAgfVxuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShMb3R0aWUsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9wdGlvbnMgPSBfcHJvcHMub3B0aW9ucyxcbiAgICAgICAgICBldmVudExpc3RlbmVycyA9IF9wcm9wcy5ldmVudExpc3RlbmVycztcbiAgICAgIHZhciBsb29wID0gb3B0aW9ucy5sb29wLFxuICAgICAgICAgIGF1dG9wbGF5ID0gb3B0aW9ucy5hdXRvcGxheSxcbiAgICAgICAgICBhbmltYXRpb25EYXRhID0gb3B0aW9ucy5hbmltYXRpb25EYXRhLFxuICAgICAgICAgIHJlbmRlcmVyU2V0dGluZ3MgPSBvcHRpb25zLnJlbmRlcmVyU2V0dGluZ3MsXG4gICAgICAgICAgc2VnbWVudHMgPSBvcHRpb25zLnNlZ21lbnRzO1xuXG5cbiAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgY29udGFpbmVyOiB0aGlzLmVsLFxuICAgICAgICByZW5kZXJlcjogJ3N2ZycsXG4gICAgICAgIGxvb3A6IGxvb3AgIT09IGZhbHNlLFxuICAgICAgICBhdXRvcGxheTogYXV0b3BsYXkgIT09IGZhbHNlLFxuICAgICAgICBzZWdtZW50czogc2VnbWVudHMgIT09IGZhbHNlLFxuICAgICAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb25EYXRhLFxuICAgICAgICByZW5kZXJlclNldHRpbmdzOiByZW5kZXJlclNldHRpbmdzXG4gICAgICB9O1xuXG4gICAgICB0aGlzLm9wdGlvbnMgPSAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgICB0aGlzLmFuaW0gPSBfbG90dGllV2ViMi5kZWZhdWx0LmxvYWRBbmltYXRpb24odGhpcy5vcHRpb25zKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoZXZlbnRMaXN0ZW5lcnMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcyAvKiAsIG5leHRTdGF0ZSAqLykge1xuICAgICAgLyogUmVjcmVhdGUgdGhlIGFuaW1hdGlvbiBoYW5kbGUgaWYgdGhlIGRhdGEgaXMgY2hhbmdlZCAqL1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbmltYXRpb25EYXRhICE9PSBuZXh0UHJvcHMub3B0aW9ucy5hbmltYXRpb25EYXRhKSB7XG4gICAgICAgIHRoaXMuZGVSZWdpc3RlckV2ZW50cyh0aGlzLnByb3BzLmV2ZW50TGlzdGVuZXJzKTtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIHRoaXMub3B0aW9ucywgbmV4dFByb3BzLm9wdGlvbnMpO1xuICAgICAgICB0aGlzLmFuaW0gPSBfbG90dGllV2ViMi5kZWZhdWx0LmxvYWRBbmltYXRpb24odGhpcy5vcHRpb25zKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhuZXh0UHJvcHMuZXZlbnRMaXN0ZW5lcnMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmlzU3RvcHBlZCkge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5zZWdtZW50cykge1xuICAgICAgICB0aGlzLnBsYXlTZWdtZW50cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgIHRoaXMuc2V0U3BlZWQoKTtcbiAgICAgIHRoaXMuc2V0RGlyZWN0aW9uKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuZGVSZWdpc3RlckV2ZW50cyh0aGlzLnByb3BzLmV2ZW50TGlzdGVuZXJzKTtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgdGhpcy5vcHRpb25zLmFuaW1hdGlvbkRhdGEgPSBudWxsO1xuICAgICAgdGhpcy5hbmltID0gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRTcGVlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFNwZWVkKCkge1xuICAgICAgdGhpcy5hbmltLnNldFNwZWVkKHRoaXMucHJvcHMuc3BlZWQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldERpcmVjdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldERpcmVjdGlvbigpIHtcbiAgICAgIHRoaXMuYW5pbS5zZXREaXJlY3Rpb24odGhpcy5wcm9wcy5kaXJlY3Rpb24pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3BsYXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgdGhpcy5hbmltLnBsYXkoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwbGF5U2VnbWVudHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5U2VnbWVudHMoKSB7XG4gICAgICB0aGlzLmFuaW0ucGxheVNlZ21lbnRzKHRoaXMucHJvcHMuc2VnbWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N0b3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdGhpcy5hbmltLnN0b3AoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwYXVzZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuaXNQYXVzZWQgJiYgIXRoaXMuYW5pbS5pc1BhdXNlZCkge1xuICAgICAgICB0aGlzLmFuaW0ucGF1c2UoKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMucHJvcHMuaXNQYXVzZWQgJiYgdGhpcy5hbmltLmlzUGF1c2VkKSB7XG4gICAgICAgIHRoaXMuYW5pbS5wYXVzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rlc3Ryb3knLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdGhpcy5hbmltLmRlc3Ryb3koKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZWdpc3RlckV2ZW50cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRzKGV2ZW50TGlzdGVuZXJzKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBfdGhpczIuYW5pbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TGlzdGVuZXIuZXZlbnROYW1lLCBldmVudExpc3RlbmVyLmNhbGxiYWNrKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2RlUmVnaXN0ZXJFdmVudHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZVJlZ2lzdGVyRXZlbnRzKGV2ZW50TGlzdGVuZXJzKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBfdGhpczMuYW5pbS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TGlzdGVuZXIuZXZlbnROYW1lLCBldmVudExpc3RlbmVyLmNhbGxiYWNrKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgd2lkdGggPSBfcHJvcHMyLndpZHRoLFxuICAgICAgICAgIGhlaWdodCA9IF9wcm9wczIuaGVpZ2h0LFxuICAgICAgICAgIGFyaWFSb2xlID0gX3Byb3BzMi5hcmlhUm9sZSxcbiAgICAgICAgICBhcmlhTGFiZWwgPSBfcHJvcHMyLmFyaWFMYWJlbCxcbiAgICAgICAgICBpc0NsaWNrVG9QYXVzZURpc2FibGVkID0gX3Byb3BzMi5pc0NsaWNrVG9QYXVzZURpc2FibGVkLFxuICAgICAgICAgIHRpdGxlID0gX3Byb3BzMi50aXRsZTtcblxuXG4gICAgICB2YXIgZ2V0U2l6ZSA9IGZ1bmN0aW9uIGdldFNpemUoaW5pdGlhbCkge1xuICAgICAgICB2YXIgc2l6ZSA9IHZvaWQgMDtcblxuICAgICAgICBpZiAodHlwZW9mIGluaXRpYWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgc2l6ZSA9IGluaXRpYWwgKyAncHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNpemUgPSBpbml0aWFsIHx8ICcxMDAlJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzaXplO1xuICAgICAgfTtcblxuICAgICAgdmFyIGxvdHRpZVN0eWxlcyA9ICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe1xuICAgICAgICB3aWR0aDogZ2V0U2l6ZSh3aWR0aCksXG4gICAgICAgIGhlaWdodDogZ2V0U2l6ZShoZWlnaHQpLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICAgIG91dGxpbmU6ICdub25lJ1xuICAgICAgfSwgdGhpcy5wcm9wcy5zdHlsZSk7XG5cbiAgICAgIHZhciBvbkNsaWNrSGFuZGxlciA9IGlzQ2xpY2tUb1BhdXNlRGlzYWJsZWQgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSA6IHRoaXMuaGFuZGxlQ2xpY2tUb1BhdXNlO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAvLyBCdWcgd2l0aCBlc2xpbnQgcnVsZXMgaHR0cHM6Ly9naXRodWIuY29tL2FpcmJuYi9qYXZhc2NyaXB0L2lzc3Vlcy8xMzc0XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnNcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihjKSB7XG4gICAgICAgICAgICBfdGhpczQuZWwgPSBjO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3R5bGU6IGxvdHRpZVN0eWxlcyxcbiAgICAgICAgICBvbkNsaWNrOiBvbkNsaWNrSGFuZGxlcixcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgcm9sZTogYXJpYVJvbGUsXG4gICAgICAgICAgJ2FyaWEtbGFiZWwnOiBhcmlhTGFiZWwsXG4gICAgICAgICAgdGFiSW5kZXg6ICcwJ1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIExvdHRpZTtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExvdHRpZTtcblxuXG5Mb3R0aWUucHJvcFR5cGVzID0ge1xuICBldmVudExpc3RlbmVyczogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0KSxcbiAgb3B0aW9uczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZCxcbiAgaGVpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gIHdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gIGlzU3RvcHBlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBpc1BhdXNlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBzcGVlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHNlZ21lbnRzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIpLFxuICBkaXJlY3Rpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBhcmlhUm9sZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGFyaWFMYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGlzQ2xpY2tUb1BhdXNlRGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgdGl0bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbn07XG5cbkxvdHRpZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGV2ZW50TGlzdGVuZXJzOiBbXSxcbiAgaXNTdG9wcGVkOiBmYWxzZSxcbiAgaXNQYXVzZWQ6IGZhbHNlLFxuICBzcGVlZDogMSxcbiAgYXJpYVJvbGU6ICdidXR0b24nLFxuICBhcmlhTGFiZWw6ICdhbmltYXRpb24nLFxuICBpc0NsaWNrVG9QYXVzZURpc2FibGVkOiBmYWxzZSxcbiAgdGl0bGU6ICcnXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-lottie/dist/index.js\n");

/***/ })

};
;