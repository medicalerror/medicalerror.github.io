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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @contentful/rich-text-types */ "./node_modules/@contentful/rich-text-types/dist/rich-text-types.es5.js");
/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @contentful/rich-text-react-renderer */ "./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js");
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Blockquote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Blockquote */ "./src/utils/contentful/Blockquote.js");


var _jsxFileName = "D:\\Node.js Projects\\Next.js Apps\\medicalmalpractice.github.io\\src\\utils\\contentful\\ContentfulRichText.js",
    _renderNode;



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var richTextOptions = {
  renderNode: (_renderNode = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_renderNode, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_3__["BLOCKS"].EMBEDDED_ASSET, function (node) {
    var _node$data$target$fie = node.data.target.fields,
        title = _node$data$target$fie.title,
        description = _node$data$target$fie.description,
        file = _node$data$target$fie.file;
    var mimeType = file.contentType;
    var mimeGroup = mimeType.split('/')[0];

    switch (mimeGroup) {
      case 'image':
        return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("img", {
          title: title ? title : null,
          alt: description ? description : null,
          src: file.url,
          className: "jsx-3687481960",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
          id: "3687481960",
          __self: this
        }, "img.jsx-3687481960{margin:5px 0;}@media (min-width:769px){img.jsx-3687481960{width:47%;margin:12px 10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOb2RlLmpzIFByb2plY3RzXFxOZXh0LmpzIEFwcHNcXG1lZGljYWxtYWxwcmFjdGljZS5naXRodWIuaW9cXHNyY1xcdXRpbHNcXGNvbnRlbnRmdWxcXENvbnRlbnRmdWxSaWNoVGV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQjBCLEFBR2dDLEFBS0QsVUFDTyxHQUxyQixjQU1FIiwiZmlsZSI6IkQ6XFxOb2RlLmpzIFByb2plY3RzXFxOZXh0LmpzIEFwcHNcXG1lZGljYWxtYWxwcmFjdGljZS5naXRodWIuaW9cXHNyY1xcdXRpbHNcXGNvbnRlbnRmdWxcXENvbnRlbnRmdWxSaWNoVGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJMT0NLUyB9IGZyb20gJ0Bjb250ZW50ZnVsL3JpY2gtdGV4dC10eXBlcyc7XHJcbmltcG9ydCB7IGRvY3VtZW50VG9SZWFjdENvbXBvbmVudHMgfSBmcm9tICdAY29udGVudGZ1bC9yaWNoLXRleHQtcmVhY3QtcmVuZGVyZXInO1xyXG5cclxuaW1wb3J0IEJsb2NrUXVvdGUgZnJvbSAnLi9CbG9ja3F1b3RlJztcclxuXHJcbmNvbnN0IHJpY2hUZXh0T3B0aW9ucyA9IHtcclxuICByZW5kZXJOb2RlOiB7XHJcbiAgICBbQkxPQ0tTLkVNQkVEREVEX0FTU0VUXTogbm9kZSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBmaWxlIH0gPSBub2RlLmRhdGEudGFyZ2V0LmZpZWxkcztcclxuICAgICAgY29uc3QgbWltZVR5cGUgPSBmaWxlLmNvbnRlbnRUeXBlO1xyXG4gICAgICBjb25zdCBtaW1lR3JvdXAgPSBtaW1lVHlwZS5zcGxpdCgnLycpWzBdO1xyXG5cclxuICAgICAgc3dpdGNoIChtaW1lR3JvdXApIHtcclxuICAgICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZSA/IHRpdGxlIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIGFsdD17ZGVzY3JpcHRpb24gPyBkZXNjcmlwdGlvbiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2ZpbGUudXJsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcclxuICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDclO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTJweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnYXBwbGljYXRpb24nOlxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGEgYWx0PXtkZXNjcmlwdGlvbiA/IGRlc2NyaXB0aW9uIDogbnVsbH0gaHJlZj17ZmlsZS51cmx9PlxyXG4gICAgICAgICAgICAgIHt0aXRsZSA/IHRpdGxlIDogZmlsZS5kZXRhaWxzLmZpbGVOYW1lfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLCBjb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgIHttaW1lVHlwZX0gZW1iZWRkZWQgYXNzZXR7JyAnfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW0JMT0NLUy5FTUJFRERFRF9FTlRSWV06IG5vZGUgPT4ge1xyXG4gICAgICBjb25zdCBmaWVsZHMgPSBub2RlLmRhdGEudGFyZ2V0LmZpZWxkcztcclxuICAgICAgc3dpdGNoIChub2RlLmRhdGEudGFyZ2V0LnN5cy5jb250ZW50VHlwZS5zeXMuaWQpIHtcclxuICAgICAgICBjYXNlICdibG9ja3F1b3RlJzpcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEJsb2NrUXVvdGUgcXVvdGVUZXh0PXtmaWVsZHMucXVvdGVUZXh0fSBxdW90ZXI9e2ZpZWxkcy5xdW90ZXJ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIDxkaXY+Pz8/Pz8/Pz8/Pz8/Pz8/IHt0aXRsZX0gPC9kaXY+O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgQ29udGVudGZ1bFJpY2hUZXh0ID0gZnVuY3Rpb24odGV4dCkge1xyXG4gIHJldHVybiBkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzKHRleHQsIHJpY2hUZXh0T3B0aW9ucyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50ZnVsUmljaFRleHQ7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\Node.js Projects\\Next.js Apps\\medicalmalpractice.github.io\\src\\utils\\contentful\\ContentfulRichText.js */"));

      case 'application':
        return __jsx("a", {
          alt: description ? description : null,
          href: file.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
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
            lineNumber: 44
          },
          __self: this
        }, ' ', mimeType, " embedded asset", ' ');
    }
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_renderNode, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_3__["BLOCKS"].EMBEDDED_ENTRY, function (node) {
    var fields = node.data.target.fields;

    switch (node.data.target.sys.contentType.sys.id) {
      case 'blockquote':
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, __jsx(_Blockquote__WEBPACK_IMPORTED_MODULE_5__["default"], {
          quoteText: fields.quoteText,
          quoter: fields.quoter,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }));

      default:
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, "??????????????? ", title, " ");
    }
  }), _renderNode)
};

var ContentfulRichText = function ContentfulRichText(text) {
  return Object(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_4__["documentToReactComponents"])(text, richTextOptions);
};

/* harmony default export */ __webpack_exports__["default"] = (ContentfulRichText);

/***/ })

})
//# sourceMappingURL=[slug].js.dfca2744e5c12f7cd466.hot-update.js.map