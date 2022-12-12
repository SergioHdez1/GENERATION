import React from "react";

const CarFormComponent = () => {
    return (
        <div>
            <h3>Formulario Auto</h3>
            <form>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Marca</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ingrese la marca del auto"/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Modelo</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese el modelo del auto"/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Color</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ingrese el color del auto"/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Valor</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese el valor del auto"/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Año</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese el año del auto"/>
                </div>
            </form>
        </div>
    );
}

const UserFormComponent = () => {
    return (
        <div>
            <h3>Formulario Usuario</h3>
            <form>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ingrese su nombre"/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese su apellido"/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Correo</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese su direccion de correo electronico"/>
                </div>
            </form>
        </div>
    );
}

export {CarFormComponent, UserFormComponent};