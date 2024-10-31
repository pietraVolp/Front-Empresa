"use client"
import NavBarLayout from "@/components/layout/NavBarLayout";
import Image from "next/image"; // Ajuste o caminho conforme necessário
import Modal from "@/components/Modal";
import "@/js/cadastroConsulta";  
import "@/js/consulta";
import {useState } from "react";





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
                   
                    </div>

                    </div>


                        <div className="mt-[160px] ml-[200px] absolute p-10 ">
                            <div id="contanierConsulta" className="bg-zinc-200 rounded-lg w-[350px] p-10" ></div>
                        </div>



                    <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>
   
                    


                    {/* Aqui você pode adicionar mais conteúdo */}
                </div>
            </NavBarLayout>
        </div>
    );
}