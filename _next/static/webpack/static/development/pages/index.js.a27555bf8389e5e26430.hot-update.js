webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: getPosts, trimContent, trimDescription, getMediaThumbnail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimContent", function() { return trimContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimDescription", function() { return trimDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMediaThumbnail", function() { return getMediaThumbnail; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../next.config */ "./next.config.js");
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apis_contentfulClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apis/contentfulClient */ "./src/apis/contentfulClient.js");





function fetchEntriesForContentType(_x) {
  return _fetchEntriesForContentType.apply(this, arguments);
}

function _fetchEntriesForContentType() {
  _fetchEntriesForContentType = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(contentTypeId) {
    var entries;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _apis_contentfulClient__WEBPACK_IMPORTED_MODULE_3__["default"].getEntries({
              content_type: contentTypeId,
              'fields.domain[in]': _next_config__WEBPACK_IMPORTED_MODULE_2___default.a.env.DOMAIN
            });

          case 2:
            entries = _context.sent;

            if (!entries.items) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", entries.items);

          case 5:
            console.log("Error getting Entries with the content type ID ".concat(contentTypeId, "."));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchEntriesForContentType.apply(this, arguments);
}

function getPosts() {
  return _getPosts.apply(this, arguments);
}

function _getPosts() {
  _getPosts = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetchEntriesForContentType('blogPost');

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getPosts.apply(this, arguments);
}

function trimContent(str, maxLength) {
  var trimmedString = str.replace(/(\r\n|\n|\r)/gm, ' ').replace(/ +(?= )/g, '').trim();

  if (trimmedString.length > maxLength) {
    trimmedString = trimmedString.substr(0, maxLength);
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')));
  }

  return trimmedString;
}
function trimDescription(str) {
  return trimContent(str, 300);
}
function getMediaThumbnail(media) {
  var thumbnail = media ? media.find(function (node) {
    if (!node.fields) return false;
    var mimeType = node.fields.file.contentType;
    var mimeGroup = mimeType.split('/')[0];
    return mimeGroup === 'image';
  }) : null;
  return thumbnail ? thumbnail.fields.file.url : null;
}

/***/ })

})
//# sourceMappingURL=index.js.a27555bf8389e5e26430.hot-update.js.map