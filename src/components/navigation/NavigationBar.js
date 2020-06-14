import React, { PureComponent } from "react";
import { AppBar, ToolBar } from "../../util/material";
import "./navigation.scss";
import { faGhost, faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListItem, Avatar } from "@material-ui/core";
import { withRouter, matchPath } from "react-router-dom";

class NavigationBar extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      home: false
    }
  }
  componentWillMount() {
    this.onRouteChanged('/');
  }
  componentDidMount() {

    this.props.history.listen((location, action) => {
      this.onRouteChanged(location.pathname)
      // console.log(this.props)
    });

  }
  onRouteChanged(path) {
    const result = matchPath(path, '/');
    this.setState({ home: !result.isExact})
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    const {home} = this.state;
    return (
      home &&
        <AppBar className="game-toolbar" position="fixed" color="transparent">
          <ToolBar>
            <div className="toolbar-start">
              <ListItem onClick={this.goBack.bind(this)}>
                <Avatar>
                  <FontAwesomeIcon icon={faChevronCircleLeft} />
                </Avatar>
              </ListItem>
            </div>
            <div className="toolbar-end">
              <ListItem>
                <Avatar>
                  <FontAwesomeIcon icon={faGhost} />
                </Avatar>
              </ListItem>
            </div>
          </ToolBar>
        </AppBar>
        
    );
  }
}
export default withRouter(NavigationBar)