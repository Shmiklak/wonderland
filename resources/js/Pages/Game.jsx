import AppLayout from "@/Layouts/AppLayout.jsx";
import GameQuestion from "@/Components/GameQuestion.jsx";
import {useState} from "react";
import playActionSound from "@/Helpers/play_action_sound.js";
import {router, usePage} from "@inertiajs/react";

function Game({ code, questions }) {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [result, setResult] = useState(0);
    const [processing, setProcessing] = useState(false);

    const { auth } = usePage().props;

    const finishGame = () => {
        playActionSound();
        setProcessing(true);
        axios.post('/api/save-game-result', {
            user_id: auth.user.id,
            game_code: code,
            result: result
        }).then(() => {
            setProcessing(false);
            router.visit('/dashboard');
        });
    }

    return (
        <>
            <img src='/static/assets/images/vitalina_standing.png' className="in-game-vitalina"/>

            <div className="in-game-score pretty-font">
                Score: { result } / 10
            </div>

            { currentQuestion < 10 ?
                (<GameQuestion question={questions[currentQuestion]} setResult={setResult} setCurrentQuestion={setCurrentQuestion}/>) :
                (<button disabled={processing} onClick={finishGame} className="btn btn-success game-finish-button">{processing ? "Please wait..." : "Finish"}</button>)
            }

        </>
    )
}

Game.layout = page => <AppLayout children={page}/>

export default Game
