import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core";

const style = theme => ({
    image: {
        display: 'block',
        boxSizing: 'border-box',
        background: 'url(image/image2.jpg) no-repeat',
        width: '100%',
        height: 300,
        objectFit: 'cover',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    imageBack: {
        background: 'yellow',
        opacity: 0.3,
        width: '100%',
        height: 300,
        objectFit: 'cover',
    }
});

class HeroMain extends PureComponent {
    constructor() {
        super();
    }
    render() {
        const { classes } = this.props;
        return <div data-scroll>
            <div data-scroll-content>
                <div className="item">
                    <figure className={classes.image}>
                        <div className={classes.imageBack}/>
                    </figure>
                </div>

            </div>
        </div>
    }
}
export default withStyles(style, { withTheme: true })(HeroMain);