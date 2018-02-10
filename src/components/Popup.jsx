import React, {Component} from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import "../styles/Popup.scss";

class Popup extends Component {
  constructor(props) {
    super(props);

    this.el = document.createElement("div");
    this.el.setAttribute("id", "popup");
  }

  componentDidMount() {
    document.querySelector("#popup-container").appendChild(this.el);
  }
  componentWillUnmount() {
    document.querySelector("#popup-container").removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

const mapStateToProps = state => {
  return {
    // config: state.config,
    // menu: state.menu
  };
};

export default connect(mapStateToProps, {})(Popup);
