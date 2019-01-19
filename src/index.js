import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import store from "./store";
import { resetMessage, changeMessage } from "./actions";

import "./style.css";

class Communicator extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  resetComm() {
    store.dispatch(resetMessage());
  }

  updateComm(message) {
    store.dispatch(changeMessage(message));
  }

  render() {
    const { message } = this.props;

    return (
      <div>
        <input onChange={event => this.updateComm(event.target.value)} value={message} />
        <p>Scotty: {message}</p>
        <button onClick={() => this.resetComm()}>Clear</button>
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
