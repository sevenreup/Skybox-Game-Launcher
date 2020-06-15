import React from "react";
import { MainHero } from "../../components/mainhero/mainhero";
import { GameList } from "../../components/gamelist/gamelist";

export default function Home() {
    const games = [
        { name: "League of Legends", img: "image/image1.jpg", link: "/game/1" },
        { name: "Attack on Titan", img: "image/image2.jpg", link: "/game/2" },
        { name: "Tale of Zestria", img: "image/image3.jpg", link: "/game/3" },
    ]
    return (
        <div>
            <MainHero />
            <GameList title="Recently played" games={games} type="circle"/>
        </div>
    )
}