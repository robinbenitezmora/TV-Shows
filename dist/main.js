/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  list-style: none;\\r\\n  text-decoration: none;\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  padding: 2rem;\\r\\n  background-color: rgb(137, 135, 126);\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  height: auto;\\r\\n  gap: 2rem;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: auto;\\r\\n  z-index: 1;\\r\\n  border: 1px solid #000;\\r\\n  border-radius: 1rem;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.popup__close {\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n  text-align: center;\\r\\n  font-size: 3rem;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.popup__content {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.popup__image {\\r\\n  width: 100%;\\r\\n  height: auto;\\r\\n  border-radius: 1rem;\\r\\n  margin: 1rem 0;\\r\\n}\\r\\n\\r\\n.popup__description {\\r\\n  font-size: 1rem;\\r\\n  font-weight: 300;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.popup__category {\\r\\n  font-size: 1rem;\\r\\n  font-weight: 600;\\r\\n  text-align: center;\\r\\n  padding: 1rem 0;\\r\\n}\\r\\n\\r\\n.popup__title {\\r\\n  text-align: center;\\r\\n  font-size: 3rem;\\r\\n  font-weight: 700;\\r\\n  padding-top: 1rem;\\r\\n}\\r\\n\\r\\n.popup__title-form {\\r\\n  text-align: center;\\r\\n  font-weight: 700;\\r\\n  margin-top: 1rem;\\r\\n}\\r\\n\\r\\n.popup__form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: flex-start;\\r\\n  width: 100%;\\r\\n  height: auto;\\r\\n  gap: 1rem;\\r\\n  padding: 0 1rem;\\r\\n}\\r\\n\\r\\n.popup__name-form {\\r\\n  width: 70%;\\r\\n  height: 2rem;\\r\\n  padding: 0.5rem;\\r\\n  border: 1px solid rgb(59, 45, 45);\\r\\n  border-radius: 5px;\\r\\n  margin: 0.5rem 0;\\r\\n}\\r\\n\\r\\n.popup__comment-form {\\r\\n  width: 80%;\\r\\n  height: 10rem;\\r\\n  padding: 0.5rem;\\r\\n  border: 1px solid rgb(59, 45, 45);\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.popup__submit-form {\\r\\n  width: 50%;\\r\\n  height: 2rem;\\r\\n  padding: 0.5rem;\\r\\n  border: 1px solid rgb(59, 45, 45);\\r\\n  border-radius: 5px;\\r\\n  margin: 0.5rem 0;\\r\\n  background-color: rgb(59, 45, 45);\\r\\n  color: white;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 768px) {\\r\\n  .popup {\\r\\n    padding: 2rem 5rem;\\r\\n  }\\r\\n\\r\\n  .popup__title {\\r\\n    text-align: center;\\r\\n    font-size: 5rem;\\r\\n    font-weight: 700;\\r\\n    padding-top: 1rem;\\r\\n  }\\r\\n\\r\\n  p {\\r\\n    font-size: 1.5rem;\\r\\n    text-align: justify;\\r\\n    padding: 0.5rem;\\r\\n  }\\r\\n\\r\\n  .popup__category {\\r\\n    font-size: 1.5rem;\\r\\n    margin: 0.5rem 0 3rem 0;\\r\\n  }\\r\\n\\r\\n  .popup__name-form {\\r\\n    height: 3rem;\\r\\n    border-radius: 8px;\\r\\n  }\\r\\n\\r\\n  .popup__comment-form {\\r\\n    height: 12rem;\\r\\n    border-radius: 8px;\\r\\n  }\\r\\n\\r\\n  .popup__title-form {\\r\\n    font-size: 2rem;\\r\\n  }\\r\\n\\r\\n  .popup__submit-form {\\r\\n    font-size: 1.5rem;\\r\\n    width: 15rem;\\r\\n    height: 3rem;\\r\\n    border-radius: 8px;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _modules_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _modules_asyncApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/asyncApi.js */ \"./src/modules/asyncApi.js\");\n/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/popup.js */ \"./src/modules/popup.js\");\n\n\n\n\n\nconst amountMovies = document.getElementsByTagName('h3');\n\nconst updateLikes = async () => {\n  const response = await (0,_modules_asyncApi_js__WEBPACK_IMPORTED_MODULE_2__.catchLikes)();\n  document.querySelectorAll('.starCount').forEach((button) => {\n    for (let i = 0; i < response.length; i += 1) {\n      if (response[i].item_id === Number(button.id)) {\n        button.lastChild.textContent = response[i].likes;\n      }\n    }\n  });\n};\n\nconst cards = document.querySelector('.cards');\nconst createElement = async (requestUrl) => {\n  cards.innerHTML = '';\n  await (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(requestUrl)\n\n    .then((data) => {\n      let amountElement = 0;\n      const dataArray = data.embedded.episodes;\n      dataArray.forEach((item) => {\n        const div = document.createElement('div');\n        div.classList.add('cardItem');\n        const img = document.createElement('div');\n        img.classList.add('cardImg');\n        img.style.backgroundImage = `url(${item.image.original})`;\n        const title = document.createElement('h1');\n        title.classList.add('cardTitle');\n        title.textContent = `S${item.season_number}E${item.episode_number} ${item.name}`;\n        const description = document.createElement('p');\n        description.classList.add('cardDescription');\n        description.innerHTML = `Plot Summary: <br> ${item.overview}`;\n        const h3 = document.createElement('h3');\n        h3.classList.add('cardRuntime');\n        h3.textContent = `Runtime: ${item.runtime} mins Rating: ${item.rating}`;\n\n        const stars = document.createElement('div');\n        stars.classList.add('stars');\n\n        const starRate = document.createElement('span');\n        starRate.classList.add('material-icons-round');\n        starRate.classList.add('icons');\n        starRate.classList.add('starRate');\n        starRate.textContent = 'Rate of Stars';\n\n        const starCount = document.createElement('span');\n        starCount.classList.add('starCount');\n        starCount.setAttribute('id', item.id);\n        starCount.textContent = '0';\n\n        const starBorder = document.createElement('span');\n        starBorder.classList.add('material-icons-round');\n        starBorder.classList.add('starBorder');\n        starBorder.textContent = 'star_border';\n        starBorder.setAttribute('id', item.id);\n        starBorder.classList.add('icons');\n\n        starBorder.addEventListener('click', () => {\n          (0,_modules_asyncApi_js__WEBPACK_IMPORTED_MODULE_2__.submitLikes)(item.show.id);\n          starBorder.classList.toggle('liked');\n          starCount.setAttribute('disabled', true);\n          setTimeout(updateLikes, 400);\n        });\n\n        const commentBtn = document.createElement('button');\n        commentBtn.classList.add('commentBtn');\n        commentBtn.textContent = 'Comment';\n        stars.append(starRate, starCount, starBorder);\n        div.append(img, title, description, h3, stars, commentBtn);\n        cards.append(div);\n        amountElement += 1;\n        amountMovies.textContent = `There are ${amountElement} movies`;\n      });\n    });\n};\ncreateElement('https://api.tvmaze.com/shows');\n\nconst createElementForMovies = async (requestUrl) => {\n  cards.innerHTML = '';\n  await (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(requestUrl)\n    .then((data) => {\n      let amountElement = 0;\n      data.forEach((item) => {\n        const div = document.createElement('div');\n        div.classList.add('cardItem');\n        const img = document.createElement('div');\n        img.classList.add('cardImg');\n        img.style.backgroundImage = `url(${item.image.original})`;\n        const title = document.createElement('h1');\n        title.classList.add('cardTitle');\n        title.textContent = `${item.title}`;\n\n        const stars = document.createElement('div');\n        stars.classList.add('stars');\n\n        const starRate = document.createElement('span');\n        starRate.classList.add('material-icons-round');\n        starRate.classList.add('icons');\n        starRate.classList.add('starRate');\n        starRate.textContent = 'Rate of Stars';\n\n        const starCount = document.createElement('span');\n        starCount.classList.add('starCount');\n        starCount.setAttribute('id', item.id);\n        starCount.textContent = '0';\n\n        const starBorder = document.createElement('span');\n        starBorder.classList.add('material-icons-round');\n        starBorder.classList.add('starBorder');\n        starBorder.textContent = 'star_border';\n        starBorder.setAttribute('id', item.id);\n        starBorder.classList.add('icons');\n\n        starBorder.addEventListener('click', () => {\n          (0,_modules_asyncApi_js__WEBPACK_IMPORTED_MODULE_2__.submitLikes)(item.id);\n          starBorder.classList.toggle('liked');\n          starCount.setAttribute('disabled', true);\n          setTimeout(updateLikes, 400);\n        });\n\n        const commentBtn = document.createElement('button');\n        commentBtn.classList.add('commentBtn');\n        commentBtn.textContent = 'Comment';\n        commentBtn.setAttribute('id', item.id);\n        stars.append(starRate, starCount, starBorder);\n        div.append(img, title, stars, commentBtn);\n        cards.append(div);\n        amountElement += 1;\n        amountMovies.textContent = `There are ${amountElement} movies`;\n\n        commentBtn.addEventListener('click', () => {\n          (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(item.id);\n        });\n      });\n    });\n};\n\nwindow.addEventListener('load', () => {\n  const search = 'https://api.tvmaze.com/shows';\n  createElementForMovies(search);\n  setTimeout(updateLikes, 400);\n});\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst info = async (url) => {\n  const response = await fetch(url);\n  const data = await response.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (info);\n\n//# sourceURL=webpack://todolist/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/asyncApi.js":
/*!*********************************!*\
  !*** ./src/modules/asyncApi.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"catchComments\": () => (/* binding */ catchComments),\n/* harmony export */   \"catchLikes\": () => (/* binding */ catchLikes),\n/* harmony export */   \"submitComments\": () => (/* binding */ submitComments),\n/* harmony export */   \"submitLikes\": () => (/* binding */ submitLikes)\n/* harmony export */ });\nconst url = 'https://api.themoviedb.org/3/movie/550?api_key=346a39160688fd6b7c615712dce07126';\nconst idApp = '345Y6E73yjavl4eR3trH';\n\nconst submitLikes = async (elementId) => {\n  const response = await fetch(`${url}${idApp}/likes`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ item_id: elementId }),\n  });\n  const data = await response.text();\n  return data;\n};\n\nconst catchLikes = async () => {\n  const response = await fetch(`${url}${idApp}/likes`);\n  const likes = await response.json();\n  return likes;\n};\n\nconst submitComments = async (_id, _name, _comment) => {\n  const response = await fetch(`${url}${idApp}/comments`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: _id,\n      name: _name,\n      comment: _comment,\n    }),\n  });\n  const post = await response.text();\n  return post;\n};\n\nconst catchComments = async (_id) => {\n  const response = await fetch(`${url}${idApp}/comments/${_id}`);\n  const comments = await response.json();\n  return comments;\n};\n\n\n\n\n//# sourceURL=webpack://todolist/./src/modules/asyncApi.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _asyncApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asyncApi.js */ \"./src/modules/asyncApi.js\");\n\n\nlet commentsCount = 0;\n\nconst popup = (id) => {\n  let i = 0;\n  const body = document.querySelector('body');\n  const popup = document.createElement('div');\n  const popupContent = document.createElement('div');\n  const popupTitle = document.createElement('h2');\n  const popupRating = document.createElement('div');\n  const popupScore = document.createElement('h3');\n  const popupImage = document.createElement('img');\n  const popupDescription = document.createElement('p');\n  const popupSubTitle = document.createElement('h3');\n  const popupCategory = document.createElement('p');\n  const popupCommmentUl = document.createElement('ul');\n  const popupForm = document.createElement('form');\n  const popupTitleForm = document.createElement('h2');\n  const popupNameForm = document.createElement('input');\n  const popupMessageForm = document.createElement('textarea');\n  const popupSubmitForm = document.createElement('button');\n  const popupClose = document.createElement('div');\n\n  popup.classList.add('popup');\n  popupContent.classList.add('popup__content');\n  popupTitle.classList.add('popup__title');\n  popupRating.classList.add('popup__rating');\n  popupScore.classList.add('popup__score');\n  popupClose.classList.add('popup__close');\n  popupImage.classList.add('popup__image');\n  popupDescription.classList.add('popup__description');\n  popupCategory.classList.add('popup__category');\n  popupSubTitle.classList.add('popup__subtitle');\n  popupCommmentUl.classList.add('popup__comment-ul');\n  popupForm.classList.add('popup__form');\n  popupTitleForm.classList.add('popup__title-form');\n  popupNameForm.classList.add('popup__name-form');\n  popupMessageForm.classList.add('popup__comment-form');\n  popupSubmitForm.classList.add('popup__submit-form');\n\n  popupScore.setAttribute('id', 'popupScore');\n  popupSubTitle.setAttribute('id', 'popupSubTitle');\n  popupTitleForm.setAttribute('id', 'popupTitleForm');\n  popupNameForm.setAttribute('name', 'name');\n  popupNameForm.setAttribute('placeholder', 'Name');\n  popupNameForm.setAttribute('type', 'text');\n  popupNameForm.setAttribute('required', '');\n  popupNameForm.setAttribute('maxlength', '20');\n  popupMessageForm.setAttribute('name', 'message');\n  popupMessageForm.setAttribute('placeholder', 'Comment');\n  popupMessageForm.setAttribute('type', 'text');\n  popupMessageForm.setAttribute('required', '');\n  popupMessageForm.setAttribute('maxlength', '500');\n  popupSubmitForm.setAttribute('type', 'submit');\n  popupClose.setAttribute('type', 'button');\n  popupClose.setAttribute('id', 'popupClose');\n  body.appendChild(popup);\n  popup.appendChild(popupContent);\n  popupContent.appendChild(popupTitle);\n  popupContent.appendChild(popupRating);\n  popupContent.appendChild(popupScore);\n  popupContent.appendChild(popupClose);\n  popupContent.appendChild(popupImage);\n  popupContent.appendChild(popupDescription);\n  popupContent.appendChild(popupCategory);\n  popupContent.appendChild(popupSubTitle);\n  popupContent.appendChild(popupCommmentUl);\n  popupContent.appendChild(popupForm);\n  popupForm.appendChild(popupTitleForm);\n  popupForm.appendChild(popupNameForm);\n  popupForm.appendChild(popupMessageForm);\n  popupForm.appendChild(popupSubmitForm);\n\n  const popupInfo = async () => {\n    const apiUrl = `https://api.tvmaze.com/shows/${id}`;\n    const result = await fetch(apiUrl);\n    const data = await result.json();\n\n    document.querySelector('.popup__title').innerHTML = data.name;\n    document.querySelector('.popup__score').textContent = `Rating: ${data.rating.average}`;\n    document.querySelector('.popup__close').textContent = 'X';\n    document.querySelector('.popup__image').src = data.image.original;\n    document.querySelector('.popup__description').innerHTML = data.summary;\n    document.querySelector('#popupSubTitle').textContent = 'Comments';\n    document.querySelector('.popup__comment-ul').innerHTML = '';\n    document.querySelector('.popup__title-form').textContent = 'Leave a comment';\n    // document.querySelector('.popup__name-form').value = '';\n    // document.querySelector('.popup__comment-form').value = '';\n    document.querySelector('.popup__submit-form').textContent = 'Submit';\n\n    data.genres.forEach((genre) => {\n      const genreLi = document.createElement('li');\n      genreLi.classList.add('genre');\n      genreLi.setAttribute('id', `genre${i}`);\n      document.querySelector('.popup__category').appendChild(genreLi);\n      document.getElementById(`genre${i}`).innerHTML = `${genre}`;\n      i += 1;\n    });\n  };\n  popupInfo();\n\n  const updateComments = async (id) => {\n    let comments = await (0,_asyncApi_js__WEBPACK_IMPORTED_MODULE_0__.catchComments)(id);\n    comments = Array.isArray(comments) ? comments : [];\n    if (comments.length > 0) {\n      comments.forEach((comment) => {\n        const commentLi = document.createElement('li');\n        commentLi.classList.add('comment');\n        commentLi.setAttribute('id', `comment${commentsCount}`);\n        document.querySelector('.popup__comment-ul').appendChild(commentLi);\n        document.getElementById(`comment${commentsCount}`).innerHTML = `${comment.name}: ${comment.message}`;\n        commentsCount += 1;\n      });\n      commentsCount = comments.length;\n      document.querySelector('.popup__subtitle').textContent = `We have ${commentsCount} comments so far`;\n    }\n  };\n  updateComments(id);\n\n  popupForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    (0,_asyncApi_js__WEBPACK_IMPORTED_MODULE_0__.submitComments)(id, popupNameForm.value, popupMessageForm.value);\n    popupCommmentUl.innerHTML = '';\n    setTimeout(() => {\n      updateComments(id);\n    }, '500');\n    popupNameForm.value = '';\n    popupMessageForm.value = '';\n  });\n  popupClose.addEventListener('click', (e) => {\n    e.preventDefault();\n    popup.remove();\n  });\n  window.addEventListener('click', (e) => {\n    if (e.target === popup) {\n      popup.remove();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);\n\n\n//# sourceURL=webpack://todolist/./src/modules/popup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;