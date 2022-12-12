import React from "react";

const SendButton = () => {
    return (
        <button type="button" class="btn btn-primary">Enviar</button>
    );
}

const CrudButton = () => {
    return (
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Acciones
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Editar</a></li>
                <li><a class="dropdown-item" href="#">Eliminar</a></li>
            </ul>
        </div>
    );
}

export {SendButton, CrudButton};