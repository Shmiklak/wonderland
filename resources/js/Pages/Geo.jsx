import {Head, Link} from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout.jsx";
import BackBtn from "@/Components/BackBtn.jsx";
import playActionSound from "@/Helpers/play_action_sound.js";
import Leaderboard from "@/Components/Leaderboard.jsx";

function Geo({leaderboard}) {
    return (
        <>
            <Head title="Geography Safari"/>
            <Leaderboard data={leaderboard}/>
            <div className="vitalina game-interface game-page-vitalina">
                <div className="vitalina-area">
                    <img draggable="false" src="/static/assets/images/geo_start.png" alt="Vitalina" className="vitalina-image"/>
                    <div className="vitalina-last-response">
                        <div className="message">
                            Hey, what’s up? Ready to play some Geography Safari with me? Don’t worry, it’s gonna be really fun 🤗
                        </div>
                    </div>
                </div>
                <Link onClick={playActionSound} href={route('game', 'geo')} className="btn btn-success vitalina-button">Start playing</Link>
            </div>
            <BackBtn/>
        </>
    )
}

Geo.layout = page => <AppLayout children={page}/>

export default Geo
