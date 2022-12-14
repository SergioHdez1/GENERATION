import React, { useEffect, useState } from "react";

const CarFormComponent = () => {
    return (
        <div>
            <h3>Formulario Auto</h3>
            <form>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Marca</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ingrese la marca del auto" />
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Modelo</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese el modelo del auto" />
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Color</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ingrese el color del auto" />
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Valor</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese el valor del auto" />
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Año</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese el año del auto" />
                </div>
            </form>
        </div>
    );
}

const initialUsuario = {
    nombre: "",
    apellido: "",
    correo: "",
    rut: ""
}

const UserFormComponent = ({ userAdd, usuarioEditado, setUsuarioEditado, userEdit }) => {
    const [usuario, setUsuario] = useState(initialUsuario);
    const { nombre, apellido, correo, rut } = usuario;

    useEffect(() => {
        if (usuarioEditado !== null) {
            setUsuario(usuarioEditado)
        } else {
            setUsuario({
                nombre: "",
                apellido: "",
                correo: "",
                rut: ""
            }
            )
        }
    }, [usuarioEditado]);

    const handleInputChange = (e) => {
        const changedFormValue = {
            ...usuario,
            [e.target.name]: e.target.value
        }
        setUsuario(changedFormValue);
    }
    return (
        <div>
            <h3>Formulario Usuario</h3>
            <form>
                {usuarioEditado !== null ? <h1>Editar Usuario</h1> : <h1>Ingrese Usuario</h1>}
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Rut</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ingrese su nombre" name="rut" value={rut} onChange={handleInputChange} />
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ingrese su nombre" name="nombre" value={nombre} onChange={handleInputChange} />
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese su apellido" name="apellido" value={apellido} onChange={handleInputChange} />
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Correo</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese su direccion de correo electronico" name="correo" value={correo} onChange={handleInputChange} />
                </div>
                {usuarioEditado !== null ? (
                    <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => userEdit(usuario)}
                    >
                        Editar usuario
                    </button>
                ) : (
                    <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => userAdd(usuario)}
                    >
                        Ingresar usuario
                    </button>
                )}

                {usuarioEditado !== null ? <button
                        type="button"
                        class="btn btn-warning"
                        onClick={() => setUsuarioEditado(null)}
                    >
                        Cancelar
                    </button> : <></>}

                {/* <button type="button" class="btn btn-success" onClick={()=> {userAdd(usuario)}}>Ingresar Usuario</button> */}
            </form>
        </div>
    );
}

export { CarFormComponent, UserFormComponent };

/* {usuarioEditado!==null ? <h1>Editar Usuario</h1>:<h1>Ingrese Usuario</h1>} */
