import {Link} from "@inertiajs/react";
import playActionSound from "@/Helpers/play_action_sound.js";

export default function Planet(props) {
    return (
        <Link href={route(props.code)} onClick={playActionSound} className={ "planet planet_" + props.code }>
            <img draggable="false" alt={props.code} src={props.image}/>
            <span>{props.name}</span>
        </Link>
    )
}
