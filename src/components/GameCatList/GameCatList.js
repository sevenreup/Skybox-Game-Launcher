import React, { PureComponent } from "react";
import { withRouter } from 'react-router-dom';
import { Avatar, List, ListItem, withStyles, GridList, CardMedia, GridListTile, Card, CardActionArea } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import './gamecatlist.scss';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    }
});

class GameCatList extends PureComponent {
    history = this.props.history;
    games = [
        { name: 'Hellbrade', img: 'image/image1.jpg', link: '1' },
        { name: 'three', img: 'image/image2.jpg', link: '1' },
        { name: 'four', img: 'image/image3.jpg', link: '1' },
        { name: 'five', img: 'image/image4.jpg', link: '1' },
        { name: 'two', img: 'image/image5.jpg', link: '1' }
    ]

    constructor(props) {
        super(props)
        // this.goToGame = this.goToGame.bind(this)
    }

    render() {
        const { classes } = this.props;
        return <div className={`game-list ${classes.root}`}>
            <h1>Recenty Played</h1>
            <GridList cols={3.5} className='grid-list'>
                {
                    this.games.map((game) => {
                        return <GridListTile key={game.name} className='tile' onClick={this.goToGame.bind(this, game)} onContextMenu={this.handleContextClick}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia className='tile-image' image={game.img} component="img" />
                                    <div className='caption'>
                                        <span className="tile-name">{game.name}</span>
                                        <FontAwesomeIcon onClick={this.launchGame} className="play-button" icon={faPlayCircle} />
                                    </div>
                                </CardActionArea>
                            </Card>
                        </GridListTile>
                    })
                }
            </GridList>
        </div>
    }

    launchGame(e) {
        e.stopPropagation();
        console.log('ass'); 
    }

    goToGame(game) {
        this.props.history.push(`/game/${game.link}`)
    }

    handleContextClick(e) {
        console.log('context');
    }
}

// const styled = 

export default withRouter(withStyles(styles, { withTheme: true })(GameCatList));