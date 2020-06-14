import React, { PureComponent } from 'react';
import { withStyles, ButtonBase } from "@material-ui/core";

const styles = theme => ({

})

 class GameSingle extends PureComponent {
     constructor(props) {
         super(props)
     }
    render() {
        return (
            <div className="page-wrapper">
                <div className="game-hero">
                    <figure>

                    </figure>
                </div>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(GameSingle)