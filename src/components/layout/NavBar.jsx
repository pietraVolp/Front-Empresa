// NavBar.js
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Import das Imagens
import infoImg from "../../public/img/inicio.png"
import inicioImg from "../../public/img/historico.png"
import consultaImg from "../../public/img/medico.png"
import doutorImg from "../../public/img/agenda.png"
import notificacoesImg from "../../public/img/favoritos.png"




import NavBarCategory from './NavBarCategory';

const NavBar = () => {
    return (
        <div className="bg-principalazul text-white w-64 min-h-screen flex flex-col py-6 px-4">
            {/* Logo Vital+ */}
            <div className="top-0">
                <img className="h-[60px]" src="/img/logo.png" alt="Logo" />
            </div>

    
            <ul className="mt-[8vh]" id="categoria">
                {/* Links da NavBar */}

                <NavBarCategory category={"/info-clinica"} images={infoImg} title={"Nome da Cliníca"} />
                <NavBarCategory category={"/inicio"} images={inicioImg} title={"Ínicio"} />
                <NavBarCategory category={"/consulta"} images={consultaImg} title={"Consultas"} />
                <NavBarCategory category={"/doutor"} images={doutorImg} title={"Doutores"} />
                <NavBarCategory category={"/notificacoes"} images={notificacoesImg} title={"Notificações"} />
                <NavBarCategory category={"/configuracoes"} title={"Configurações"} />


        
               
            </ul>
        </div>
    );
};

export default NavBar;