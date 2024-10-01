// NavBar.js
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import "../styles/globals.css";

// Import das Imagens
import infoImg from "../../public/img/empresa.png"
import inicioImg from "../../public/img/inicio.png"
import consultaImg from "../../public/img/consultas.png"
import doutorImg from "../../public/img/medicos.png"
import notificacoesImg from "../../public/img/notificacoes.png"




import NavBarCategory from './NavBarCategory';

const NavBar = () => {
    return (
        <div className="bg-[--azulprincipal] text-white w-64 min-h-screen flex flex-col py-6 px-4">
            {/* Logo Vital+ */}
            <div className="top-0">
                <img className="h-[60px]" src="/img/logo.png" alt="Logo" />
            </div>

    
            <ul className="mt-[8vh] " id="categoria">
                {/* Links da NavBar */}

                <NavBarCategory category={"/info-clinica"} images={infoImg} title={"Nome da Cliníca"} />
                <NavBarCategory category={"/inicio"} images={inicioImg} title={"Ínicio"} />
                <NavBarCategory category={"/consultas"} images={consultaImg} title={"Consultas"} />
                <NavBarCategory category={"/doutores"} images={doutorImg} title={"Doutores"} />
                <NavBarCategory category={"/notificacoes"} images={notificacoesImg} title={"Notificações"} />



        
               
            </ul>
        </div>
    );
};

export default NavBar;