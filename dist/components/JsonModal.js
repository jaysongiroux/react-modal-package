"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./styles/JsonModal.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
Required Props: 
backgroundDim = bool
contents = object
close = callback
open = bool
size = string("small", "medium", "large") - default: large

optional
done = callback
*/
class SimpleModal extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {},
      contents: {}
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props !== prevProps) {
      this.setState({
        contents: this.props.contents
      });

      switch (this.props.size) {
        case "small":
          this.setState({
            style: {
              height: "50vh",
              width: "50%"
            }
          });
          break;

        case "medium":
          this.setState({
            style: {
              height: "60vh",
              width: "60%"
            }
          });
          break;

        default:
        case "large":
          this.setState({
            style: {
              height: "80vh",
              width: "80%"
            }
          });
          break;
      }
    }
  }

  render() {
    if (this.props.open) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "SimpleModalContainer"
      }, this.props.backgroundDim && /*#__PURE__*/_react.default.createElement("div", {
        className: "dimBackground",
        onClick: this.props.close
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "SimpleModal",
        style: this.state.style
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "SimpleModalTitleContainer"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "SimpleModalTitle"
      }, this.state.contents.title), /*#__PURE__*/_react.default.createElement("div", {
        className: "closeButton",
        onClick: this.props.close
      }, "x")), /*#__PURE__*/_react.default.createElement("div", {
        className: "SimpleModalBody"
      }, /*#__PURE__*/_react.default.createElement("div", null, this.state.contents.body)), /*#__PURE__*/_react.default.createElement("div", {
        className: "SimpleModalBottomButtonContainers"
      }, this.props.done && /*#__PURE__*/_react.default.createElement("div", {
        className: "SimpleModalDoneButton",
        onClick: this.props.done
      }, "Done"))));
    } else {
      return null;
    }
  }

}

exports.default = SimpleModal;