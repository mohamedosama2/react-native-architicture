import * as React from "react";
import { store } from "../store";
import { Provider } from "react-redux";

type Component = React.FC | React.FC[];

const ReduxWrapper = (Component: Component) => (
  <Provider {...{ store }}>{Component}</Provider>
);

export default ReduxWrapper;
