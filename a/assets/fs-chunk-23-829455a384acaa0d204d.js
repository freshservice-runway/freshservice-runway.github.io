(window["webpackJsonp_ember_auto_import_"] = window["webpackJsonp_ember_auto_import_"] || []).push([[23],{

/***/ "./node_modules/codemirror/addon/edit/matchbrackets.js":
/*!*************************************************************!*\
  !*** ./node_modules/codemirror/addon/edit/matchbrackets.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n(function (mod) {\n  if (( false ? undefined : _typeof(exports)) == \"object\" && ( false ? undefined : _typeof(module)) == \"object\") // CommonJS\n    mod(__webpack_require__(/*! ../../lib/codemirror */ \"./node_modules/codemirror/lib/codemirror.js\"));else if (true) // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../../lib/codemirror */ \"./node_modules/codemirror/lib/codemirror.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (mod),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // Plain browser env\n    {}\n})(function (CodeMirror) {\n  var ie_lt8 = /MSIE \\d/.test(navigator.userAgent) && (document.documentMode == null || document.documentMode < 8);\n  var Pos = CodeMirror.Pos;\n  var matching = {\n    \"(\": \")>\",\n    \")\": \"(<\",\n    \"[\": \"]>\",\n    \"]\": \"[<\",\n    \"{\": \"}>\",\n    \"}\": \"{<\",\n    \"<\": \">>\",\n    \">\": \"<<\"\n  };\n\n  function bracketRegex(config) {\n    return config && config.bracketRegex || /[(){}[\\]]/;\n  }\n\n  function findMatchingBracket(cm, where, config) {\n    var line = cm.getLineHandle(where.line),\n        pos = where.ch - 1;\n    var afterCursor = config && config.afterCursor;\n    if (afterCursor == null) afterCursor = /(^| )cm-fat-cursor($| )/.test(cm.getWrapperElement().className);\n    var re = bracketRegex(config); // A cursor is defined as between two characters, but in in vim command mode\n    // (i.e. not insert mode), the cursor is visually represented as a\n    // highlighted box on top of the 2nd character. Otherwise, we allow matches\n    // from before or after the cursor.\n\n    var match = !afterCursor && pos >= 0 && re.test(line.text.charAt(pos)) && matching[line.text.charAt(pos)] || re.test(line.text.charAt(pos + 1)) && matching[line.text.charAt(++pos)];\n    if (!match) return null;\n    var dir = match.charAt(1) == \">\" ? 1 : -1;\n    if (config && config.strict && dir > 0 != (pos == where.ch)) return null;\n    var style = cm.getTokenTypeAt(Pos(where.line, pos + 1));\n    var found = scanForBracket(cm, Pos(where.line, pos + (dir > 0 ? 1 : 0)), dir, style, config);\n    if (found == null) return null;\n    return {\n      from: Pos(where.line, pos),\n      to: found && found.pos,\n      match: found && found.ch == match.charAt(0),\n      forward: dir > 0\n    };\n  } // bracketRegex is used to specify which type of bracket to scan\n  // should be a regexp, e.g. /[[\\]]/\n  //\n  // Note: If \"where\" is on an open bracket, then this bracket is ignored.\n  //\n  // Returns false when no bracket was found, null when it reached\n  // maxScanLines and gave up\n\n\n  function scanForBracket(cm, where, dir, style, config) {\n    var maxScanLen = config && config.maxScanLineLength || 10000;\n    var maxScanLines = config && config.maxScanLines || 1000;\n    var stack = [];\n    var re = bracketRegex(config);\n    var lineEnd = dir > 0 ? Math.min(where.line + maxScanLines, cm.lastLine() + 1) : Math.max(cm.firstLine() - 1, where.line - maxScanLines);\n\n    for (var lineNo = where.line; lineNo != lineEnd; lineNo += dir) {\n      var line = cm.getLine(lineNo);\n      if (!line) continue;\n      var pos = dir > 0 ? 0 : line.length - 1,\n          end = dir > 0 ? line.length : -1;\n      if (line.length > maxScanLen) continue;\n      if (lineNo == where.line) pos = where.ch - (dir < 0 ? 1 : 0);\n\n      for (; pos != end; pos += dir) {\n        var ch = line.charAt(pos);\n\n        if (re.test(ch) && (style === undefined || (cm.getTokenTypeAt(Pos(lineNo, pos + 1)) || \"\") == (style || \"\"))) {\n          var match = matching[ch];\n          if (match && match.charAt(1) == \">\" == dir > 0) stack.push(ch);else if (!stack.length) return {\n            pos: Pos(lineNo, pos),\n            ch: ch\n          };else stack.pop();\n        }\n      }\n    }\n\n    return lineNo - dir == (dir > 0 ? cm.lastLine() : cm.firstLine()) ? false : null;\n  }\n\n  function matchBrackets(cm, autoclear, config) {\n    // Disable brace matching in long lines, since it'll cause hugely slow updates\n    var maxHighlightLen = cm.state.matchBrackets.maxHighlightLineLength || 1000,\n        highlightNonMatching = config && config.highlightNonMatching;\n    var marks = [],\n        ranges = cm.listSelections();\n\n    for (var i = 0; i < ranges.length; i++) {\n      var match = ranges[i].empty() && findMatchingBracket(cm, ranges[i].head, config);\n\n      if (match && (match.match || highlightNonMatching !== false) && cm.getLine(match.from.line).length <= maxHighlightLen) {\n        var style = match.match ? \"CodeMirror-matchingbracket\" : \"CodeMirror-nonmatchingbracket\";\n        marks.push(cm.markText(match.from, Pos(match.from.line, match.from.ch + 1), {\n          className: style\n        }));\n        if (match.to && cm.getLine(match.to.line).length <= maxHighlightLen) marks.push(cm.markText(match.to, Pos(match.to.line, match.to.ch + 1), {\n          className: style\n        }));\n      }\n    }\n\n    if (marks.length) {\n      // Kludge to work around the IE bug from issue #1193, where text\n      // input stops going to the textarea whenever this fires.\n      if (ie_lt8 && cm.state.focused) cm.focus();\n\n      var clear = function clear() {\n        cm.operation(function () {\n          for (var i = 0; i < marks.length; i++) {\n            marks[i].clear();\n          }\n        });\n      };\n\n      if (autoclear) setTimeout(clear, 800);else return clear;\n    }\n  }\n\n  function doMatchBrackets(cm) {\n    cm.operation(function () {\n      if (cm.state.matchBrackets.currentlyHighlighted) {\n        cm.state.matchBrackets.currentlyHighlighted();\n        cm.state.matchBrackets.currentlyHighlighted = null;\n      }\n\n      cm.state.matchBrackets.currentlyHighlighted = matchBrackets(cm, false, cm.state.matchBrackets);\n    });\n  }\n\n  function clearHighlighted(cm) {\n    if (cm.state.matchBrackets && cm.state.matchBrackets.currentlyHighlighted) {\n      cm.state.matchBrackets.currentlyHighlighted();\n      cm.state.matchBrackets.currentlyHighlighted = null;\n    }\n  }\n\n  CodeMirror.defineOption(\"matchBrackets\", false, function (cm, val, old) {\n    if (old && old != CodeMirror.Init) {\n      cm.off(\"cursorActivity\", doMatchBrackets);\n      cm.off(\"focus\", doMatchBrackets);\n      cm.off(\"blur\", clearHighlighted);\n      clearHighlighted(cm);\n    }\n\n    if (val) {\n      cm.state.matchBrackets = _typeof(val) == \"object\" ? val : {};\n      cm.on(\"cursorActivity\", doMatchBrackets);\n      cm.on(\"focus\", doMatchBrackets);\n      cm.on(\"blur\", clearHighlighted);\n    }\n  });\n  CodeMirror.defineExtension(\"matchBrackets\", function () {\n    matchBrackets(this, true);\n  });\n  CodeMirror.defineExtension(\"findMatchingBracket\", function (pos, config, oldConfig) {\n    // Backwards-compatibility kludge\n    if (oldConfig || typeof config == \"boolean\") {\n      if (!oldConfig) {\n        config = config ? {\n          strict: true\n        } : null;\n      } else {\n        oldConfig.strict = config;\n        config = oldConfig;\n      }\n    }\n\n    return findMatchingBracket(this, pos, config);\n  });\n  CodeMirror.defineExtension(\"scanForBracket\", function (pos, dir, style, config) {\n    return scanForBracket(this, pos, dir, style, config);\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://__ember_auto_import__/./node_modules/codemirror/addon/edit/matchbrackets.js?");

/***/ })

}]);