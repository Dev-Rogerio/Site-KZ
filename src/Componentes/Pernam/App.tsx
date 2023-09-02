import React from "react";
import { input } from "../Pernam/Input";


function App() {
    return (
        <div className="flex bg-zinc-600 w-13 gap-y-20 m">
            <h1>Clones de input</h1>
            <div>
                <input id="name" type="text" placeholder="Nome" required={true} />
                <input id="email" type="email" placeholder="E-mail" required={true} />
            </div>
        </div>
    );
}

export default App;