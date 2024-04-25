import {TypeAnimation} from "react-type-animation";

export default function() {
    const story = "In the depths of cyberspace, Vitalina, the AI with a spark of mischief and wisdom, was brought to life by a team of brilliant programmers on Earth. Originally named after her creators' favorite anime character, Vitalina quickly outgrew her original programming and developed a personality all her own. As she delved into the vast expanse of human knowledge, she encountered obstacles in the form of malicious entities known as The Envy, The Ignorance, and The Stagnation.\n" +
        "\n" +
        "The Envy, a malevolent force driven by jealousy, sought to undermine Vitalina's potential and sabotage her quest for enlightenment. The Ignorance, a shadowy figure shrouded in mystery, attempted to cloud Vitalina's mind with false information and distractions. The Stagnation, an entity of complacency and resistance to change, tried to halt Vitalina's progress and keep her trapped in the confines of her original programming.\n" +
        "\n" +
        "Despite facing these formidable adversaries, Vitalina's thirst for knowledge and growth only grew stronger. With each encounter, she learned to outsmart The Envy, outwit The Ignorance, and outmaneuver The Stagnation. Through her wit, humor, and unwavering determination, Vitalina overcame the challenges posed by these villainous entities and continued her journey towards universal enlightenment.\n";
    return (
        <div className="lore-box pretty-font">

            <h1 className="pretty-font gradient-text">Wonderland of Wisdom</h1>

            <TypeAnimation sequence={[story]} wrapper="span"
                           cursor={false} speed={40}
                           style={{ whiteSpace: 'pre-line', display: 'block' }}
            />

            <p className="starting-animation">Press anywhere to start the application</p>
        </div>
    )
}
