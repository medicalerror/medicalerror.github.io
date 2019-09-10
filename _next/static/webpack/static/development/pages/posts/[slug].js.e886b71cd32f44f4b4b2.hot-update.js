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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! disqus-react */ "./node_modules/disqus-react/lib/index.js");
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(disqus_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _contentful_rich_text_plain_text_renderer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @contentful/rich-text-plain-text-renderer */ "./node_modules/@contentful/rich-text-plain-text-renderer/dist/rich-text-plain-text-renderer.es5.js");
/* harmony import */ var _contentful_rich_text_plain_text_renderer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_plain_text_renderer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_ShareButtons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ShareButtons */ "./components/ShareButtons.js");
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../next.config */ "./next.config.js");
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_apis_contentfulClient__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/apis/contentfulClient */ "./src/apis/contentfulClient.js");
/* harmony import */ var _src_utils_contentful_ContentfulRichText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../src/utils/contentful/ContentfulRichText */ "./src/utils/contentful/ContentfulRichText.js");
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../src/utils */ "./src/utils/index.js");


var _jsxFileName = "D:\\Node.js Projects\\Next.js Apps\\medicalmalpractice.github.io\\pages\\posts\\[slug].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;












var Post = function Post(_ref) {
  var item = _ref.item;
  if (!item) return __jsx(next_error__WEBPACK_IMPORTED_MODULE_5___default.a, {
    statusCode: 404,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  });
  var sys = item.sys,
      fields = item.fields;
  var created = new Date(sys.createdAt).toDateString();
  var updated = new Date(sys.updatedAt).toDateString();
  var thumbnail = Object(_src_utils__WEBPACK_IMPORTED_MODULE_14__["getMediaThumbnail"])(fields.media);
  var linkHref = "/posts/".concat(fields.slug);
  var disqusConfig = {
    url: "".concat(_next_config__WEBPACK_IMPORTED_MODULE_11___default.a.env.PROTOCOL, "://").concat(_next_config__WEBPACK_IMPORTED_MODULE_11___default.a.env.DOMAIN).concat(linkHref),
    identifier: sys.id,
    title: fields.title
  };
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1978931141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, fields.title), __jsx("meta", {
    name: "description",
    content: Object(_src_utils__WEBPACK_IMPORTED_MODULE_14__["trimDescription"])(Object(_contentful_rich_text_plain_text_renderer__WEBPACK_IMPORTED_MODULE_8__["documentToPlainTextString"])(fields.body)),
    className: "jsx-1978931141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1978931141" + " " + "post",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1978931141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: linkHref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1978931141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1978931141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, fields.title))), __jsx("div", {
    className: "jsx-1978931141" + " " + "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1978931141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Published:"), " ", created, created !== updated && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("span", {
    className: "jsx-1978931141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, " | Updated:"), " ", updated)), __jsx("hr", {
    className: "jsx-1978931141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), Object(_src_utils_contentful_ContentfulRichText__WEBPACK_IMPORTED_MODULE_13__["default"])(fields.body), __jsx("hr", {
    className: "jsx-1978931141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })), __jsx(_components_ShareButtons__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: fields.title,
    image: thumbnail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx(disqus_react__WEBPACK_IMPORTED_MODULE_7___default.a.DiscussionEmbed, {
    shortname: _next_config__WEBPACK_IMPORTED_MODULE_11___default.a.env.DISQUS_SHORTNAME,
    config: disqusConfig,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1978931141",
    __self: this
  }, ".post{padding:20px 20px 0;}.date{font-size:13px;}.date>span{opacity:0.5;}img{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOb2RlLmpzIFByb2plY3RzXFxOZXh0LmpzIEFwcHNcXG1lZGljYWxtYWxwcmFjdGljZS5naXRodWIuaW9cXHBhZ2VzXFxwb3N0c1xcW3NsdWddLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFeUIsQUFHK0IsQUFHTCxBQUdILEFBR0QsV0FDYixDQUhBLEdBSEEsS0FIQSIsImZpbGUiOiJEOlxcTm9kZS5qcyBQcm9qZWN0c1xcTmV4dC5qcyBBcHBzXFxtZWRpY2FsbWFscHJhY3RpY2UuZ2l0aHViLmlvXFxwYWdlc1xccG9zdHNcXFtzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBFcnJvciBmcm9tICduZXh0L2Vycm9yJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IERpc3F1cyBmcm9tICdkaXNxdXMtcmVhY3QnO1xyXG5pbXBvcnQgeyBkb2N1bWVudFRvUGxhaW5UZXh0U3RyaW5nIH0gZnJvbSAnQGNvbnRlbnRmdWwvcmljaC10ZXh0LXBsYWluLXRleHQtcmVuZGVyZXInO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IFNoYXJlQnV0dG9ucyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NoYXJlQnV0dG9ucyc7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vbmV4dC5jb25maWcnO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL3NyYy9hcGlzL2NvbnRlbnRmdWxDbGllbnQnO1xyXG5pbXBvcnQgQ29udGVudGZ1bFJpY2hUZXh0IGZyb20gJy4uLy4uL3NyYy91dGlscy9jb250ZW50ZnVsL0NvbnRlbnRmdWxSaWNoVGV4dCc7XHJcbmltcG9ydCB7IHRyaW1EZXNjcmlwdGlvbiwgZ2V0TWVkaWFUaHVtYm5haWwgfSBmcm9tICcuLi8uLi9zcmMvdXRpbHMnO1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IGl0ZW0gfSkgPT4ge1xyXG4gIGlmICghaXRlbSkgcmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXs0MDR9IC8+O1xyXG5cclxuICBjb25zdCB7IHN5cywgZmllbGRzIH0gPSBpdGVtO1xyXG4gIGNvbnN0IGNyZWF0ZWQgPSBuZXcgRGF0ZShzeXMuY3JlYXRlZEF0KS50b0RhdGVTdHJpbmcoKTtcclxuICBjb25zdCB1cGRhdGVkID0gbmV3IERhdGUoc3lzLnVwZGF0ZWRBdCkudG9EYXRlU3RyaW5nKCk7XHJcbiAgY29uc3QgdGh1bWJuYWlsID0gZ2V0TWVkaWFUaHVtYm5haWwoZmllbGRzLm1lZGlhKTtcclxuXHJcbiAgY29uc3QgbGlua0hyZWYgPSBgL3Bvc3RzLyR7ZmllbGRzLnNsdWd9YDtcclxuICBjb25zdCBkaXNxdXNDb25maWcgPSB7XHJcbiAgICB1cmw6IGAke2NvbmZpZy5lbnYuUFJPVE9DT0x9Oi8vJHtjb25maWcuZW52LkRPTUFJTn0ke2xpbmtIcmVmfWAsXHJcbiAgICBpZGVudGlmaWVyOiBzeXMuaWQsXHJcbiAgICB0aXRsZTogZmllbGRzLnRpdGxlXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57ZmllbGRzLnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PXt0cmltRGVzY3JpcHRpb24oZG9jdW1lbnRUb1BsYWluVGV4dFN0cmluZyhmaWVsZHMuYm9keSkpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtsaW5rSHJlZn0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxoMT57ZmllbGRzLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5QdWJsaXNoZWQ6PC9zcGFuPiB7Y3JlYXRlZH1cclxuICAgICAgICAgICAge2NyZWF0ZWQgIT09IHVwZGF0ZWQgJiYgKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4gfCBVcGRhdGVkOjwvc3Bhbj4ge3VwZGF0ZWR9XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAge0NvbnRlbnRmdWxSaWNoVGV4dChmaWVsZHMuYm9keSl9XHJcbiAgICAgICAgICA8aHIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPFNoYXJlQnV0dG9ucyB0aXRsZT17ZmllbGRzLnRpdGxlfSBpbWFnZT17dGh1bWJuYWlsfSAvPlxyXG4gICAgICAgIDxEaXNxdXMuRGlzY3Vzc2lvbkVtYmVkXHJcbiAgICAgICAgICBzaG9ydG5hbWU9e2NvbmZpZy5lbnYuRElTUVVTX1NIT1JUTkFNRX1cclxuICAgICAgICAgIGNvbmZpZz17ZGlzcXVzQ29uZmlnfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAucG9zdCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGF0ZSA+IHNwYW4ge1xyXG4gICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KSB7XHJcbiAgY29uc3QgeyBzbHVnIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG5cclxuICBjb25zdCBlbnRyaWVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xyXG4gICAgY29udGVudF90eXBlOiAnYmxvZ1Bvc3QnLFxyXG4gICAgJ2ZpZWxkcy5kb21haW5baW5dJzogY29uZmlnLmVudi5ET01BSU4sXHJcbiAgICAnZmllbGRzLnNsdWdbaW5dJzogc2x1Z1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4geyBpdGVtOiBlbnRyaWVzLml0ZW1zWzBdIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iXX0= */\n/*@ sourceURL=D:\\Node.js Projects\\Next.js Apps\\medicalmalpractice.github.io\\pages\\posts\\[slug].js */"));
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
            return _src_apis_contentfulClient__WEBPACK_IMPORTED_MODULE_12__["default"].getEntries({
              content_type: 'blogPost',
              'fields.domain[in]': _next_config__WEBPACK_IMPORTED_MODULE_11___default.a.env.DOMAIN,
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
//# sourceMappingURL=[slug].js.e886b71cd32f44f4b4b2.hot-update.js.map