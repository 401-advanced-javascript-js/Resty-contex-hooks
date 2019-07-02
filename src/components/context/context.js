import React from "react";
import superagent from "superagent";

export const Context = React.createContext();

export default class ContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      URL: "",
      method: "",
      response: {
        Headers: {},
        Response: {}
      },
      handleURL: this.handleURL,
      handleMethod: this.handleMethod,
      handleSubmit: this.handleSubmit
    };
  }

  handleURL = event => {
    event.preventDefault();
    this.setState({ URL: event.target.value });
  };

  handleMethod = event => {
    this.setState({ method: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const result = await superagent(this.state.method, this.state.URL);
    this.setState({
      response: { headers: result.headers, response: result.body }
    });
  };

  render() {
    return (
      <>
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      </>
    );
  }
}
