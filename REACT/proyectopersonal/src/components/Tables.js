import React from "react";

const CarTable = ({autos, deleteAuto}) => {
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
                {autos.map(auto =>(
                    <tr>
                        <th scope="row">{auto.id}</th>
                        <td>{auto.marca}</td>
                        <td>{auto.modelo}</td>
                        <td>{auto.valor}</td>
                        <td>{auto.anio}</td>
                        <td class="d-flex justify-content-center"><button type="button" class="btn btn-danger" onClick={() => { deleteAuto(auto.id);}}>Eliminar</button></td>
                        <td class="d-flex justify-content-center"><button type="button" class="btn btn-warning" onClick={() => { deleteAuto(auto.id);}}>Editar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

const UserTable = ({usuarios, deleteUser, setUsuarioEditado}) => {
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
                {usuarios.map(usuario =>(
                    <tr>
                        <th scope="row"> {usuario.rut}</th>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.apellido}</td>
                        <td>{usuario.correo}</td>
                        <td class="d-flex justify-content-center"><button type="button" class="btn btn-danger" onClick={() => { deleteUser(usuario.rut)}}>Eliminar</button></td>
                        <td class="d-flex justify-content-center"><button type="button" class="btn btn-warning" onClick={() => { setUsuarioEditado(usuario)}}>Editar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export {CarTable, UserTable};