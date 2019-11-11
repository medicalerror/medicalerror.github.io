webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Lists/PostList.js":
/*!**************************************!*\
  !*** ./components/Lists/PostList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contentful_rich_text_plain_text_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @contentful/rich-text-plain-text-renderer */ "./node_modules/@contentful/rich-text-plain-text-renderer/dist/rich-text-plain-text-renderer.es5.js");
/* harmony import */ var _contentful_rich_text_plain_text_renderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_plain_text_renderer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PostListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostListItem */ "./components/Lists/PostListItem.js");
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/utils */ "./src/utils/index.js");
var _jsxFileName = "D:\\Node.js Projects\\Next.js Apps\\medicalmalpractice.github.io\\components\\Lists\\PostList.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function PostList(_ref) {
  var items = _ref.items;
  return __jsx("div", {
    className: "jsx-1232119233" + " " + "posts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, items.length > 0 ? items.sort(function (a, b) {
    return new Date(a.sys.createdAt) - new Date(b.sys.createdAt);
  }).map(function (p) {
    var thumbnail = Object(_src_utils__WEBPACK_IMPORTED_MODULE_4__["getMediaThumbnail"])(p.fields.media);
    return __jsx(_PostListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: p.fields.slug,
      image: thumbnail,
      title: p.fields.title,
      url: "/posts/".concat(p.fields.slug),
      description: Object(_src_utils__WEBPACK_IMPORTED_MODULE_4__["trimDescription"])(Object(_contentful_rich_text_plain_text_renderer__WEBPACK_IMPORTED_MODULE_2__["documentToPlainTextString"])(p.fields.body)),
      createdAt: p.sys.createdAt,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    });
  }) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1232119233",
    __self: this
  }, ".posts.jsx-1232119233{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOb2RlLmpzIFByb2plY3RzXFxOZXh0LmpzIEFwcHNcXG1lZGljYWxtYWxwcmFjdGljZS5naXRodWIuaW9cXGNvbXBvbmVudHNcXExpc3RzXFxQb3N0TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmtCLEFBR3dCLDBFQUNFLHlEQUNjLDJIQUMvQiIsImZpbGUiOiJEOlxcTm9kZS5qcyBQcm9qZWN0c1xcTmV4dC5qcyBBcHBzXFxtZWRpY2FsbWFscHJhY3RpY2UuZ2l0aHViLmlvXFxjb21wb25lbnRzXFxMaXN0c1xcUG9zdExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkb2N1bWVudFRvUGxhaW5UZXh0U3RyaW5nIH0gZnJvbSAnQGNvbnRlbnRmdWwvcmljaC10ZXh0LXBsYWluLXRleHQtcmVuZGVyZXInO1xyXG5pbXBvcnQgUG9zdExpc3RJdGVtIGZyb20gJy4vUG9zdExpc3RJdGVtJztcclxuaW1wb3J0IHsgdHJpbURlc2NyaXB0aW9uLCBnZXRNZWRpYVRodW1ibmFpbCB9IGZyb20gJy4uLy4uL3NyYy91dGlscyc7XHJcblxyXG5mdW5jdGlvbiBQb3N0TGlzdCh7IGl0ZW1zIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0c1wiPlxyXG4gICAgICB7aXRlbXMubGVuZ3RoID4gMFxyXG4gICAgICAgID8gaXRlbXNcclxuICAgICAgICAgICAgLnNvcnQoXHJcbiAgICAgICAgICAgICAgKGEsIGIpID0+IG5ldyBEYXRlKGEuc3lzLmNyZWF0ZWRBdCkgLSBuZXcgRGF0ZShiLnN5cy5jcmVhdGVkQXQpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLm1hcChwID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCB0aHVtYm5haWwgPSBnZXRNZWRpYVRodW1ibmFpbChwLmZpZWxkcy5tZWRpYSk7XHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8UG9zdExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgIGtleT17cC5maWVsZHMuc2x1Z31cclxuICAgICAgICAgICAgICAgICAgaW1hZ2U9e3RodW1ibmFpbH1cclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e3AuZmllbGRzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICB1cmw9e2AvcG9zdHMvJHtwLmZpZWxkcy5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0cmltRGVzY3JpcHRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRUb1BsYWluVGV4dFN0cmluZyhwLmZpZWxkcy5ib2R5KVxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ9e3Auc3lzLmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICA6IG51bGx9XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnBvc3RzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0O1xyXG4iXX0= */\n/*@ sourceURL=D:\\Node.js Projects\\Next.js Apps\\medicalmalpractice.github.io\\components\\Lists\\PostList.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (PostList);

/***/ })

})
//# sourceMappingURL=index.js.28d02ad73861ed456545.hot-update.js.map