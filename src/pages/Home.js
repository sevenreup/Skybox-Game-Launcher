import React, { PureComponent } from "react";
import GameCatList from "../components/GameCatList/GameCatList";
import HeroMain from "../components/HeroNormal/HeroNormal";

export default class extends PureComponent {

    render() {
        return (
            <div className="page-wrapper">
                <HeroMain/>
                <GameCatList />
            </div>
        )
    }
}