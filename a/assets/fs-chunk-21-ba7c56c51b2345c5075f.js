(window["webpackJsonp_ember_auto_import_"] = window["webpackJsonp_ember_auto_import_"] || []).push([[21],{

/***/ "./node_modules/codemirror/addon/display/fullscreen.js":
/*!*************************************************************!*\
  !*** ./node_modules/codemirror/addon/display/fullscreen.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n(function (mod) {\n  if (true) // CommonJS\n    mod(__webpack_require__(/*! ../../lib/codemirror */ \"./node_modules/codemirror/lib/codemirror.js\"));else {}\n})(function (CodeMirror) {\n  \"use strict\";\n\n  CodeMirror.defineOption(\"fullScreen\", false, function (cm, val, old) {\n    if (old == CodeMirror.Init) old = false;\n    if (!old == !val) return;\n    if (val) setFullscreen(cm);else setNormal(cm);\n  });\n\n  function setFullscreen(cm) {\n    var wrap = cm.getWrapperElement();\n    cm.state.fullScreenRestore = {\n      scrollTop: window.pageYOffset,\n      scrollLeft: window.pageXOffset,\n      width: wrap.style.width,\n      height: wrap.style.height\n    };\n    wrap.style.width = \"\";\n    wrap.style.height = \"auto\";\n    wrap.className += \" CodeMirror-fullscreen\";\n    document.documentElement.style.overflow = \"hidden\";\n    cm.refresh();\n  }\n\n  function setNormal(cm) {\n    var wrap = cm.getWrapperElement();\n    wrap.className = wrap.className.replace(/\\s*CodeMirror-fullscreen\\b/, \"\");\n    document.documentElement.style.overflow = \"\";\n    var info = cm.state.fullScreenRestore;\n    wrap.style.width = info.width;\n    wrap.style.height = info.height;\n    window.scrollTo(info.scrollLeft, info.scrollTop);\n    cm.refresh();\n  }\n});\n\n//# sourceURL=webpack://__ember_auto_import__/./node_modules/codemirror/addon/display/fullscreen.js?");

/***/ })

}]);