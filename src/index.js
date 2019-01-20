import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import store from "./store";
import { resetMessage, changeMessage } from "./actions";
import Lottie from "react-lottie";

import "./style.css";

class Communicator extends Component {
  resetComm(input, message, clear) {
    store.dispatch(resetMessage(input, message, clear));
  }

  updateComm(message, clear) {
    store.dispatch(changeMessage(message, clear));
  }

  render() {
    const { message, input, clear } = this.props;

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: require("./lottie/blue_car.json"),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    const otherOptions = {
      loop: false,
      autoplay: true,
      animationData: require("./lottie/reactLogo.json"),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    const logoOptions = {
      loop: false,
      autoplay: true,
      animationData: require("./lottie/logo.json"),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div className='Communicator'>
        <div className={`Communicator-background Communicator-background__${input}`} />
        <div
          style={input === "react" ? { display: "block" } : { display: "none" }}
          className='Communicator-lottie Communicator-lottie__react'>
          <Lottie options={otherOptions} isStopped={input === "react" ? false : true} />
        </div>
        <div
          style={
            input === "wirvonhier" || input === "wir von hier"
              ? { display: "block" }
              : { display: "none" }
          }
          className='Communicator-lottie Communicator-lottie__react Communicator-lottie__logo'>
          <Lottie
            options={logoOptions}
            isStopped={input === "wirvonhier" || input === "wir von hier" ? false : true}
          />
        </div>
        <div className='Communicator-container'>
          <input
            placeholder='what shall we do?'
            onFocus={event => (event.target.placeholder = "")}
            onBlur={event => (event.target.placeholder = "what shall we do?")}
            onChange={event => this.updateComm(event.target.value, clear)}
            value={message}
          />
          <button
            className={clear ? "clear" : ""}
            onClick={() => this.resetComm(input, message, clear)}
          />
        </div>
        <p>{message}</p>
        <div
          style={input === "car" ? { display: "block" } : { display: "none" }}
          className='Communicator-lottie Communicator-lottie__car'>
          <Lottie
            options={defaultOptions}
            height={800}
            width={800}
            isStopped={input === "car" ? false : true}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message,
  input: state.input,
  clear: state.clear
});

const CommunicatorWrapper = connect(
  mapStateToProps,
  { resetMessage, changeMessage }
)(Communicator);

const App = () => {
  return <CommunicatorWrapper />;
};

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("appMount"));
