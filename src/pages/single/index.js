import React, { PureComponent } from "react";
import { GameHero } from "../../components/gamehero/gamehero";
import { withRouter } from "react-router-dom";

class Single extends PureComponent {
    render() {
        const { game } = this.props.location.state;
        return (
            <div>
                <GameHero game={game}/>
                <div>stuff</div>
            </div>
        )
    }
}
export default withRouter(Single);