import {useEffect, useRef, useState} from "react";
import playActionSound from "@/Helpers/play_action_sound.js";
import goFullScreen from "@/Helpers/goFullScreen.js";
import playKeyboardSound from "@/Helpers/play_keyboard_sound.js";
import {Link, router, usePage} from "@inertiajs/react";

export default function AppLayout({children}) {

    const { auth } = usePage().props;

    const bg_music = useRef();
    const [transitioning, setTransitioning] = useState(false)

    const [appStarted, setAppStarted] = useState(false);

    window.addEventListener("keydown", function() {
        playKeyboardSound();
    })
    const startApplication = () => {
        setAppStarted(true);
        bg_music.current.play();
        bg_music.current.volume = 0.3;
        playActionSound();
        goFullScreen();
        if (auth.user !== null) {
            router.visit('/dashboard');
        }
    }

    router.on('start', (event) => {
        setTransitioning(true)
    })

    router.on('finish', (event) => {
        setTransitioning(false)
    })

    return (
        <div className="application">

            <div className="weird-resolution">
                Current display resolution is not supported. Recommended resolution is 1920x1080
            </div>

            <video className="application_background_video" muted={true} autoPlay={true} loop={true}>
                <source src="/static/bg.mp4"/>
            </video>

            <audio loop={true} ref={bg_music}>
                <source src="/static/bg_music.mp3"/>
            </audio>

            <div onClick={startApplication} className={ appStarted ? "call-to-action hidden" : "call-to-action" }>
                <h1 className="pretty-font gradient-text">Wonderland of Wisdom</h1>
                <p>Press anywhere to start the application</p>
            </div>

            <div className={transitioning ? "loader on" : "loader"}>
                <h1 className="gradient-text pretty-font">Loading...</h1>
            </div>

            <div className={transitioning ? "router-animation on" : "router-animation"}>
                <div className={ appStarted ? "app_content started" : "app_content" }>
                    { auth.user !== null ? (<div className="user-info pretty-font">Hello, { auth.user.name }</div>) : (<></>) }
                    { auth.user !== null ? (<Link className="logout pretty-font" href={route('logout')} method="post" as="button">Logout</Link>) : (<></>) }
                    {children}
                </div>
            </div>
        </div>
    )
}
