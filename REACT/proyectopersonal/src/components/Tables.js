import React from "react";
import SendButton from "./Buttons";

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
                        <td class="d-flex justify-content-center"><button type="button" class="btn btn-primary" onClick={() => { deleteAuto(auto.id);}}>Eliminar</button></td>
                    </tr>
                ))}
{/*                <tr>
{/*                 <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="d-flex justify-content-center"><SendButton/></td>
                </tr>
                <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="d-flex justify-content-center"><SendButton/></td>
                </tr> */} 
            </tbody>
        </table>
    );
}

const UserTable = ({usuarios, deleteUser}) => {
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
                        <td class="d-flex justify-content-center"><button type="button" class="btn btn-primary" onClick={() => { deleteUser(usuario.rut);}}>Eliminar</button></td>
                        </tr>
                ))}
{/*                 <tr>
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
                </tr> */}
            </tbody>
        </table>
    );
}

export {CarTable, UserTable};