import React from "react";
import camaro from "./img/camaro.png"

const App = ()=>{
    return(
        <div>
            <h1>Modelos deportivos</h1>
            <h2>Camaro</h2>
            <div align="center">
                <img src={camaro} alt="camaro" align="center"/>
            </div>
        </div>
    );
}
export default App;