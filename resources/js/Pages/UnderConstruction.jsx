import AppLayout from "@/Layouts/AppLayout.jsx";
import BackBtn from "@/Components/BackBtn.jsx";
import {Head} from "@inertiajs/react";
function underConstruction() {
    return (
        <div className="under-construction game-interface">
            <Head title="Currently unavailable"/>
            <h1>This page is currently under construction. Please check back later</h1>
            <BackBtn/>
        </div>
    )
}

underConstruction.layout = page => <AppLayout children={page}/>
export default underConstruction
