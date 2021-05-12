"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
Required Props: 
backgroundDim = bool
title = string
body = string

optional
done = callback
*/
class SimpleModal extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "SimpleModalContainer"
    }, this.props.backgroundDim && /*#__PURE__*/_react.default.createElement("div", {
      className: "dimBackground"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "SimpleModal"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "SimpleModalTitleContainer"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "SimpleModalTitle"
    }, this.props.title), /*#__PURE__*/_react.default.createElement("div", {
      className: "closeButton"
    }, "x")), /*#__PURE__*/_react.default.createElement("div", {
      className: "SimpleModalBody"
    }, this.props.body), /*#__PURE__*/_react.default.createElement("div", {
      className: "SimpleModalBottomButtonContainers"
    }, this.props.done && /*#__PURE__*/_react.default.createElement("div", {
      className: "SimpleModalDoneButton"
    }, "Done"))));
  }

}

exports.default = SimpleModal;