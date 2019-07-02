/* eslint-disable react/prop-types */
import React from "react";
import { Context } from "../context/context";

import("./form.scss");

export default class Form extends React.Component {
  static contextType = Context;
  render() {
    return (
      <>
        <form onSubmit={this.context.handleSubmit}>
          <input
            type="text"
            name="URL"
            placeholder="URL"
            onChange={this.context.handleURL}
          />
          {/* crud buttons */}
          <div id="methods">
            <label>
              <input
                type="radio"
                name="method"
                value="get"
                onChange={this.context.handleMethod}
              />
              <span>GET</span>
            </label>

            <label>
              <input
                type="radio"
                name="method"
                value="post"
                onChange={this.context.handleMethod}
              />
              <span>POST</span>
            </label>

            <label>
              <input
                type="radio"
                name="method"
                value="put"
                onChange={this.context.handleMethod}
              />
              <span>PUT</span>
            </label>

            <label>
              <input
                type="radio"
                name="method"
                value="patch"
                onChange={this.context.handleMethod}
              />
              <span>PATCH</span>
            </label>

            <label>
              <input
                type="radio"
                name="method"
                value="delete"
                onChange={this.context.handleMethod}
              />
              <span>DELETE</span>
            </label>

            <label>
              <button type="submit">Go!</button>
            </label>
          </div>

          {/* json input */}
          <section className="deck">
            <div id="body">
              <textarea placeholder="Raw JSON Body" name="requestBody" />
            </div>
          </section>
        </form>
      </>
    );
  }
}
