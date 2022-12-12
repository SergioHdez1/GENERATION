import React from "react";
import {SendButton, CrudButton}  from "./Buttons";

const CarTable = () => {
    return (
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                <th scope="col">#ID</th>
                <th scope="col">Marca</th>
                <th scope="col">Modelo</th>
                <th scope="col">Valor</th>
                <th scope="col">Año</th>
                <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="d-flex justify-content-center"><CrudButton/></td>
                </tr>
                <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="d-flex justify-content-center"><CrudButton/></td>
                </tr>
                <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="d-flex justify-content-center"><CrudButton/></td>
                </tr>
            </tbody>
        </table>
    );
}

const UserTable = () => {
    return (
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                <th scope="col">#ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Correo</th>
                <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td class="d-flex justify-content-center"><CrudButton/></td>
                </tr>
                <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td class="d-flex justify-content-center"><CrudButton/></td>
                </tr>
                <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td class="d-flex justify-content-center"><CrudButton/></td>
                </tr>
            </tbody>
        </table>
    );
}

export {CarTable, UserTable};