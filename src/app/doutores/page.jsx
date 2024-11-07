"use client"

import NavBarLayout from "@/components/layout/NavBarLayout";
import Image from "next/image"; // Ajuste o caminho conforme necessário
import Modal from "@/components/MedicoModal";
import cadastro from "@/js/cadastroDoutor";
import "@/js/doutores.js"
import { getMedico } from "@/js/info";
import {useState } from "react";


function criarCard(medicos) {
const card = document.createElement('div');
const contanierMedico = document.getElementById('contanierMedico')


    contanierMedico.classList.add(
    'gap-4',
    'p-4'
    )

    card.classList.add(
        'bg-blue-950',
        'rounded-lg',
        'w-[1000px]',
        'h-[50px]',
        'flex',
        

    );


    const especialidade = document.createElement('p');
    especialidade.textContent = medicos.nome;
    especialidade.classList.add(
        'text-white',
        'text-xl',
        'font-bold',
        'font-sans',
        'ml-[20px]',
        'mt-[10px]'
    );

    const nomeMedico = document.createElement('h2');
    nomeMedico.textContent =  medicos.nome_medico;
    nomeMedico.classList.add(
        'text-white', 
        'text-lg',
        'font-bold',
        'ml-[20px]'
    );

    

    card.append(especialidade, nomeMedico);
    card.addEventListener('click', () => {
    window.location.href = '/info?id=' + medicos.id_medico;
    });

    return card; // Retorna apenas o card
}

async function preencherContainer() {

    const contanierMedico = document.getElementById('contanierMedico');

    // Cria o contêiner se não existir
    if (!contanierMedico) {
        const newContainer = document.createElement('div');
        newContainer.id = 'contanierMedico';
        // Add actual class names here if you want to style the container
        document.body.appendChild(newContainer);
    }

    const medicos = await getMedico();

    // Acesse o contêiner que agora existe
    const container = document.getElementById('contanierMedico');

        medicos.forEach(medico => {
        const card = criarCard(medico);
        container.appendChild(card);
        console.log(card);
    });
}

preencherContainer();

export default function Medicos() {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className="flex flex-col">
            <NavBarLayout>

                <div className="flex-1 p-4">
             
                <div className="flex">
                    <h1 className="text-4xl font-bold text-[--font] p-10">DOUTORES CADASTRADOS</h1>

                    <div className="relative">
                    <input type="text" placeholder="Pesquisar..."className="bg-[--navempresa] pl-3 pr-10 py-2 ml-[400px] mt-[50px] rounded-full w-96 h-14 border focus:border-blue-900 focus:bg-blue-5 transition-all" 
                    />
                     <button>
                        <img src="./img/lupa.png" alt="" className="absolute ml-[-50px] mt-[-19px] w-7" />
                    </button>
                    </div>

                    </div>




                    {/* Div para o botao cadastrar*/}

                 <div>
                 <button onClick={() => setOpenModal(true)} className="bg-[--font] w-[25vh] h-[5vh] rounded-full ml-[130vh] mt-[10vh]">
                        <h1 className="text-white font-bold" >CADASTRAR DOUTORES +</h1>
                </button>
                 </div>

                 <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>


                     <div className=" mt-20 ml-[300px] grid ">
                            <div id="contanierMedico" className="gap-4 w-[1100px] h-[1700px]"  ></div>
                        </div>
                    



                    {/* Aqui você pode adicionar mais conteúdo */}
                </div>
            </NavBarLayout>
        </div>
    );
}