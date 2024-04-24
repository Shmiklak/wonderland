import {useEffect, useState} from "react";
import playActionSound from "@/Helpers/play_action_sound.js";
import Swal from "sweetalert2";
function GameQuestion(props) {
    function shuffle(array) {
        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
    }

    function checkAnswer(answer) {
        playActionSound()

        if (answer == props.question.correct_answer) {
            props.setResult(oldResult => oldResult + 1)
            Swal.fire({
                'icon': 'success',
                'title': 'Correct answer'
            }).then(() => {
                props.setCurrentQuestion(oldQuestion => oldQuestion + 1)
            })
        } else {
            Swal.fire({
                'icon': 'error',
                'title': 'Oops, the answer is wrong. The correct answer is ' + props.question.correct_answer
            }).then(() => {
                props.setCurrentQuestion(oldQuestion => oldQuestion + 1)
            })
        }
    }

    let answers = [props.question.correct_answer, props.question.answer_variant_2, props.question.answer_variant_3];
    shuffle(answers)

    const [answersState, setAnswersState] = useState(answers)

    useEffect(() => {
        let answers = [props.question.correct_answer, props.question.answer_variant_2, props.question.answer_variant_3];
        shuffle(answers)
        setAnswersState(answers)
    }, [props.question])

    return (
        <div className="game-question">
            <div className="question">
                {props.question.question}
            </div>
            <div className="answers">
                { answersState.map((answer) => (
                    <div onClick={() => checkAnswer(answer)} className="answer">
                        { answer }
                    </div>
                )) }
            </div>
        </div>
    )
}


export default GameQuestion
