import React from "react";

import ContextProvider from "./components/context/context";
import Header from "./components/header/header";
import Form from "./components/form/form";
import Footer from "./components/footer/footer";
import Response from "./components/response/response";

import("./app.scss");

export default class App extends React.Component {
  render() {
    return (
      <ContextProvider>
        <Header />
        <main>
          <section>
            <Form />
            <Response />
          </section>
        </main>
        <Footer />
      </ContextProvider>
    );
  }
}
