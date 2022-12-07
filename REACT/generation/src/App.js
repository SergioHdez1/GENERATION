//un componenete es una funcion, la diferencia es que devuelve una vista
import React from "react";
import Table from 'react-bootstrap/Table';


const App = () => {
    return (
    <div>
        <table strip bordered hover>
            <thead>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>APELLIDO</th>
                <th>MAIL</th>
                <th>CONTRASEÑA</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Sergio</td>
                    <td>Hernandez</td>
                    <td>correo@correo.com</td>
                    <td>1234</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Andres</td>
                    <td>Salgado</td>
                    <td>hola@correo.com</td>
                    <td>2351</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
}
export default App;

const App2 = () => {
    return(
        <div>
            <h1>Hola mundo caluroso :c</h1>
            <p>Esto es un parrafo</p>
            <div>
                <h2>este es otro div :D</h2>
            </div>
            <div>
                <h3>y este es otro más :D</h3>
            </div>
        </div>
    );
}