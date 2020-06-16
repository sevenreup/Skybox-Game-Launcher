import React, { PureComponent } from "react";
import { withRouter, Link } from "react-router-dom";
import { faPlay, faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './gamehero.scss'

class gamehero extends PureComponent {
    carousel = [
        {img: "/image/image1.jpg"},
        {img: "/image/image2.jpg"},
        {img: "/image/image3.jpg"},
        {img: "/image/image4.jpg"},
    ]

    constructor(props) {
        super(props)
        this.state = {
            caroView: this.carousel[0] 
        }
        this.changeView.bind(this)
    }

    render() {
        const { game } = this.props;
        const { caroView } = this.state;
        return (
            <div className="game-single-hero">
                <div className="single-wallpaper" style={{ background: `url(/${game.img})` }} />
                <div className="single-header">
                    <div className="single-caption">
                        <h3>Dead Cells</h3>
                        <p>This is the amazing description of the stuff and what not..</p>
                        <span className="pill">Last Played</span>
                        <br/>
                        <Link className="play">
                            <span><FontAwesomeIcon icon={faPlay} /> Play</span>
                        </Link>
                    </div>
                    <div className="single-preview">
                        <div className="preview-container">
                            <img src={caroView.img} />
                        </div>
                    </div>
                    <div className="single-carousel">
                        <div className="carousel-holder">
                            <div className="image-holder">
                                {
                                    this.carousel.map(car => {
                                        return (
                                            <img key={car.img} src={car.img} onClick={()=> { this.changeView(car)}}/>
                                        )
                                    })
                                }
                            </div>
                            <FontAwesomeIcon icon={faChevronCircleRight}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    changeView(img) {
        console.log(img);
        
        this.setState({caroView: img})
    }

}

export const GameHero = withRouter(gamehero)