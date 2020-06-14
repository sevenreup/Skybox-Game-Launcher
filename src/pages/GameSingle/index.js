import React, { PureComponent } from 'react';
import { withStyles, ButtonBase } from "@material-ui/core";
import './gamesingle.scss';

const heightHero = 400;
const styles = theme => ({
    image: {
        height: heightHero
    },
    imageBack: {
        background: '#0000006b',
        width: '100%',
        height: heightHero,
        objectFit: 'cover',
        overflow: 'hidden'
    },
})

class GameSingle extends PureComponent {
    constructor(props) {
        super(props)
        console.log(props);
        
    }
    render() {
        const {classes} = this.props;
        const {game} = this.props.location.state;
        return (
            <div className="single-wrapper">
                <div className="single-content">
                    <div className="single-hero">
                        <figure className={`hero-image ${classes.image}`} style={{background: `url("/${game.img}") no-repeat`}}>
                            <div className={classes.imageBack}/>
                        </figure>
                    </div>
                </div>
                <div className="single-sidebar">

                </div>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(GameSingle)