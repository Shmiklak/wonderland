import AppLayout from "@/Layouts/AppLayout.jsx";
import playActionSound from "@/Helpers/play_action_sound.js";
import {useState} from "react";
import BackBtn from "@/Components/BackBtn.jsx";
import {Head} from "@inertiajs/react";
function Vitalina() {

    const [message, setMessage] = useState("Hello! I'm Vitalina, your  AI companion. I’m here to help you to learn new stuff about our world. Anything in your mind? 😄")

    const [history, setHistory] = useState([]);

    const [question, setQuestion] = useState('');

    const [processing, setProcessing] = useState(false);

    const submitQuestion = () => {
        playActionSound();
        setProcessing(true);
        setMessage("Thinking...")
        let current_question = question;
        setQuestion('');
        axios.post('/api/vitalina', {
            messages: [...history, {
                role: 'user',
                content: current_question
            }]
        }).then((res) => {
            setMessage(res.data.message);
            setHistory(oldHistory => [...oldHistory, {
                role: 'user',
                content: current_question
            }, {
                role: 'assistant',
                content: res.data.message
            }]);
        }).finally(() => {
            setProcessing(false);
        })
    }

    return (
        <>
            <Head title="Vitalina"/>
            <div className="vitalina game-interface">
                <div className="vitalina-area">
                    <img draggable="false" src="/static/assets/images/vitalina.png" alt="Vitalina" className="vitalina-image"/>
                    <div className="vitalina-last-response">
                        <div className="message">
                            {message}
                        </div>
                    </div>
                </div>

                <input placeholder="Ask me whatever you want :)" className="form-control vitalina-question" value={question} onChange={(e) => setQuestion(e.target.value)}/>
                <button disabled={processing} className="btn btn-primary vitalina-button" onClick={submitQuestion}>{ processing ? "Please wait..." : "Submit" }</button>
            </div>
            <BackBtn/>
        </>
    )
}

Vitalina.layout = page => <AppLayout children={page}/>
export default Vitalina
