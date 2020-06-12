import React, { PureComponent } from "react";
import { AppBar, ToolBar } from "../../util/material";
import "./navigation.scss";

export default class NavigationBar extends PureComponent {
  render() {
    return (
      <AppBar position="fixed">
        <ToolBar></ToolBar>
      </AppBar>
    );
  }
}
