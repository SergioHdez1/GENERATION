import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    SendButton,
    UserFormComponent,
    UserTable,
} from "../components";


const usuario1 =[{
    nombre: 'Joseph',
    apellido: 'Joestar',
    correo: 'jo.jo@gmail.com',
    rut: '9563214-8'
    },
    {
    nombre: 'Josuke',
    apellido: 'higashikata',
    correo: 'jojo@gmail.com',
    rut: '17456329-9'
    },
    {
    nombre: 'Jotaro',
    apellido: 'Joestar',
    correo: 'jo.jo@gmail.com',
    rut: '9563213-8'
    }];

const UserPage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate("/Auto", {}, [navigate]))
    const handleOnClickHome = useCallback(() => navigate("/", {}, [navigate]))
    //en este momento state vale lo mismop que usuario 1
    //genera una funcion setteadora que me va a permitir cambiar los datos de ususario 1 sin afectarlo directamente (setState)
    const [user, setUser] = useState(usuario1);
    const [usuarioEditado, setUsuarioEditado] = useState(null);

    const userDelete = (rutUsuario) => {
        //esta funcion filtra mi lista de usuarios
        const changeUser = user.filter(usuario => usuario.rut != rutUsuario);
        //al momento de ocupar la funcion setState, yo le voy a cambiar el valor TEMPORAL a mis usuarios
        setUser(changeUser);
    }
    
    const userAdd = (usuario) => {
        const addUsuario = [
            //mantenme los datos que tengo en user y agregame lo que yo te entrego aqui (usuario)
            ...user, usuario //...(NOMBRE DEL STATE)
        ]
        //luego actualizamos (o seteamos) el state
        setUser(addUsuario);
    }

    const userEdit = (usuarioEditado) => {
        //crea un objeto usuario llamado editUser, si los rut son iguales, mapea usuario Editado, si no, mapea usuario
        const editUser = user.map(usuario => (usuario.rut === usuarioEditado.rut ? usuarioEditado : usuario))
        //setea el editUser(objeto usuario mapeado creado anteriormente)
        setUser(editUser);
    }

    return (
        <div>
            <h1 class="text-center">Ingreso de Usuarios</h1>
            <div class="container">
                <div class="row">
                    <div class="col container border m-4 p-2">
                        <UserFormComponent userAdd={userAdd} usuarioEditado={usuarioEditado} setUsuarioEditado={setUsuarioEditado} userEdit={userEdit}/>
                    </div>
                </div>
                <SendButton infoButton={"Ir a autos"} handleOnClick={handleOnClick} />
                <SendButton infoButton={"Ir al Inicio"} handleOnClick={handleOnClickHome}/>
                <h1 class="text-center">Vista de Usuarios</h1>
                <div class="container"></div>
                <div class="row">
                    <div class="col">
                        <UserTable usuarios={user} deleteUser ={userDelete} setUsuarioEditado={setUsuarioEditado}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPage;