import React, { PureComponent } from "react";
import Smooth from '../../opengl/components/Smooth';
import Plane from '../../opengl/gl/Plane';
import { preloadImages } from '../../opengl/utils';

export default class HeroMain extends PureComponent {
    constructor() {
        super()
        preloadImages().then(() => {
            document.body.classList.remove('loading');

            const elements = document.querySelectorAll('.js-plane');
            elements.forEach((el, index) => new Plane().init(el, index));
            const smooth = new Smooth();
        });
    }
    render() {
        return <div data-scroll>
            <div data-scroll-content>
                <div className="item">
                    <figure className="item__fig js-plane">
                        <div className="aspect"></div>
                        <img className="item__img" src="logo512.png" alt="Some image" />
                    </figure>
                </div>

            </div>
        </div>
    }
}