import React, { PureComponent, useState } from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import './fullhero.scss'
import { usePalette } from 'react-palette';
import { connect } from "react-redux";
import { changeActivePrimary } from '../../redux/actions';
import chroma from 'chroma-js'

function Full(props) {
    const { game } = props;
    const { data, loading, error } = usePalette('/' + game.img)
    const carousel = [
        { img: "/image/image3.jpg" },
        { img: "/image/image4.jpg" },
        { img: "/image/image5.jpg" },
        { img: "/image/image6.jpg" },
    ]
    const fakeGenre = ["one", "two", "three"]
    const [activecarousel, setActivecarousel] = useState(carousel[0])

    if (!loading) {
        const colors = { primary: '', shadow: {}}
        colors.primary = data.vibrant
        colors.shadow.first = chroma(data.vibrant).brighten(1);
        colors.shadow.second = chroma(data.vibrant).brighten(3);
        props.changeActivePrimary(colors)
    }
    
    return (
        <div className="full-container">
            <div className="wallpaper" style={{ background: `url(/${game.img})` }}></div>
            <div className="overlay" style={{ boxShadow: !loading ? `inset 0px -500px 120px ${data.vibrant}` : `inset 0px -500px 120px rgba(41, 177, 231, 0.9) ` }}></div>
            <Container fluid className="hero-content">
                <Row>
                    <Col>
                        <div className="caption-holder">
                            <span className="pill">#1 your list</span>
                            <h3 className="title">{game.name}</h3>
                            <ul>
                                <li>
                                    <span>Publisher:</span>
                                    <span className="pill">E.A</span></li>
                                <li>
                                    <span>Date:</span>
                                    <span className="pill">12 June 2020</span></li>
                                <li>
                                    <span className="genre">Genre:</span>
                                    {fakeGenre.map(genre => {
                                        return <span key={genre} className="pill">{genre}</span>
                                    })}
                                </li>
                            </ul>
                            <div className="description">
                                <p>
                                    SnowRunner: A MudRunner Game is an upcoming sequel to MudRunner developed by Saber Interactive and expected to be released by Focus Home Interactive in 2020 on Epic Games Store, Xbox One and PlayStation 4
                                </p>
                            </div>
                            <span>See more</span>
                        </div>
                    </Col>
                    <Col>
                        <div className="moment-holder">
                            <div className="carousel">
                                <img src={activecarousel.img} />
                            </div>
                            <div className="carousel-indiactor">
                                <div className="indicators">
                                    {
                                        carousel.map(car => {
                                            return <img src={car.img} key={car.img} onClick={() => setActivecarousel(car)} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export const FullHero = connect(null, { changeActivePrimary })(Full)