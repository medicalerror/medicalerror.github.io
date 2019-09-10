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
    className: "jsx-1752182565",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, fields.title), __jsx("meta", {
    name: "description",
    content: Object(_src_utils__WEBPACK_IMPORTED_MODULE_14__["trimDescription"])(Object(_contentful_rich_text_plain_text_renderer__WEBPACK_IMPORTED_MODULE_8__["documentToPlainTextString"])(fields.body)),
    className: "jsx-1752182565",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1752182565" + " " + "post",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1752182565",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1752182565",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: linkHref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1752182565",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, fields.title))), __jsx("div", {
    className: "jsx-1752182565" + " " + "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1752182565",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Published:"), " ", created, created !== updated && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("span", {
    className: "jsx-1752182565",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, " | Updated:"), " ", updated)), __jsx("hr", {
    className: "jsx-1752182565",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), Object(_src_utils_contentful_ContentfulRichText__WEBPACK_IMPORTED_MODULE_13__["default"])(fields.body), __jsx("hr", {
    className: "jsx-1752182565",
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
    id: "1752182565",
    __self: this
  }, ".post{padding:20px 20px 0;}h1 a{color:#000000;}.date{font-size:13px;}.date>span{opacity:0.5;}img{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOb2RlLmpzIFByb2plY3RzXFxOZXh0LmpzIEFwcHNcXG1lZGljYWxtYWxwcmFjdGljZS5naXRodWIuaW9cXHBhZ2VzXFxwb3N0c1xcW3NsdWddLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFeUIsQUFHK0IsQUFHTixBQUdDLEFBR0gsQUFHRCxXQUNiLENBSEEsRUFOQSxDQUdBLEtBTkEiLCJmaWxlIjoiRDpcXE5vZGUuanMgUHJvamVjdHNcXE5leHQuanMgQXBwc1xcbWVkaWNhbG1hbHByYWN0aWNlLmdpdGh1Yi5pb1xccGFnZXNcXHBvc3RzXFxbc2x1Z10uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnbmV4dC9lcnJvcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBEaXNxdXMgZnJvbSAnZGlzcXVzLXJlYWN0JztcclxuaW1wb3J0IHsgZG9jdW1lbnRUb1BsYWluVGV4dFN0cmluZyB9IGZyb20gJ0Bjb250ZW50ZnVsL3JpY2gtdGV4dC1wbGFpbi10ZXh0LXJlbmRlcmVyJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBTaGFyZUJ1dHRvbnMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaGFyZUJ1dHRvbnMnO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL25leHQuY29uZmlnJztcclxuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9zcmMvYXBpcy9jb250ZW50ZnVsQ2xpZW50JztcclxuaW1wb3J0IENvbnRlbnRmdWxSaWNoVGV4dCBmcm9tICcuLi8uLi9zcmMvdXRpbHMvY29udGVudGZ1bC9Db250ZW50ZnVsUmljaFRleHQnO1xyXG5pbXBvcnQgeyB0cmltRGVzY3JpcHRpb24sIGdldE1lZGlhVGh1bWJuYWlsIH0gZnJvbSAnLi4vLi4vc3JjL3V0aWxzJztcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBpdGVtIH0pID0+IHtcclxuICBpZiAoIWl0ZW0pIHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17NDA0fSAvPjtcclxuXHJcbiAgY29uc3QgeyBzeXMsIGZpZWxkcyB9ID0gaXRlbTtcclxuICBjb25zdCBjcmVhdGVkID0gbmV3IERhdGUoc3lzLmNyZWF0ZWRBdCkudG9EYXRlU3RyaW5nKCk7XHJcbiAgY29uc3QgdXBkYXRlZCA9IG5ldyBEYXRlKHN5cy51cGRhdGVkQXQpLnRvRGF0ZVN0cmluZygpO1xyXG4gIGNvbnN0IHRodW1ibmFpbCA9IGdldE1lZGlhVGh1bWJuYWlsKGZpZWxkcy5tZWRpYSk7XHJcblxyXG4gIGNvbnN0IGxpbmtIcmVmID0gYC9wb3N0cy8ke2ZpZWxkcy5zbHVnfWA7XHJcbiAgY29uc3QgZGlzcXVzQ29uZmlnID0ge1xyXG4gICAgdXJsOiBgJHtjb25maWcuZW52LlBST1RPQ09MfTovLyR7Y29uZmlnLmVudi5ET01BSU59JHtsaW5rSHJlZn1gLFxyXG4gICAgaWRlbnRpZmllcjogc3lzLmlkLFxyXG4gICAgdGl0bGU6IGZpZWxkcy50aXRsZVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e2ZpZWxkcy50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD17dHJpbURlc2NyaXB0aW9uKGRvY3VtZW50VG9QbGFpblRleHRTdHJpbmcoZmllbGRzLmJvZHkpKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtsaW5rSHJlZn0+XHJcbiAgICAgICAgICAgICAgPGE+e2ZpZWxkcy50aXRsZX08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgPHNwYW4+UHVibGlzaGVkOjwvc3Bhbj4ge2NyZWF0ZWR9XHJcbiAgICAgICAgICAgIHtjcmVhdGVkICE9PSB1cGRhdGVkICYmIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+IHwgVXBkYXRlZDo8L3NwYW4+IHt1cGRhdGVkfVxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgIHtDb250ZW50ZnVsUmljaFRleHQoZmllbGRzLmJvZHkpfVxyXG4gICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxTaGFyZUJ1dHRvbnMgdGl0bGU9e2ZpZWxkcy50aXRsZX0gaW1hZ2U9e3RodW1ibmFpbH0gLz5cclxuICAgICAgICA8RGlzcXVzLkRpc2N1c3Npb25FbWJlZFxyXG4gICAgICAgICAgc2hvcnRuYW1lPXtjb25maWcuZW52LkRJU1FVU19TSE9SVE5BTUV9XHJcbiAgICAgICAgICBjb25maWc9e2Rpc3F1c0NvbmZpZ31cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgLnBvc3Qge1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxIGEge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhdGUgPiBzcGFuIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCkge1xyXG4gIGNvbnN0IHsgc2x1ZyB9ID0gY29udGV4dC5xdWVyeTtcclxuXHJcbiAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcclxuICAgIGNvbnRlbnRfdHlwZTogJ2Jsb2dQb3N0JyxcclxuICAgICdmaWVsZHMuZG9tYWluW2luXSc6IGNvbmZpZy5lbnYuRE9NQUlOLFxyXG4gICAgJ2ZpZWxkcy5zbHVnW2luXSc6IHNsdWdcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHsgaXRlbTogZW50cmllcy5pdGVtc1swXSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl19 */\n/*@ sourceURL=D:\\Node.js Projects\\Next.js Apps\\medicalmalpractice.github.io\\pages\\posts\\[slug].js */"));
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
//# sourceMappingURL=[slug].js.30b8afb96460832131bd.hot-update.js.map