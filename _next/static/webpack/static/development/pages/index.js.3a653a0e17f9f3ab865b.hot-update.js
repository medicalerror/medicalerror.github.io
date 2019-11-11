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
    console.log('a.sys.createdAt', a.sys.createdAt);
    console.log('b.sys.createdAt', b.sys.createdAt);
    return a.sys.createdAt - b.sys.createdAt;
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
        lineNumber: 19
      },
      __self: this
    });
  }) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1232119233",
    __self: this
  }, ".posts.jsx-1232119233{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOb2RlLmpzIFByb2plY3RzXFxOZXh0LmpzIEFwcHNcXG1lZGljYWxtYWxwcmFjdGljZS5naXRodWIuaW9cXGNvbXBvbmVudHNcXExpc3RzXFxQb3N0TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ2tCLEFBR3dCLDBFQUNFLHlEQUNjLDJIQUMvQiIsImZpbGUiOiJEOlxcTm9kZS5qcyBQcm9qZWN0c1xcTmV4dC5qcyBBcHBzXFxtZWRpY2FsbWFscHJhY3RpY2UuZ2l0aHViLmlvXFxjb21wb25lbnRzXFxMaXN0c1xcUG9zdExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkb2N1bWVudFRvUGxhaW5UZXh0U3RyaW5nIH0gZnJvbSAnQGNvbnRlbnRmdWwvcmljaC10ZXh0LXBsYWluLXRleHQtcmVuZGVyZXInO1xyXG5pbXBvcnQgUG9zdExpc3RJdGVtIGZyb20gJy4vUG9zdExpc3RJdGVtJztcclxuaW1wb3J0IHsgdHJpbURlc2NyaXB0aW9uLCBnZXRNZWRpYVRodW1ibmFpbCB9IGZyb20gJy4uLy4uL3NyYy91dGlscyc7XHJcblxyXG5mdW5jdGlvbiBQb3N0TGlzdCh7IGl0ZW1zIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0c1wiPlxyXG4gICAgICB7aXRlbXMubGVuZ3RoID4gMFxyXG4gICAgICAgID8gaXRlbXNcclxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYS5zeXMuY3JlYXRlZEF0JywgYS5zeXMuY3JlYXRlZEF0KTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYi5zeXMuY3JlYXRlZEF0JywgYi5zeXMuY3JlYXRlZEF0KTtcclxuICAgICAgICAgICAgICByZXR1cm4gYS5zeXMuY3JlYXRlZEF0IC0gYi5zeXMuY3JlYXRlZEF0O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKHAgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRodW1ibmFpbCA9IGdldE1lZGlhVGh1bWJuYWlsKHAuZmllbGRzLm1lZGlhKTtcclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxQb3N0TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgICAga2V5PXtwLmZpZWxkcy5zbHVnfVxyXG4gICAgICAgICAgICAgICAgICBpbWFnZT17dGh1bWJuYWlsfVxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT17cC5maWVsZHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIHVybD17YC9wb3N0cy8ke3AuZmllbGRzLnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3RyaW1EZXNjcmlwdGlvbihcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFRvUGxhaW5UZXh0U3RyaW5nKHAuZmllbGRzLmJvZHkpXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdD17cC5zeXMuY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIDogbnVsbH1cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucG9zdHMge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdExpc3Q7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\Node.js Projects\\Next.js Apps\\medicalmalpractice.github.io\\components\\Lists\\PostList.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (PostList);

/***/ })

})
//# sourceMappingURL=index.js.3a653a0e17f9f3ab865b.hot-update.js.map