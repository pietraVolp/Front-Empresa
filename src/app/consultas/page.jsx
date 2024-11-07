"use client"
import NavBarLayout from "@/components/layout/NavBarLayout";
import Image from "next/image"; // Ajuste o caminho conforme necessário
import Modal from "@/components/Modal";
import "@/js/cadastroConsulta";  
import "@/js/consulta";
import { getConsultas } from "@/js/info";
import {useState } from "react";



function criarCard(consulta) {
    const card = document.createElement('div');
    const contanierConsulta = document.getElementById('contanierConsulta')
    
    
    
        contanierConsulta.classList.add(
        
        )
    
        card.classList.add(
            'bg-blue-950',
            'rounded-lg',
            'w-[300px]',
            'h-[330px]'
            
    
        );
    
    
        const especialidade = document.createElement('p');
        especialidade.textContent = consulta.nome_especialidade;
        especialidade.classList.add(
            'text-white',
            'text-xl',
            'font-bold',
            'font-sans',
            'ml-[20px]'
        );
    
        const nomeMedico = document.createElement('h2');
        nomeMedico.textContent =  consulta.nome_medico;
        nomeMedico.classList.add(
            'text-white', 
            'text-lg',
            'font-bold',
            'ml-[20px]'
        );
    
    
        const detalhes = document.createElement('p');
        detalhes.textContent = "Descrição: " + consulta.detalhes_consulta;
        detalhes.classList.add(
            'text-white',
            'ml-[20px]'
        );
    
    
    
        const dias = document.createElement('p');
        // Tenta converter `dias_consulta` para uma data, se for possível
        const diasData = new Date(consulta.dias_consulta); // Cria um objeto Date
        if (!isNaN(diasData)) {
            dias.textContent = "Dia: " + diasData.toLocaleDateString(); // Converte para o formato local
        } else {
            dias.textContent = "Dia: " + consulta.dias_consulta; // Se não for uma data, exibe o valor original
        }
        dias.classList.add(
            'text-white',
            'ml-[20px]'
        );
    
        const horario = document.createElement('p');
        horario.textContent = consulta.horas_consulta;
        horario.textContent = "Horário: " + consulta.horas_consulta.slice(11,19);
        horario.classList.add(
            'text-white',
            'ml-[20px]'
        );
    
        card.append(especialidade, nomeMedico, detalhes, dias, horario);
        card.addEventListener('click', () => {
        window.location.href = '/info?id=' + consulta.id_consulta;
        });
    
        return card; // Retorna apenas o card
    }
    
    async function preencherContainer() {
    
        const contanierConsulta = document.getElementById('contanierConsulta');
    
        // Cria o contêiner se não existir
        if (!contanierConsulta) {
            const newContainer = document.createElement('div');
            newContainer.id = 'contanierConsulta';
            // Add actual class names here if you want to style the container
            document.body.appendChild(newContainer);
        }
    
        const consultas = await getConsultas();
    
        // Acesse o contêiner que agora existe
        const container = document.getElementById('contanierConsulta');
    
        consultas.forEach(consulta => {
            const card = criarCard(consulta);
            container.appendChild(card);
            console.log(card);
        });
    }
    
    preencherContainer();
    
    





export default function Consultas() {
    const [openModal, setOpenModal] = useState(false)

    



    return (
        <div className="flex flex-col">
            <NavBarLayout>

                <div className="flex-1 p-4">



                    <div className="flex">
                    <h1 className="text-4xl font-bold text-[--font] p-10">CONSULTAS</h1>

                    <div className="relative">
                    <input type="text" placeholder="Pesquisar..."className="bg-[--navempresa] ml-[500px] pl-3 pr-10 py-2 mt-[50px] rounded-full w-96 h-14 border focus:border-blue-900 focus:bg-blue-5 transition-all" 
                    />
                    <button>
                        <img src="./img/lupa.png" alt="" className="absolute ml-[-50px] mt-[-19px] w-7" />
                    </button>
                   
                    </div>

                    </div>


                    <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>
   
                        <div className=" flex mt-20 ml-[300px]  grid ">
                            <div id="contanierConsulta" className="flex flex-wrap gap-4 w-[1100px] h-[1700px]"  ></div>
                        </div>
                    


                    {/* Aqui você pode adicionar mais conteúdo */}
                </div>
            </NavBarLayout>
        </div>
    ); 
}