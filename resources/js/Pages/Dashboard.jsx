import {Head} from '@inertiajs/react';
import AppLayout from "@/Layouts/AppLayout.jsx";
import Planet from "@/Components/Planet.jsx";
function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />

            <div className="game-interface">
                <div className="planets-area">
                    <Planet code={"math"} name={"Math Adventure Quest"} image={"/static/assets/images/planets/math.png"}/>
                    <Planet code={"language"} name={"Language Explorer"} image={"/static/assets/images/planets/language.png"}/>
                    <Planet code={"geo"} name={"Geography Safari"} image={"/static/assets/images/planets/geo.png"}/>
                    <Planet code={"vitalina"} name={"Talk to Vitalina"} image={"/static/assets/images/planets/vitalina.png"}/>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = page => <AppLayout children={page}/>
export default Dashboard
