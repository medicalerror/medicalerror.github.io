webpackHotUpdate("static\\development\\pages\\posts\\[slug].js",{

/***/ "./src/utils/contentful/ContentfulRichText.js":
/*!****************************************************!*\
  !*** ./src/utils/contentful/ContentfulRichText.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @contentful/rich-text-types */ "./node_modules/@contentful/rich-text-types/dist/rich-text-types.es5.js");
/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @contentful/rich-text-react-renderer */ "./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js");
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Blockquote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Blockquote */ "./src/utils/contentful/Blockquote.js");


var _jsxFileName = "D:\\Node.js Projects\\Next.js Apps\\medicalmalpractice.github.io\\src\\utils\\contentful\\ContentfulRichText.js",
    _renderNode;


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var richTextOptions = {
  renderNode: (_renderNode = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_renderNode, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_2__["BLOCKS"].EMBEDDED_ASSET, function (node) {
    var _node$data$target$fie = node.data.target.fields,
        title = _node$data$target$fie.title,
        description = _node$data$target$fie.description,
        file = _node$data$target$fie.file;
    var mimeType = file.contentType;
    var mimeGroup = mimeType.split('/')[0];

    switch (mimeGroup) {
      case 'image':
        return __jsx("img", {
          title: title ? title : null,
          alt: description ? description : null,
          src: file.url,
          style: {
            width: '40%',
            margin: '12px 10px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        });

      case 'application':
        return __jsx("a", {
          alt: description ? description : null,
          href: file.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, title ? title : file.details.fileName);

      default:
        return __jsx("span", {
          style: {
            backgroundColor: 'red',
            color: 'white'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, ' ', mimeType, " embedded asset", ' ');
    }
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_renderNode, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_2__["BLOCKS"].EMBEDDED_ENTRY, function (node) {
    var fields = node.data.target.fields;

    switch (node.data.target.sys.contentType.sys.id) {
      case 'blockquote':
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, __jsx(_Blockquote__WEBPACK_IMPORTED_MODULE_4__["default"], {
          quoteText: fields.quoteText,
          quoter: fields.quoter,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }));

      default:
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, "??????????????? ", title, " ");
    }
  }), _renderNode)
};

var ContentfulRichText = function ContentfulRichText(text) {
  return Object(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_3__["documentToReactComponents"])(text, richTextOptions);
};

/* harmony default export */ __webpack_exports__["default"] = (ContentfulRichText);

/***/ })

})
//# sourceMappingURL=[slug].js.a3c7e173a71c7477c66e.hot-update.js.map