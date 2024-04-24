import playActionSound from "@/Helpers/play_action_sound.js";
import {Link} from "@inertiajs/react";

export default function BackBtn() {
    return (
        <Link onClick={playActionSound} className="back-btn" href={route('dashboard')}>
            <img draggable="false" src="/static/assets/images/back_btn.png"/>
        </Link>
    )
}
