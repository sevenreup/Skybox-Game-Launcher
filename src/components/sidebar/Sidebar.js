import React, { PureComponent } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./sidebar.scss";
import { Drawer, ToolBar, Divider } from "../../util/material";

export default class SideBar extends PureComponent {
  render() {
    return (
      <Drawer variant="permanent">
        <ToolBar />
        <div className="drawer-contents">
            <FontAwesomeIcon icon="camera"/>
            <Divider />
        </div>
      </Drawer>
    );
  }
}
