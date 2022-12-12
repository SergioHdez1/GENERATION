import React from "react";
import { CarFormComponent, CarTable, SendButton, UserFormComponent, UserTable } from "../components";

const HomePage = () => {
    return (
        <div class>
            <h1 class="text-center">Ingreso de Datos</h1>
            <div class="container">
                <div class="row">
                    <div class="col container border m-4 p-2">
                        <CarFormComponent/>
                        <div class="d-flex justify-content-center">
                            <SendButton/>
                        </div>
                    </div>
                    <div class="col container border m-4 p-2">
                        <UserFormComponent/>
                        <div class="d-flex justify-content-center">
                            <SendButton/>
                        </div>
                    </div>
            </div>
            <h1 class="text-center">Vista de Datos</h1>
            <div class="container">
                </div>
                <div class="row">
                    <div class="col">
                        <CarTable/>
                    </div>
                    <div class="col">
                        <UserTable/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;