webpackHotUpdate("static\\development\\pages\\posts\\[slug].js",{

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! disqus-react */ "./node_modules/disqus-react/lib/index.js");
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(disqus_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _contentful_rich_text_plain_text_renderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @contentful/rich-text-plain-text-renderer */ "./node_modules/@contentful/rich-text-plain-text-renderer/dist/rich-text-plain-text-renderer.es5.js");
/* harmony import */ var _contentful_rich_text_plain_text_renderer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_plain_text_renderer__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_ShareButtons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ShareButtons */ "./components/ShareButtons.js");
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../next.config */ "./next.config.js");
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_apis_contentfulClient__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/apis/contentfulClient */ "./src/apis/contentfulClient.js");
/* harmony import */ var _src_utils_contentful_ContentfulRichText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/utils/contentful/ContentfulRichText */ "./src/utils/contentful/ContentfulRichText.js");
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../src/utils */ "./src/utils/index.js");


var _jsxFileName = "D:\\Node.js Projects\\Next.js Apps\\medicalmalpractice.github.io\\pages\\posts\\[slug].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;











var Post = function Post(_ref) {
  var item = _ref.item;
  if (!item) return __jsx(next_error__WEBPACK_IMPORTED_MODULE_5___default.a, {
    statusCode: 404,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  });
  var sys = item.sys,
      fields = item.fields;
  var created = new Date(sys.createdAt).toDateString();
  var updated = new Date(sys.updatedAt).toDateString();
  var thumbnail = Object(_src_utils__WEBPACK_IMPORTED_MODULE_13__["getMediaThumbnail"])(fields.media);
  var disqusConfig = {
    url: "".concat(_next_config__WEBPACK_IMPORTED_MODULE_10___default.a.env.PROTOCOL, "://").concat(_next_config__WEBPACK_IMPORTED_MODULE_10___default.a.env.DOMAIN, "/posts/").concat(fields.slug),
    identifier: sys.id,
    title: fields.title
  };
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1978931141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, fields.title), __jsx("meta", {
    name: "description",
    content: Object(_src_utils__WEBPACK_IMPORTED_MODULE_13__["trimDescription"])(Object(_contentful_rich_text_plain_text_renderer__WEBPACK_IMPORTED_MODULE_7__["documentToPlainTextString"])(fields.body)),
    className: "jsx-1978931141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1978931141" + " " + "post",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: "\n            console.log('testing');\n            console.log('window.location', window.location);\n            "
    },
    className: "jsx-1978931141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1978931141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1978931141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, fields.title), __jsx("div", {
    className: "jsx-1978931141" + " " + "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1978931141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Published:"), " ", created, created !== updated && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("span", {
    className: "jsx-1978931141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, " | Updated:"), " ", updated)), __jsx("hr", {
    className: "jsx-1978931141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), Object(_src_utils_contentful_ContentfulRichText__WEBPACK_IMPORTED_MODULE_12__["default"])(fields.body), __jsx("hr", {
    className: "jsx-1978931141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), __jsx(_components_ShareButtons__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: fields.title,
    image: thumbnail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx(disqus_react__WEBPACK_IMPORTED_MODULE_6___default.a.DiscussionEmbed, {
    shortname: _next_config__WEBPACK_IMPORTED_MODULE_10___default.a.env.DISQUS_SHORTNAME,
    config: disqusConfig,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1978931141",
    __self: this
  }, ".post{padding:20px 20px 0;}.date{font-size:13px;}.date>span{opacity:0.5;}img{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOb2RlLmpzIFByb2plY3RzXFxOZXh0LmpzIEFwcHNcXG1lZGljYWxtYWxwcmFjdGljZS5naXRodWIuaW9cXHBhZ2VzXFxwb3N0c1xcW3NsdWddLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFeUIsQUFHK0IsQUFHTCxBQUdILEFBR0QsV0FDYixDQUhBLEdBSEEsS0FIQSIsImZpbGUiOiJEOlxcTm9kZS5qcyBQcm9qZWN0c1xcTmV4dC5qcyBBcHBzXFxtZWRpY2FsbWFscHJhY3RpY2UuZ2l0aHViLmlvXFxwYWdlc1xccG9zdHNcXFtzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBFcnJvciBmcm9tICduZXh0L2Vycm9yJztcclxuaW1wb3J0IERpc3F1cyBmcm9tICdkaXNxdXMtcmVhY3QnO1xyXG5pbXBvcnQgeyBkb2N1bWVudFRvUGxhaW5UZXh0U3RyaW5nIH0gZnJvbSAnQGNvbnRlbnRmdWwvcmljaC10ZXh0LXBsYWluLXRleHQtcmVuZGVyZXInO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IFNoYXJlQnV0dG9ucyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NoYXJlQnV0dG9ucyc7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vbmV4dC5jb25maWcnO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL3NyYy9hcGlzL2NvbnRlbnRmdWxDbGllbnQnO1xyXG5pbXBvcnQgQ29udGVudGZ1bFJpY2hUZXh0IGZyb20gJy4uLy4uL3NyYy91dGlscy9jb250ZW50ZnVsL0NvbnRlbnRmdWxSaWNoVGV4dCc7XHJcbmltcG9ydCB7IHRyaW1EZXNjcmlwdGlvbiwgZ2V0TWVkaWFUaHVtYm5haWwgfSBmcm9tICcuLi8uLi9zcmMvdXRpbHMnO1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IGl0ZW0gfSkgPT4ge1xyXG4gIGlmICghaXRlbSkgcmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXs0MDR9IC8+O1xyXG5cclxuICBjb25zdCB7IHN5cywgZmllbGRzIH0gPSBpdGVtO1xyXG4gIGNvbnN0IGNyZWF0ZWQgPSBuZXcgRGF0ZShzeXMuY3JlYXRlZEF0KS50b0RhdGVTdHJpbmcoKTtcclxuICBjb25zdCB1cGRhdGVkID0gbmV3IERhdGUoc3lzLnVwZGF0ZWRBdCkudG9EYXRlU3RyaW5nKCk7XHJcbiAgY29uc3QgdGh1bWJuYWlsID0gZ2V0TWVkaWFUaHVtYm5haWwoZmllbGRzLm1lZGlhKTtcclxuXHJcbiAgY29uc3QgZGlzcXVzQ29uZmlnID0ge1xyXG4gICAgdXJsOiBgJHtjb25maWcuZW52LlBST1RPQ09MfTovLyR7Y29uZmlnLmVudi5ET01BSU59L3Bvc3RzLyR7ZmllbGRzLnNsdWd9YCxcclxuICAgIGlkZW50aWZpZXI6IHN5cy5pZCxcclxuICAgIHRpdGxlOiBmaWVsZHMudGl0bGVcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntmaWVsZHMudGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9e3RyaW1EZXNjcmlwdGlvbihkb2N1bWVudFRvUGxhaW5UZXh0U3RyaW5nKGZpZWxkcy5ib2R5KSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgX19odG1sOiBgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0aW5nJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3cubG9jYXRpb24nLCB3aW5kb3cubG9jYXRpb24pO1xyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMT57ZmllbGRzLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgPHNwYW4+UHVibGlzaGVkOjwvc3Bhbj4ge2NyZWF0ZWR9XHJcbiAgICAgICAgICAgIHtjcmVhdGVkICE9PSB1cGRhdGVkICYmIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+IHwgVXBkYXRlZDo8L3NwYW4+IHt1cGRhdGVkfVxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgIHtDb250ZW50ZnVsUmljaFRleHQoZmllbGRzLmJvZHkpfVxyXG4gICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxTaGFyZUJ1dHRvbnMgdGl0bGU9e2ZpZWxkcy50aXRsZX0gaW1hZ2U9e3RodW1ibmFpbH0gLz5cclxuICAgICAgICA8RGlzcXVzLkRpc2N1c3Npb25FbWJlZFxyXG4gICAgICAgICAgc2hvcnRuYW1lPXtjb25maWcuZW52LkRJU1FVU19TSE9SVE5BTUV9XHJcbiAgICAgICAgICBjb25maWc9e2Rpc3F1c0NvbmZpZ31cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgLnBvc3Qge1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhdGUgPiBzcGFuIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCkge1xyXG4gIGNvbnN0IHsgc2x1ZyB9ID0gY29udGV4dC5xdWVyeTtcclxuXHJcbiAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcclxuICAgIGNvbnRlbnRfdHlwZTogJ2Jsb2dQb3N0JyxcclxuICAgICdmaWVsZHMuZG9tYWluW2luXSc6IGNvbmZpZy5lbnYuRE9NQUlOLFxyXG4gICAgJ2ZpZWxkcy5zbHVnW2luXSc6IHNsdWdcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHsgaXRlbTogZW50cmllcy5pdGVtc1swXSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl19 */\n/*@ sourceURL=D:\\Node.js Projects\\Next.js Apps\\medicalmalpractice.github.io\\pages\\posts\\[slug].js */"));
};

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var slug, entries;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            slug = context.query.slug;
            _context.next = 3;
            return _src_apis_contentfulClient__WEBPACK_IMPORTED_MODULE_11__["default"].getEntries({
              content_type: 'blogPost',
              'fields.domain[in]': _next_config__WEBPACK_IMPORTED_MODULE_10___default.a.env.DOMAIN,
              'fields.slug[in]': slug
            });

          case 3:
            entries = _context.sent;
            return _context.abrupt("return", {
              item: entries.items[0]
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[slug].js.a6dc8953164a723a9c28.hot-update.js.map