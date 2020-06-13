import React, { PureComponent } from "react";
import { withStyles, ButtonBase } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import './heronormal.scss';
const heroHeight = 350;
const style = theme => ({
    image: {
        display: 'block',
        boxSizing: 'border-box',
        background: 'url(image/image2.jpg) no-repeat',
        width: '100%',
        height: heroHeight,
        objectFit: 'cover',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    imageBack: {
        background: '#0000006b',
        width: '100%',
        height: heroHeight,
        objectFit: 'cover',
        overflow: 'hidden'
    },
    play: {
        background: '#007bff',
    }
});

class HeroMain extends PureComponent {
    constructor() {
        super();
    }
    render() {
        const { classes } = this.props;
        return <div data-scroll className="hero">
            <div data-scroll-content>
                <div className="item">
                    <figure className={classes.image}>
                        <div className={classes.imageBack}>
                            <div className="hero-caption">
                                <span className="game-pill">Last Played</span>
                                <h1 className="hero-title">Random Game that you didnt play</h1>
                                <ButtonBase focusRipple className={`btn-pill-icon ${classes.play}`}>
                                    <FontAwesomeIcon icon={faPlayCircle} className="btn-icon"/>
                                    <span className="btn-caption" >Play</span>
                                </ButtonBase>
                            </div>
                        </div>
                    </figure>
                </div>

            </div>
        </div>
    }
}
export default withStyles(style, { withTheme: true })(HeroMain);