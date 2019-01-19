import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import store from "./store";
import { resetMessage, changeMessage } from "./actions";

import "./style.css";

class Communicator extends Component {
  state = {
    clear: true
  };

  resetComm() {
    store.dispatch(resetMessage());
    this.setState({ clear: true });
  }

  updateComm(message) {
    store.dispatch(changeMessage(message));
    if (message !== undefined || message !== " ") {
      this.setState({ clear: false });
    }
  }

  render() {
    const { message } = this.props;
    const { clear } = this.state;

    return (
      <div className='Communicator'>
        <div className='Communicator-background' />
        <div className='Communicator-container'>
          <input
            placeholder='what shall we do?'
            onFocus={event => (event.target.placeholder = "")}
            onBlur={event => (event.target.placeholder = "what shall we do?")}
            onChange={event => this.updateComm(event.target.value)}
            value={message}
          />
          <button className={clear ? "clear" : ""} onClick={() => this.resetComm()} />
        </div>
        <p>{message}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message
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
