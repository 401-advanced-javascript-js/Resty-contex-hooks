import React from "react";
import ReactJSON from "react-json-view";

import { Context } from "../context/context";

import("./response.scss");

export default class Response extends React.Component {
  static contextType = Context;
  render() {
    return (
      <>
        <div id="json">
          <ReactJSON src={this.context.response.headers} name="Headers" />
          <ReactJSON src={this.context.response.response} name="Response" />
        </div>
      </>
    );
  }
}
