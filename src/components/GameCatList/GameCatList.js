import React, { PureComponent } from "react";
import { Avatar, List, ListItem, withStyles, GridList, CardMedia, GridListTile, Card, CardActionArea } from "@material-ui/core";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    cardImage: {
        width: '100%',
        height: 180,
        objectFit: 'contain'
    }
});

class GameCatList extends PureComponent {
    games = [
        { name: 'one', img: 'image/image1.jpg', link: '' },
        { name: 'three', img: 'image/image2.jpg', link: '' },
        { name: 'four', img: 'image/image3.jpg', link: '' },
        { name: 'five', img: 'image/image4.jpg', link: '' },
        { name: 'two', img: 'image/image5.jpg', link: '' }
    ]
    render() {
        const { classes } = this.props;
        return <div className={classes.root}>
            <h1>Recenty Played</h1>
            <GridList cols={3.5} className={classes.gridList}>
                {
                    this.games.map((game) => {
                        return <GridListTile key={game.name}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia className={classes.cardImage} image={game.img} component="img" />
                                </CardActionArea>
                            </Card>
                        </GridListTile>
                    })
                }
            </GridList>
        </div>
    }
}

export default withStyles(styles, { withTheme: true })(GameCatList)